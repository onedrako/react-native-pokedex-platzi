import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Keyboard
} from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user } from '../../utils/userDb'

const LoginForm = () => {
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValues) => {
      setError('')
      const { username, password } = formValues
      if (username !== user.username || password !== user.password) {
        setError('Usuario o contraseña incorrectos')
      } else {
        alert('Bienvenido')
      }
    }
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder='Nombre de Usuario'
        style={styles.input}
        autoCapitalize="none"
        // value={formik.values.username}
        onChangeText = {(text) =>
          formik.setFieldValue('username', text)
        }
        />
      <Text style={styles.errors} >{formik.errors.username}</Text>
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        // value={formik.values.password}
        onChangeText = {(text) =>
          formik.setFieldValue('password', text)
        }
        />
      <Text style={styles.errors} >{formik.errors.password}</Text>

      <Text style={styles.errors} >{error}</Text>

      <Button
        title='Iniciar Sesión'
        onPress={formik.handleSubmit}
        />

    </View>
  )
}

const initialValues = () => {
  return {
    username: '',
    password: ''
  }
}

const validationSchema = () => {
  return {
    username: Yup.string().required('El nombre de usuario es requerido'),
    password: Yup.string().required('La contraseña es requerida')
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  errors: {
    textAlign: 'center',
    color: 'red'
  }
})

export { LoginForm }
