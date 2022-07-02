/* eslint-disable react/prop-types */
import React from 'react'
import { Accordion, AccordionPanel, Avatar, Box,  } from 'grommet'
import {GiCrossMark} from "react-icons/gi"
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import * as S from './style'



export default function Match({ id ,name, startedAt ,matchesTeam  }) {
  const navigate = useNavigate()
   
  return (
    <Accordion>
      <AccordionPanel label={name.toUpperCase()}>
        <Box justify='center' align='center'>
          <S.Text>{dayjs(startedAt).format('DD/MM/YYYY - HH:mm')}</S.Text>
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
              <S.Text>{matchesTeam[0].odd}</S.Text>
              <S.IconWrapper>
                <GiCrossMark />
              </S.IconWrapper>
              <S.Text>{matchesTeam[1].odd}</S.Text>
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
          <S.Buttons
            onClick={() => {
              navigate(`/createDuel/${id}`)
            }}
            size='small'
            type='primary'
            label='Crie um duelo!'
          />
        </Box>
      </AccordionPanel>
    </Accordion>
  )
}
