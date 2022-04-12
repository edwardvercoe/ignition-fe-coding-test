import React, { useState } from "react"
import { Button, Grid, GridItem } from "@chakra-ui/react"

// NOTE: contents of this component are just an example
// to get you started and illustrate the general idea
// you are free to use whatever structures and components you want
const ButtonGrid = () => {
  const [colors, setColors] = useState([
    "green",
    "green",
    "green",
    "green",
    "red",
    "green",
    "green",
    "green",
    "green"
  ])

  const handleClick = (value) => {
    console.log(value)
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      <GridItem>
        <Button onClick={handleClick} colorScheme={colors[0]}>
          1
        </Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[1]}>2</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[2]}>3</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[3]}>4</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[4]}>5</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[5]}>6</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[6]}>7</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[7]}>8</Button>
      </GridItem>
      <GridItem>
        <Button colorScheme={colors[8]}>9</Button>
      </GridItem>
    </Grid>
  )
}

export default ButtonGrid
