import React from 'react'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { GiPayMoney } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useUser from '../../hooks/useUser'
import * as S from './style'

export default function Header() {
  const navigate = useNavigate()
  const {signin} = useAuth()
  const {signUser} = useUser()

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
              signUser('')
              navigate('/sign-up')
            }}
          />
        </S.IconWrapper>
      </S.Content>
    </S.Container>
  )
}
