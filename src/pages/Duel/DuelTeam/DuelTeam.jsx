/* eslint-disable react/prop-types */
import { Avatar, Box } from 'grommet'
import React from 'react'
import * as S from './style'


export default function DuelTeam({
  team,
  duelUser,
  setTeamId,
  setTeamName,
  setOdd,
  openBetModal,
}) {
  const isDuelist = duelUser.find((duelist) => duelist.teamId === team.team.id)
  
  return (
    <S.box>
      <Box direction='row' gap='large' justify='flex-start' align='center'>
        <Avatar size='large' src={team.team.logo} />
        <S.TextName>{team.team.name}</S.TextName>
      </Box>
      <Box direction='row' gap='xlarge'>
        <S.TextOdd>{team.odd}</S.TextOdd>
        {!isDuelist ? (
          <S.Buttons
            onClick={() => {
              setTeamId(team.team.id)
              setTeamName(team.team.name)
              setOdd(team.odd)
              openBetModal()
            }}
            size='small'
            type='primary'
            label='Aposte nesse time!'
          />
        ) : (
          <>
            <Avatar size='large' src={isDuelist.user.image} />
            <S.BoxUser direction='column' gap='small'>
              <S.TextName>{isDuelist.user.name}</S.TextName>
              <S.TextName>Blerths : {isDuelist.bet}</S.TextName>
            </S.BoxUser>
          </>
        )}
      </Box>
    </S.box>
  )
}
