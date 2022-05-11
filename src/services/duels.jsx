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
