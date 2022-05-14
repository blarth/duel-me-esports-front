import api from './api'

export async function create(body) {
  const response = await api.post('/sign-up', body)
  return response.data
}
export async function signIn(body) {
  const response = await api.post('/sign-in', body)
  return response.data
}
