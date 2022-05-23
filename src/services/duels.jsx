import api from './api'

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export async function list() {
  const response = await api.get('/duels')
  return response.data
}
export async function getDuelMatch(id) {
  const response = await api.get(`/duels/${id}`)
  return response.data
}
export async function getDuel(id, token) {
  const response = await api.get(`/duel/${id}`, createConfig(token))
  return response.data
}

export async function postDuelMatch(token, id, data){
  const response = await api.post(`/createDuel/${id}`, data , createConfig(token))
  return response.data.duelId
}

export async function postDuel(token, id, data) {
  const response = await api.post(
    `/duel/${id}`,
    data,
    createConfig(token)
  )
  return response.data.duelId
}


