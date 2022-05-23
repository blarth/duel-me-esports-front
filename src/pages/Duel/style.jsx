import { Box, Button, Heading, Paragraph } from 'grommet'
import styled from 'styled-components'

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: #1a1c20;
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
  overflow-y: scroll;
`

export const Text = styled(Heading)`
  font-weight: 400;
  color: #fff;
  font-size: medium;
`
export const TextName = styled(Paragraph)`
  font-weight: 400;
  color: #fff;
  font-size: medium;
  
`
export const TextOdd = styled(Paragraph)`
  font-weight: 400;
  color: #ffffff;
  font-size: medium;
  padding-left: 10px;
`
export const Buttons = styled(Button)`
  border-color: #feb800;
  color: #ffffff;
`

export const box = styled(Box)`
  direction: column;
  gap: small;
  background: #303236;
  width: 90%;
  padding : 20px 10px;
  border-radius: 15px;
  border: 1px solid;
  border-color: #feb800;

`

export const BoxUser = styled(Box)`

  margin-left: 50px;
`
  
