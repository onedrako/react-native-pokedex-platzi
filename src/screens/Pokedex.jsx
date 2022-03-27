import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import { PokemonsList } from '../components/PokemonsList'
import { SafeAreaView } from 'react-native-safe-area-context'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl)
      setNextUrl(response.next)

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
    <SafeAreaView>
      <PokemonsList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  )
}

export { Pokedex }
