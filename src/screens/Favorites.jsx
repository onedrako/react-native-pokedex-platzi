import { Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState, useCallback } from 'react'
import { getPokemonFavoritesApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import { PokemonsList } from '../components/PokemonsList'

const FavoritesScreen = () => {
  const [pokemons, setPokemons] = useState([])
  const { auth } = useAuth()

  console.log(pokemons)

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoritesApi()

          const pokemonsArray = []

          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id)

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
              pokemonDetails.sprites.other['official-artwork'].front_default
            })
          }

          await setPokemons(pokemonsArray)
        })()
      }
    }, [auth])
  )

  return (
    !auth ? <Text>Usuario no loggeado</Text> : <PokemonsList pokemons={pokemons} />
  )
}

export { FavoritesScreen }
