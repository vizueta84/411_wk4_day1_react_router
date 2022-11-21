import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";
// import MUI components here //
// Container, Paper, Chip //

import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const { id } = useParams();

  const foundCar = cars.find((car) => {
    if (car.id == id) {
      return true;
    }
    return false;
  });
  console.log(foundCar);

  console.log(id);
  return (
    <Container style= {{
        width: "600px"
    }}>
      <Paper style= {{
        padding: 20
      }}>
        <h1>{foundCar.Name}</h1>
        {/* <Chip label= {`mpg: ${foundCar.Miles_per_Gallon}`}/> */}

        {Object.keys(foundCar).map((key) => {
          return <Chip label={`${key}: ${foundCar[key]}`} style = {{margin: 5}}/>;
        })}
      </Paper>
    </Container>
  );
};

export default Car;
