import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import useAuth from '../../hooks/useAuth'
import { listAll } from '../../services/duelUser'
import UserDuels from './UserDuels'
import * as S from "./style"

export default function Duels() {
  const navigate = useNavigate()
  const { auth } = useAuth()
  const [data, setData] = useState(null)
  
  async function get() {
    const response = await listAll()
    setData(response)
  }
  useEffect(() => {
    if (!auth) {
      navigate('/')
    }
    get()
  }, [])
  if (data === null) return <p>Loading..</p>
  
  return (
    <>
      <Header />
      <S.Container>
        <S.Text>Duelos rolando!</S.Text>
        {data.map((el) => (
          <UserDuels {...el} />
        ))}
      </S.Container>
      <Footer />
    </>
  )
}
