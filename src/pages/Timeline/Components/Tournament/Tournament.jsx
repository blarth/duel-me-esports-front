import { Accordion, AccordionPanel } from 'grommet'
import React from 'react'
import dayjs from 'dayjs'
import Match from './Matches'

export default function Tournament(tournament) {
  const {name, Matches} = tournament
  const matches = Matches.filter(match => dayjs().isBefore(dayjs(match.startedAt)))
  return (
    <Accordion>
      <AccordionPanel className='accordion' label={name}>
        {matches.map((match) => (
          <Match {...match} />
        ))}
      </AccordionPanel>
    </Accordion>
  )
}
