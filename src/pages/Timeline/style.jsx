import { Accordion, Box, Heading } from "grommet";
import styled from "styled-components";

export const Container = styled(Box)`
  width: 100vw;
  height: 100vh;
  background: #1A1C20;
  justify-content: flex-start;
  align-items: space-between;
  gap: 40px;
  margin-top: 50px;
  overflow-y: scroll;
`

export const Text = styled(Heading)`
  font-weight: 700;
  color: #ffffff;
  padding-left: 25px;
  align-self: flex-start;
`;

export const AccordionTournaments = styled(Accordion)`
  background-color: #303236;
  overflow-y: scroll;
  color: #feb800;
`