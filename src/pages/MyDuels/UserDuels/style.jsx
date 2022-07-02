import { Box, Paragraph } from "grommet";
import styled from "styled-components";

export const box = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: small;
  background: #303236;
  width: 90%;
  padding: 20px 10px;
  border-radius: 15px;
  border: 1px solid;
  border-color: #feb800;
`

export const TextOdd = styled(Paragraph)`
  font-weight: 400;
  color: #feb800;
  font-size: medium;
  padding-left: 10px;
`

export const IconWrapper = styled(Box)`
  font-size: 36px;
  color: #feb800;
`
