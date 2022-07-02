/* eslint-disable no-alert */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {   Button, Form,   } from 'grommet'
import { Hide, View } from 'grommet-icons'
import {GiBolas} from 'react-icons/gi'
import * as S from './style'


import { create } from '../../services/users'

export default function SignUp() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [reveal, setReveal] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    image: '',
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
      user.password === '' ||
      user.name === '' ||
      user.image === ''
    ) {
      alert('Missing field')
      setLoading(false)
      return
    }

    try {
      await create(user)

      navigate('/sign-in')
    } catch (error) {
      setLoading(false)

      if (error.response.status === 409) {
        alert('email must be unique')
      }
      alert('Our servers in construction, sorry for the inconvencie')
      console.log(error.status)
    }
  }

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
            onChange={(e) => {
              handleChange(e)
            }}
            name='name'
            label='Nome'
          >
            <S.textInput
              name='name'
              value={formData.name}
              placeholder='Seu nome grande apostador!'
            />
          </S.formField>
          <S.formField
            name='image'
            label='Imagem'
            onChange={(e) => {
              handleChange(e)
            }}
          >
            <S.textInput
              name='image'
              value={formData.image}
              placeholder='Sua linda imagem'
            />
          </S.formField>
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
              placeholder='bet@bet.com'
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
              type={reveal ? 'text' : 'password'}
              plain
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
        <S.StyledLink to='/sign-in'>Clique aqui para fazer login!</S.StyledLink>
      </S.Content>
    </S.Container>
  )
}
