import { API_HOST } from '../utils/constants'

const getPokemonApi = async (id) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0/`
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch {
    throw new Error('Error fetching pokemon')
  }
}

const getPokemonDetailsByUrlApi = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export { getPokemonApi, getPokemonDetailsByUrlApi }
