import React from 'react'
import { View, Text } from 'react-native'

const PokemonScreen = (props) => {
  const { route, navigation } = props
  console.log(props)
  return (
    <View>
      <Text>Estas viendo un POKEMON</Text>
    </View>
  )
}

export { PokemonScreen }
