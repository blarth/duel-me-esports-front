import styled from 'styled-components'
import { Box, Button, FormField, TextInput, Text } from 'grommet'
import { Link } from 'react-router-dom'

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: #1a1c20;
  justify-content: center;
  align-items: space-between;
  gap: 40px;
  margin: 0;
`
export const Buttons = styled(Button)`
  color: #ffffff;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  font-weight: 700;
  margin-bottom: 30px;
  border-radius: 15px;
  border: 2px solid #feb800;
`

;

export const Content = styled(Box)`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


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
export const textLogo = styled(Text)`
  width: max-content;
  font-size: 4rem;
  line-height: 3rem;
  text-align: center;
  font-family: 'Faster One', sans-serif;
  color: #f8f7f2;
`
export const IconWrapper = styled(Box)`
  font-size: 3em;
  color: #f8f7f2;
`