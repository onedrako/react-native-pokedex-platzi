import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { capitalize } from 'lodash'
import { useNavigation } from '@react-navigation/native'
import { getColorByPokemonType } from '../utils/getColorByPokemonType'

const PokemonCard = (props) => {
  const { pokemon } = props
  const navigation = useNavigation()

  const goToPokemon = () => {
    navigation.navigate('Pokemon Screen', { id: pokemon.id })
  }

  const bgStyles = { backgroundColor: getColorByPokemonType(pokemon.type), ...styles.card }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={bgStyles}>
            <View style={styles.dataContainer}>
              <Text style={styles.pokemonText} >#{`${pokemon.order}`.padStart(3, 0)}</Text>
              <Text style={styles.pokemonText} >{capitalize(pokemon.name)}</Text>
            </View>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
        </View>

    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 20
  },
  image: {
    width: 90,
    height: 90
  },
  pokemonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 5,
    textAlign: 'center'
  },
  dataContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10
  }
})
export { PokemonCard }
