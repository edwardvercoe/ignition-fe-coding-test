import React, { useState } from "react"
import {
  Alert,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button
} from "@chakra-ui/react"

import { isValidDecimal } from "./lib/isValidDecimal"

const SimpleForm = () => {
  const [value, setValue] = useState("")
  const [submit, setSubmit] = useState(false)
  // TODO: complete this component

  const handleChange = (value) => {
    setValue(value)
    setSubmit(false)
  }
  const handleClick = () => {
    if (!submit) {
      setSubmit(true)
    }
  }

  return (
    <>
      {submit && isValidDecimal(value) && (
        <Box>
          <Alert status="success">Valid</Alert>
        </Box>
      )}

      {submit && isValidDecimal(value) == false && (
        <Box>
          <Alert status="error">Not Valid</Alert>
        </Box>
      )}

      <NumberInput onChange={handleChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button colorScheme="blue" onClick={handleClick}>
        Validate
      </Button>
    </>
  )
}

export default SimpleForm
