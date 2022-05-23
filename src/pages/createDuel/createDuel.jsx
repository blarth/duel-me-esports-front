/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import { Avatar, Box } from 'grommet'
import dayjs from 'dayjs'
import * as S from './style'
import useAuth from '../../hooks/useAuth'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { getDuelMatch, postDuelMatch } from '../../services/duels'
import PlaceBetModal from './Modal/Modal'

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

 async function handleDuel(e){
    e.preventDefault()
    

    const createDuelData = {
      teamId,
      bet : Number(bet)
    }
    
    try {
      const duelId = await postDuelMatch(auth, id, createDuelData)
      setPlaceBetModal(false)
      alert('Duelo criado!')
      navigate(`/duel/${duelId}`)

    } catch (error) {
      console.log(error.status)
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
          <S.box>
            <Box
              direction='row'
              gap='large'
              justify='flex-start'
              align='center'
            >
              <Avatar size='large' src={data.matchesTeam[0].team.logo} />
              <S.TextName>{data.matchesTeam[0].team.name}</S.TextName>
            </Box>
            <Box direction='row' gap='xlarge'>
              <S.TextOdd>{data.leftTeamOdd}</S.TextOdd>
              <S.Buttons
                onClick={() => {
                  setTeamId(data.matchesTeam[0].team.id)
                  setTeamName(data.matchesTeam[0].team.name)
                  setOdd(data.leftTeamOdd)
                  openBetModal()
                }}
                size='small'
                type='primary'
                label='Aposte nesse time!'
              />
            </Box>
          </S.box>
          <S.box>
            <Box
              direction='row'
              gap='large'
              justify='flex-start'
              align='center'
            >
              <Avatar size='large' src={data.matchesTeam[1].team.logo} />
              <S.TextName>{data.matchesTeam[1].team.name}</S.TextName>
            </Box>
            <Box direction='row' gap='xlarge'>
              <S.TextOdd>{data.rightTeamOdd}</S.TextOdd>
              <S.Buttons
                onClick={() => {
                  setTeamId(data.matchesTeam[1].team.id)
                  setTeamName(data.matchesTeam[1].team.name)
                  setOdd(data.rightTeamOdd)
                  openBetModal()
                }}
                size='small'
                type='primary'
                label='Aposte nesse time!'
              />
            </Box>
          </S.box>
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
