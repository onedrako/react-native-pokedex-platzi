import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { PokemonCard } from './PokemonCard'

const PokemonsList = (props) => {
  const { pokemons, loadPokemons, isNext } = props

  const loadMore = () => {
    loadPokemons()
  }

  return (
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon, index) => String(index)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.FlatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isNext && <ActivityIndicator size="large" style={styles.spinner} color="#aeaeae" />}
      />
  )
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60
  }
})

export { PokemonsList }
