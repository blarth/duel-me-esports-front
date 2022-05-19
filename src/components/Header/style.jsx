import styled from 'styled-components'
import { Box } from 'grommet'

export const Container = styled(Box)`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #656466;
  position: fixed;
  top: 0;

`

export const IconWrapper = styled(Box)`
  font-size: 36px;
  color: #FEB800;
`

export const Content = styled(Box)`
  width: 90%;
  min-height: 4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
