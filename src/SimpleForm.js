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
import styled from "@emotion/styled"
import { motion } from "framer-motion"

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
      <Container>
        {submit && isValidDecimal(value) && (
          <AlertWrapper
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <Alert status="success">Valid</Alert>
          </AlertWrapper>
        )}

        {submit && isValidDecimal(value) == false && (
          <AlertWrapper
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <Alert status="error">Not Valid</Alert>
          </AlertWrapper>
        )}

        <h2>Enter a valid decimal number</h2>
        <NumberInput placeholder="Enter a number" onChange={handleChange}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <ButtonContainer>
          <Button width="100%" colorScheme="blue" onClick={handleClick}>
            Validate
          </Button>
        </ButtonContainer>
      </Container>
    </>
  )
}

const AlertWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;

  .chakra-alert {
    border-radius: var(--chakra-radii-md);
    margin: 0 auto;
    display: block;
  }
`

const Container = styled.div`
  position: relative;
  max-width: 230px;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0;
  h2 {
    margin-bottom: 20px;
  }
`

const ButtonContainer = styled.div`
  padding: 40px 0;
`

export default SimpleForm
