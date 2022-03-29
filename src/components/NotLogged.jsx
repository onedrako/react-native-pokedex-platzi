import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NotLogged = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.text} >Para ver tus favoritos tienes que iniciar sesión</Text>
      <Button title="Ir a login" onPress={() => navigation.navigate('Account')} />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  text: {
    textAlign: 'center'
  }
})

export { NotLogged }
