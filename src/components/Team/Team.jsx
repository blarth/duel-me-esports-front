/* eslint-disable react/prop-types */
import { Avatar, Box } from 'grommet';
import React from 'react';

import * as S from './style';

function Team({
  team: { odd, team },
  setTeamId,
  setTeamName,
  setOdd,
  openBetModal,
}) {
  
  return (
    <S.box>
      <Box direction='row' gap='large' justify='flex-start' align='center'>
        <Avatar size='large' src={team.logo} />
        <S.TextName>{team.name}</S.TextName>
      </Box>
      <Box direction='row' gap='xlarge'>
        <S.TextOdd>{odd}</S.TextOdd>
        <S.Buttons
          onClick={() => {
            setTeamId(team.id)
            setTeamName(team.name)
            setOdd(odd)
            openBetModal()
          }}
          size='small'
          type='primary'
          label='Aposte nesse time!'
        />
      </Box>
    </S.box>
  )
}

export default Team;