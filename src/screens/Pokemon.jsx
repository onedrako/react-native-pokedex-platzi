import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { getPokemonDetailsApi } from '../api/pokemon'
import { Header } from '../components/pokemon/Header'

const PokemonScreen = (props) => {
  const { route: { params }, navigation } = props
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemon) return null

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name} />
    </ScrollView>
  )
}

export { PokemonScreen }
