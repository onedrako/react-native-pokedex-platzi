import { View, Text } from 'react-native'
import React from 'react'
import { LoginForm } from '../components/auth/LoginForm'
import { UserData } from '../components/auth/UserData'

const Account = () => {
  const auth = null

  return (
    <View>
      {auth ? <UserData/> : <LoginForm/>}
    </View>
  )
}

export { Account }
