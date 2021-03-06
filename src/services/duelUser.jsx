import api from './api'

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}
export async function list(token) {
  const response = await api.get('/my-duels', createConfig(token))
  return response.data
}
export async function listAll() {
  const response = await api.get('/duelUser',)
  return response.data
}