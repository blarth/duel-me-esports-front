import React from 'react'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { GiPayMoney } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as S from './style'

export default function Header() {
  const navigate = useNavigate()
  const {signin} = useAuth()

  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>
          <GiPayMoney 
          onClick={() => {
            navigate('/duels')
          }}/>
        </S.IconWrapper>
        <S.IconWrapper>
          <BsFillDoorOpenFill
            onClick={() => {
              signin('')
              navigate('/sign-up')
            }}
          />
        </S.IconWrapper>
      </S.Content>
    </S.Container>
  )
}
