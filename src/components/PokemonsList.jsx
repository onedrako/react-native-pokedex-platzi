import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const PokemonsList = (props) => {
  const { pokemons } = props
  console.log(pokemons)

  return (
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.FlatListContentContainer}
      />
  )
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5
  }
})

export { PokemonsList }
