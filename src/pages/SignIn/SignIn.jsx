/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {  Button, Form } from 'grommet'
import { Hide, View } from 'grommet-icons'
import { GiBolas } from 'react-icons/gi'
import * as S from './style'
import { signIn } from '../../services/users'
import useAuth from '../../hooks/useAuth'
import useUser from '../../hooks/useUser'



export default function SignIn() {
  const navigate = useNavigate()
  const { auth, signin } = useAuth()
  const { signUser } = useUser()
  const [loading, setLoading] = useState(false)
  const [reveal, setReveal] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
  })

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const user = { ...formData }

    if (
      user.email === '' ||
      user.password === ''
    ) {
      alert('Missing field')
      setLoading(false)
      return
    }

    try {
      const response = await signIn(user)
      signin(response.token)
      signUser(response.user)
      navigate('/')
    } catch (error) {
      setLoading(false)

      if (error.response.status === 401) {
        console.error(error.status)
        alert("Unauthorized")
      }
      alert('Our servers in construction, sorry for the inconvenient')
      console.log(error.status)
    }
  }
  useEffect(() => {
    if (auth) {
      navigate('/')
    } // eslint-disable-next-line
  }, [auth])

  return (
    <S.Container>
      <S.Content>
        <S.IconWrapper>
          <GiBolas />
        </S.IconWrapper>
        <S.textLogo>
          Duel-me <br />
          E-sports
        </S.textLogo>
        <Form
          style={{}}
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <S.formField
            name='email'
            label='Email'
            onChange={(e) => {
              handleChange(e)
            }}
          >
            <S.textInput
              name='email'
              value={formData.email}
              placeholder='email@bet.com'
            />
          </S.formField>
          <S.formField
            name='password'
            label='Senha'
            onChange={(e) => {
              handleChange(e)
            }}
          >
            <S.textInput
              name='password'
              plain
              value={formData.password}
              placeholder='123456'
              type={reveal ? 'text' : 'password'}
            />
            <Button
              icon={reveal ? <View size='medium' /> : <Hide size='medium' />}
              onClick={() => setReveal(!reveal)}
            />
          </S.formField>

          <S.Buttons type='submit' label='Submit' disabled={loading}>
            Sign Up
          </S.Buttons>
        </Form>
        <S.StyledLink to='/'>Voltar para a página principal?</S.StyledLink>
        <S.StyledLink to='/sign-up'>Gostaria de se cadastrar?</S.StyledLink>
      </S.Content>
    </S.Container>
  )
}
