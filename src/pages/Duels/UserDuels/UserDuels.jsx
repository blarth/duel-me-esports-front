/* eslint-disable react/prop-types */
import { Avatar, Box } from 'grommet'
import React from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import * as S from "./style"

// eslint-disable-next-line no-unused-vars
export default function UserDuels({id, duelUser}) {
  const navigate = useNavigate()
  return (
    <S.box
      onClick={() => {
        navigate(`/duel/${id}`)
      }}
    >
      <Box direction='row' gap='xsmall' align='center'>
        <S.IconWrapper>
          <MdMonetizationOn />
        </S.IconWrapper>
        <S.TextOdd>{duelUser[0].bet}</S.TextOdd>
      </Box>
      <Avatar src={duelUser[0].user.image} />
      <Avatar src={duelUser[0].team.logo} />
    </S.box>
  )
}
