import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import { PokemonsList } from '../components/PokemonsList'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi()

      const pokemonsArray = []
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image:
            pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }

      await setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <PokemonsList pokemons={pokemons} />
    </View>
  )
}

export { Pokedex }
