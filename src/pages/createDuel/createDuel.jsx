/* eslint-disable react/jsx-no-bind */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import {  Box } from 'grommet'
import dayjs from 'dayjs'
import * as S from './style'
import useAuth from '../../hooks/useAuth'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { getDuelMatch, postDuelMatch } from '../../services/duels'
import PlaceBetModal from './Modal/Modal'
import Team from '../../components/Team'
import UserContext from '../../context/userContext'

export default function Duel() {
  const navigate = useNavigate()
  const { auth } = useAuth()
  const [data, setData] = useState(null)
  const [teamId, setTeamId] = useState()
  const [teamName, setTeamName] = useState()
  const [bet, setBet] = useState() 
  const [odd, setOdd] = useState()
  const {id} = useParams()
  const [placeBetModal, setPlaceBetModal] = useState(false)
  const { user, signUser } = useContext(UserContext)

 async function handleDuel(e){
    e.preventDefault()
    

    const createDuelData = {
      teamId,
      bet : Number(bet)
    }
    
    try {
      const duelId = await postDuelMatch(auth, id, createDuelData)
      const userNewData = { ...user, blerth: user.blerth - bet }
      signUser(userNewData)
      setPlaceBetModal(false)
      alert('Duelo criado!')
      navigate(`/duel/${duelId}`)

    } catch (error) {
      console.log(error.message)
    }


  }

  function openBetModal() {
    
    setPlaceBetModal(true)
    document.body.style.overflow = 'hidden'
  }

  async function get() {
    const response = await getDuelMatch(id)
    setData(response)
  }
  useEffect(() => {
    if (!auth) {
      navigate('/')
    }
    get()
  }, [])

  if (data === null) return <h1>Loading...</h1>
  
  return (
    <>
      <S.Container>
        <Header />
        <Box
          direction='column'
          gap='xlarge'
          margin='20px 0 0 0'
          justify='space-between'
          align='center'
          width='100vh'
        >
          <S.Text>{dayjs(data.startedAt).format('DD/MM/YYYY - HH:mm')}</S.Text>

          {data.matchesTeam.map((team) => (
            <Team
              team={team}
              setTeamId={setTeamId}
              setTeamName={setTeamName}
              setOdd={setOdd}
              openBetModal={openBetModal}
            />
          ))}
        </Box>
        <Footer />
      </S.Container>
      <PlaceBetModal
        teamId={teamId}
        placeBetModal={placeBetModal}
        setPlaceBetModal={setPlaceBetModal}
        setBet={setBet}
        bet={bet}
        teamName={teamName}
        odd={odd}
        handleDuel={handleDuel}
      />
    </>
  )
}
