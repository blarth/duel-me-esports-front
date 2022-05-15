/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Form } from 'grommet'
import * as S from './style'
import dmLogo from '../../assets/dm.png'
import { signIn } from '../../services/users'
import useAuth from '../../hooks/useAuth'
import useUser from '../../hooks/useUser'



export default function SignIn() {
  const navigate = useNavigate()
  const { auth, signin } = useAuth()
  const { setUser } = useUser()
  const [loading, setLoading] = useState(false)

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
      setUser(response.user)
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
      <Box>
        <img src={dmLogo} alt='Duel Master E-sports!' />
      </Box>
      <S.Content>
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
              value={formData.password}
              placeholder='123456'
            />
          </S.formField>

          <S.Buttons type='submit' primary label='Submit' disabled={loading}>
            Sign Up
          </S.Buttons>
        </Form>
        <S.StyledLink to='/'>Voltar para a página principal?</S.StyledLink>
        <S.StyledLink to='/sign-up'>Gostaria de se cadastrar?</S.StyledLink>
      </S.Content>
    </S.Container>
  )
}