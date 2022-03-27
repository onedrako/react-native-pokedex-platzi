import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PokemonScreen } from '../screens/Pokemon'
import { Pokedex } from '../screens/Pokedex'

const Stack = createNativeStackNavigator()

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex Screen" component={Pokedex} options={{ title: '', headerTransparent: true }}/>
      <Stack.Screen name="Pokemon Screen" component={PokemonScreen} />
    </Stack.Navigator>
  )
}

export { PokedexNavigation }
