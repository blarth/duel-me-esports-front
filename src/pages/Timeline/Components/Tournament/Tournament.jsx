import { Accordion, AccordionPanel, Box } from 'grommet'
import React from 'react'
import dayjs from 'dayjs'
import Match from './Matches'

export default function Tournament(tournament) {
  const {name, Matches} = tournament
  const matches = Matches.filter(match => dayjs().isBefore(dayjs(match.startedAt)))
  
  if(matches.length === 0) return <Box margin='0 0 10px 0'>No matches Available for {name}</Box>
  return (
    <Accordion>
      <Box height='fill'>
      <AccordionPanel className='accordion' label={name}>
        {matches.map((match) => (
          <Match {...match} />
        ))}
      </AccordionPanel>
      </Box>
    </Accordion>
  )
}
