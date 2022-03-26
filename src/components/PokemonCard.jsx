import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const PokemonCard = (props) => {
  const { pokemon } = props

  const goToPokemon = () => {
    console.log(`Vamos al Pokémona: ${pokemon.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon} >
      <Text>Hola Mundo</Text>
    </TouchableWithoutFeedback>
  )
}

export { PokemonCard }
