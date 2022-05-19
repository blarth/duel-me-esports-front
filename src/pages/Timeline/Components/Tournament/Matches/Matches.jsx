/* eslint-disable react/prop-types */
import React from 'react'
import { Accordion, AccordionPanel, Avatar, Box,  } from 'grommet'
import {GiCrossMark} from "react-icons/gi"
import { useNavigate } from 'react-router-dom'
import * as S from './style'


export default function Match({ id ,name, startedAt , leftTeamOdd, rightTeamOdd, matchesTeam  }) {
  const navigate = useNavigate()
   
  return (
    <Accordion>
      <AccordionPanel label={name.toUpperCase()}>
        <Box pad='medium' justify='center' align='center'>
          <S.Text>{startedAt}</S.Text>
          <Box direction='row' gap='medium' align='center' justify='center'>
            <Box direction='column' gap='small' align='center'>
              <S.Text>{matchesTeam[0].team.name.toUpperCase()}</S.Text>
              <Avatar
                alignSelf='flex-end'
                size='medium'
                src={matchesTeam[0].team.logo}
              />
            </Box>
            <Box direction='row' gap='medium' align='center'>
              <S.Text>{leftTeamOdd}</S.Text>
              <S.IconWrapper>
                <GiCrossMark />
              </S.IconWrapper>
              <S.Text>{rightTeamOdd}</S.Text>
            </Box>
            <Box direction='column' gap='small' justify='center' align='center'>
              <S.Text>{matchesTeam[1].team.name.toUpperCase()}</S.Text>
              <Avatar
                alignSelf='flex-end'
                size='medium'
                src={matchesTeam[1].team.logo}
              />
            </Box>
          </Box>
          <S.Buttons onClick={() => {
            navigate(`/duels/${id}`)
          }} size='small' type='primary' label='Crie um duelo!' />
        </Box>
      </AccordionPanel>
    </Accordion>
  )
}
