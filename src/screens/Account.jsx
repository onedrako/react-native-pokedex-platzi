import { View, Text } from 'react-native'
import React from 'react'
import { LoginForm } from '../components/auth/LoginForm'
import { UserData } from '../components/auth/UserData'
import useAuth from '../hooks/useAuth'

const Account = () => {
  const { auth } = useAuth()

  return (
    <View>
      {auth ? <UserData/> : <LoginForm/>}
    </View>
  )
}

export { Account }
