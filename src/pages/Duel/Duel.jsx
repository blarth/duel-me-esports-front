/* eslint-disable react/jsx-no-bind */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {  Box } from 'grommet'
import dayjs from 'dayjs'
import * as S from './style'
import useAuth from '../../hooks/useAuth'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { getDuel, postDuel } from '../../services/duels'
import PlaceBetModal from './Modal/Modal'
import UserContext from '../../context/userContext'
import DuelTeam from './DuelTeam'

export default function Duel() {
  const navigate = useNavigate()
  const { auth } = useAuth()
  const [data, setData] = useState(null)
  const [teamId, setTeamId] = useState()
  const [teamName, setTeamName] = useState()
  const [bet, setBet] = useState()
  const [odd, setOdd] = useState()
  const [valueAccepted, setValueAccepted] = useState(0)
  const { id } = useParams()
  const [placeBetModal, setPlaceBetModal] = useState(false)
  const { user, signUser } = useContext(UserContext)

  async function handleDuel(e) {
    e.preventDefault()

    const createDuelData = {
      teamId,
      bet: Number(bet),
    }
    if(bet !== valueAccepted){
      alert('O valor da aposta deve que ser igual ao aceito')
      return
    }
    try {
      await postDuel(auth, id, createDuelData)
      const userNewData = { ...user, blerth: user.blerth - bet }
      signUser(userNewData)
      setPlaceBetModal(false)
      alert('Duelo Aceito!')
      navigate(`/duel/${id}`)
    } catch (error) {
      setPlaceBetModal(false)
      alert(error.response.data)
    }
  }

  function openBetModal() {
    setPlaceBetModal(true)
    document.body.style.overflow = 'hidden'
  }

  async function get() {
    const response = await getDuel(id, auth)
    setData(response)
    if (response.duelUser.length < 2) {
      const match = response.match.matchesTeam.find(
        (el) => el.team.duelUser.length === 1
      )
      setValueAccepted(((response.duelUser[0].bet)*(match.odd - 1)).toFixed(0))
    }
  }
  useEffect(() => {
    if (!auth) {
      navigate('/sign-up')
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
          <S.Text>
            {dayjs(data.match.startedAt).format('DD/MM/YYYY - HH:mm')}
          </S.Text>

          {data.match.matchesTeam.map((team) => (
            <DuelTeam
              team={team}
              duelUser={data.duelUser}
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
        valueAccepted={valueAccepted}
        handleDuel={handleDuel}
      />
    </>
  )
}
