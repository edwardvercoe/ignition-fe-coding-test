import React, { useState, useEffect } from "react"
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
    "green",
    "green",
    "green",
    "green",
    "green"
  ])

  const setRandomButtonRed = () => {
    let random = Math.floor(Math.random() * 9)
    const greenAvailable = colors.find((color) => color === "green")
    if (!greenAvailable) return
    while (colors[random] !== "green") {
      random = Math.floor(Math.random() * 9)
    }
    const currColors = [...colors]
    currColors[random] = "red"
    setColors(currColors)
  }

  const setButtonRed = (index) => {
    const currColors = [...colors]
    currColors[index] = "red"
    setColors(currColors)
  }

  useEffect(() => {
    setRandomButtonRed()
  }, [])

  const handleClick = (color, index) => {
    console.log(color, index)
    if (color === "red") {
      setRandomButtonRed()
    } else {
      setButtonRed(index)
    }
  }

  const buttonGrid = colors.map((color, index) => (
    <GridItem key={`${color}_${index}`}>
      {console.log("col", color)}
      <Button onClick={() => handleClick(color, index)} colorScheme={color}>
        {index + 1}
      </Button>
    </GridItem>
  ))
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2}>
      {buttonGrid}
    </Grid>
  )
}

export default ButtonGrid
