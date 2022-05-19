import api from './api'


export async function getData() {
  const response = await api.get('/')
  return response.data
}
