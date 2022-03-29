import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite'

const Favorite = (props) => {
  const { id } = props
  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadCheck, setReloadCheck] = useState(false)

  const name = (!isFavorite ? 'star-o' : 'star')

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id)
        setIsFavorite(response)
      } catch (error) {
        throw new Error(error)
      }
    })()
  }, [id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck(!reloadCheck)
  }

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id)
    try {
      onReloadCheckFavorite()
    } catch (error) {
      throw new Error(error)
    }
  }

  const removeFavorite = () => {
    console.log('Eliminar de favoritos')
  }

  return (
    <>
      <Icon
        name={name}
        size={20}
        color='#fff'
        onPress={ isFavorite ? removeFavorite : addFavorite}
        style={{ marginRight: 20 }}/>
    </>

  )
}

export { Favorite }
