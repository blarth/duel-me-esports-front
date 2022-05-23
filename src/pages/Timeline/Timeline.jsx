import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style'
import useAuth from '../../hooks/useAuth'
import Tournament from './Components/Tournament/Tournament'
import { getData } from '../../services/homepage'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


export default function Timeline() {
  const navigate = useNavigate()
  const { auth } = useAuth()
  const [data, setData] = useState(null)
  
  async function get() {
    const response = await getData()
    setData(response)
  }
  useEffect(() => {
    if (!auth) {
      navigate('/')
    }
    get()
  }, [])

  if(data === null) return <h1>Loading...</h1>
  

  return (
    <S.Container>
      <Header />
      <S.Text>Tournaments</S.Text>
      <S.AccordionTournaments>
        {data.map((tournament) => <Tournament {...tournament} />)}
      </S.AccordionTournaments>
      <Footer />
    </S.Container>
  )
}
