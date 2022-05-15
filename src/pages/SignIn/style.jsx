import styled from 'styled-components'
import { Box, Button, FormField, TextInput } from 'grommet'
import { Link } from 'react-router-dom'

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: rgb(16, 6, 0);
  justify-content: center;
  align-items: space-between;
  gap: 40px;
  margin: 0;
`
export const Buttons = styled(Button)`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  font-weight: 700;
  margin-bottom: 30px;
  background-color: #feb800;
  color: rgb(31, 18, 11);
`

export const Content = styled(Box)`

  width: 100%;
  margin : 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const formField = styled(FormField)`
  color: #f8f7f2;
  font-weight: 700;
`

export const textInput = styled(TextInput)`
  background: #303236;
  
`

export const StyledLink = styled(Link)`
  all: unset;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;

  margin-top: 25px;

  font-weight: 400;
  font-size: 20px;

  font-family: 'Ubuntu', sans-serif;

  text-decoration: underline;

  
`