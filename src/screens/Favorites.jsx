import { View, Text, Button } from 'react-native'
import React from 'react'
import { getPokemonFavoritesApi } from '../api/favorite'

const Favorites = () => {
  const checkFavorites = async () => {
    const response = await getPokemonFavoritesApi()
    console.log(response)
  }

  return (
    <View>
      <Text>Favorites</Text>
      <Button title="Obtener Favoritos" onPress={checkFavorites }/>
    </View>
  )
}

export { Favorites }
