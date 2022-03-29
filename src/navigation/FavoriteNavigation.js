import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PokemonScreen } from '../screens/Pokemon'
import { FavoritesScreen } from '../screens/Favorites'

const Stack = createNativeStackNavigator()

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite Screen" component={FavoritesScreen} options={{ title: '', headerTransparent: true }}/>
      <Stack.Screen name="Pokemon Screen" component={PokemonScreen} options={{ title: '', headerTransparent: true }} />
    </Stack.Navigator>
  )
}

export { FavoriteNavigation }
