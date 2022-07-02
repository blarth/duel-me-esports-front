import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import useAuth from '../../hooks/useAuth'
import { list } from '../../services/duelUser'
import UserDuels from './UserDuels'
import * as S from "./style"

export default function MyDuels() {
  const navigate = useNavigate()
  const { auth } = useAuth()
  const [upcoming, setUpcoming] = useState(null)
  const [won, setWon] = useState(null)
  const [lost, setLost] = useState(null)
  async function get() {
    const {duelsUpcoming, duelsWon, duelsLost} = await list(auth)
    setWon(duelsWon)
    setLost(duelsLost)
    setUpcoming(duelsUpcoming)
    
  }
  useEffect(() => {
    if (!auth) {
      navigate('/')
    }
    get()
  }, [])
  if(upcoming === null || won === null || lost === null) return <p>Loading..</p>
  return (
    <>
      <Header />
      <S.Container>
        <S.Text>Duelos rolando!</S.Text>
      {upcoming.map((el) => (
        <UserDuels {...el} />
      ))}
        <S.Text>Duelos Ganhos!</S.Text>
      {won.map((el) => (
        <UserDuels {...el} />
      ))}
        <S.Text>Duelos perdidos!</S.Text>
      {lost.map((el) => (
        <UserDuels {...el} />
      ))}
      </S.Container>
      <Footer />
    </>
  )
}
