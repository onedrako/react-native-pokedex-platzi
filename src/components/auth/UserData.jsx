import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { size } from 'lodash'
import useAuth from '../../hooks/useAuth'
import { getPokemonFavoritesApi } from '../../api/favorite'

const UserData = () => {
  const { auth, logout } = useAuth()
  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonFavoritesApi()
          setTotal(size(response))
        } catch (error) {
          setTotal(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title} >Bienvenido</Text>
        <Text style={styles.title} >{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="User Name" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${total} Pokemons`} />
      </View>

      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  )
}

const ItemMenu = (props) => {
  const { title, text } = props

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20
  },
  titleBlock: {
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20
  },
  itemMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemMenuTitle: {
    fontWeight: 'bold'
  }
})

export { UserData }
