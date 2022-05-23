/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Avatar, Box } from 'grommet'
import dayjs from 'dayjs'
import * as S from './style'
import useAuth from '../../hooks/useAuth'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { getDuel, postDuel } from '../../services/duels'
import PlaceBetModal from './Modal/Modal'

export default function Duel() {
  const navigate = useNavigate()
  const { auth } = useAuth()
  const [data, setData] = useState(null)
  const [duelist, setDuelist] = useState(null)
  const [teamId, setTeamId] = useState()
  const [teamName, setTeamName] = useState()
  const [firstInfoPlayer, setFirstInfoPlayer] = useState(null)
  const [secondInfoPlayer, setSecondInfoPlayer] = useState(null)
  const [bet, setBet] = useState()
  const [odd, setOdd] = useState()
  const { id } = useParams()
  const [placeBetModal, setPlaceBetModal] = useState(false)

  async function handleDuel(e) {
    e.preventDefault()

    const createDuelData = {
      teamId,
      bet: Number(bet),
    }

    try {
      await postDuel(auth, id, createDuelData)
      setPlaceBetModal(false)
      alert('Duelo criado!')
      navigate(`/duel/${id}`)
    } catch (error) {
      console.log(error.status)
    }
  }

  function openBetModal() {
    setPlaceBetModal(true)
    document.body.style.overflow = 'hidden'
  }

  async function get() {
    const response = await getDuel(id, auth)
    setData(response)
    const filtredDuelist = response.duelUser.filter((person) => person.teamId)
    setDuelist(filtredDuelist)

  }
  useEffect(() => {
    if (!auth) {
      navigate('/sign-up')
    }
    get()
  }, [])

  useEffect(() => {
    if (duelist !== null) {
      const infos = duelist.filter(
        (info) => info.teamId === data.match.matchesTeam[0].team.id
      )
      setFirstInfoPlayer(infos[0])
      const infosNext = duelist.filter(
        (info) => info.teamId === data.match.matchesTeam[1].team.id
      )
      setSecondInfoPlayer(infosNext[0])
    }

  }, [duelist])

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
          <S.box>
            <Box
              direction='row'
              gap='large'
              justify='flex-start'
              align='center'
            >
              <Avatar size='large' src={data.match.matchesTeam[0].team.logo} />
              <S.TextName>{data.match.matchesTeam[0].team.name}</S.TextName>
              {firstInfoPlayer === null ||
                (firstInfoPlayer === undefined && (
                  <S.TextOdd>
                    Valor aceito :{' '}
                    {(
                      secondInfoPlayer.bet *
                      (data.match.rightTeamOdd - 1)
                    ).toFixed(0)}
                     
                  </S.TextOdd>
                ))}
            </Box>
            <Box direction='row' gap='xlarge'>
              <S.TextOdd>{data.match.leftTeamOdd}</S.TextOdd>
              {firstInfoPlayer === null || firstInfoPlayer === undefined ? (
                <S.Buttons
                  onClick={() => {
                    setTeamId(data.match.matchesTeam[0].team.id)
                    setTeamName(data.match.matchesTeam[0].team.name)
                    setOdd(data.leftTeamOdd)
                    openBetModal()
                  }}
                  size='small'
                  type='primary'
                  label='Aposte nesse time!'
                />
              ) : (
                <>
                  <Avatar size='large' src={firstInfoPlayer.user.image} />
                  <S.BoxUser direction='column' gap='small'>
                    <S.TextName>{firstInfoPlayer.user.name}</S.TextName>
                    <S.TextName>Blerths : {firstInfoPlayer.bet}</S.TextName>
                  </S.BoxUser>
                </>
              )}
            </Box>
          </S.box>
          <S.box>
            <Box
              direction='row'
              gap='large'
              justify='flex-start'
              align='center'
            >
              <Avatar size='large' src={data.match.matchesTeam[1].team.logo} />
              <S.TextName>{data.match.matchesTeam[1].team.name}</S.TextName>
              {secondInfoPlayer === null ||
                (secondInfoPlayer === undefined && (
                
                  <S.TextOdd>
                    Valor aceito : {' '}
                    {(
                      firstInfoPlayer.bet *
                      (data.match.leftTeamOdd - 1)
                    ).toFixed(0)} 
                  </S.TextOdd>
                
                ))}
            </Box>
            <Box
              direction='row'
              gap='xlarge'
              align='center'
              justify='space-between'
            >
              <S.TextOdd>{data.match.rightTeamOdd}</S.TextOdd>
              {secondInfoPlayer === null || secondInfoPlayer === undefined ? (
                <S.Buttons
                  onClick={() => {
                    setTeamId(data.match.matchesTeam[1].team.id)
                    setTeamName(data.match.matchesTeam[1].team.name)
                    setOdd(data.leftTeamOdd)
                    openBetModal()
                  }}
                  size='small'
                  type='primary'
                  label='Aposte nesse time!'
                />
              ) : (
                <>
                  <Avatar size='large' src={secondInfoPlayer.user.image} />
                  <S.BoxUser direction='column' gap='small'>
                    <S.TextName>{secondInfoPlayer.user.name}</S.TextName>
                    <S.TextName>Blerths : {secondInfoPlayer.bet}</S.TextName>
                  </S.BoxUser>
                </>
              )}
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
