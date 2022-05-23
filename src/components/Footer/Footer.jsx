import React from 'react'
import { SiBetfair } from 'react-icons/si'
import { MdMonetizationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Avatar, Box } from 'grommet'
import logo from "../../assets/dm.png"


import * as S from './style'
import useUser from '../../hooks/useUser'

export default function Footer() {
  const navigate = useNavigate()
  const {user} = useUser()

  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>
          <SiBetfair
            onClick={() => {
              navigate('/my-duels')
            }}
          />
        </S.IconWrapper>
        <Avatar
          alignSelf='flex-end'
          onClick={() => {
            navigate('/')
          }}
          size='medium'
          src={user ? user.image : logo}
        />
        <Box direction='row' gap='medium' align='center'>
        <S.IconWrapper>
          <MdMonetizationOn />
        </S.IconWrapper>
        <p style={{color:"#FEB800", fontSize : "20px"}}>{user ? user.blerth : 0}</p>
        </Box>
      </S.Content>
    </S.Container>
  )
}
