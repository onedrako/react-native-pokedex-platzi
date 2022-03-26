import { Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { PokemonCard } from './PokemonCard'

const PokemonsList = (props) => {
  const { pokemons } = props

  return (
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon, index) => String(index)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
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
