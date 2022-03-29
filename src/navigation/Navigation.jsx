import React from 'react'
// import { View, Text } from 'react-native'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { PokedexNavigation } from './PokedexNavigation'
import { FavoriteNavigation } from './FavoriteNavigation'

import { Account } from '../screens/Account'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='Pokedex' >
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (<Icon name="heart" size={size} color={color} />),
          headerTitle: 'Tus siempre favoritos'
        }}/>
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeBall(),
          headerShown: false
        }}
        />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({ color, size }) => (<Icon name="user" size={size} color={color} />)
        }}/>
    </Tab.Navigator>
  )
}

const renderPokeBall = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}

export { Navigation }
