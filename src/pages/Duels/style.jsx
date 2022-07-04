import { Box, Heading } from "grommet";
import styled from "styled-components";

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: #1a1c20;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  padding-top: 15px;
  margin-top: 4em;
  overflow-y: scroll;
  margin-bottom: 4em;
  padding-bottom: 15px;
`

  export const Text = styled(Heading)`
    font-weight: 400;
    color: #fff;
    font-size: medium;
  `