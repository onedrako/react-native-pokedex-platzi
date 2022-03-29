import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull } from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'

export const getPokemonFavoritesApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
    return JSON.parse(response || [])
  } catch (error) {
    throw new Error(error)
  }
}

export const addPokemonFavoriteApi = async (pokemon) => {
  try {
    const favorites = await getPokemonFavoritesApi()
    favorites.push(pokemon)
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
  } catch (error) {
    throw new Error(error)
  }
}

export const isPokemonFavoriteApi = async (id) => {
  try {
    const response = await getPokemonFavoritesApi()
    return includes(response, id) // includes de lodash , ve si en un objeto existe lo que le pasemos como segundo parametro
  } catch (error) {
    throw new Error(error)
  }
}
