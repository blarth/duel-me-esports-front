/* eslint-disable react/prop-types */
import { Avatar, Box } from 'grommet'
import React from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import * as S from "./style"

// eslint-disable-next-line no-unused-vars
export default function UserDuels({user, team, duelId, bet}) {
  const navigate = useNavigate()
  return (
    <S.box
      onClick={() => {
        navigate(`/duel/${duelId}`)
      }}
    >
      <Box direction='row' gap='xsmall' align='center'>
        <S.IconWrapper>
          <MdMonetizationOn />
        </S.IconWrapper>
        <S.TextOdd>{bet}</S.TextOdd>
      </Box>
      <Avatar src={user.image} />
      <Avatar src={team.logo} />
    </S.box>
  )
}
