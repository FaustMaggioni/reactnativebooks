import React, {useState, useEffect, useReducer, useCallback} from 'react'
import {StyleSheet, View, Text, KeyboardAvoidingView, Button, Alert} from 'react-native'
import Input from '../../componentes/Input/Input'
import { AZULES } from '../../constants/colors'
import {useDispatch} from 'react-redux'
import { signup, login } from '../../store/actions/auth.actions'


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state,action) => {
  switch (action.type){
    case FORM_INPUT_UPDATE:
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };

      const updatedValidities ={
        ...state.inputValidities,
        [action.input]: action.isValid,
      };

      let updatedFormIsValid = true;
      for(const key in updatedValidities){
        updatedFormIsValid= updatedFormIsValid && updatedValidities[key]
      }

      return{
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues,
      };
  }
}


const AuthScreen = () => {
  const dispatch = useDispatch()
  const [formState, dispatchFormState] = useReducer(formReducer,{
    inputValues:{
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid:false,
  })

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      input: inputIdentifier,
      value: inputValue,
      isValid: inputValidity,
    })
  }, [dispatchFormState])

  const onSignupHandler = async () =>{
    try{
      await dispatch(signup(formState.inputValues.email, formState.inputValues.password))
    }catch(err){
      setError(err.message)
    }
  }

  const onLoginHandler = async () => {
    try {
      await dispatch(login(formState.inputValues.emial, formState.inputValues.password))
    } catch (err) {
      setError(err.message)
    }
  }
  const [error,setError] = useState(null)

  useEffect(()=>{
    if(error){
      Alert.alert("Ha ocurrido un error", error, [{ text: 'OK'}])
    }
  }, [error])
    return(
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style= {styles.screen}>
            <View style={styles.container}>
              <Text style={styles.title}> Login </Text>
              <Input
                id='email'
                label='email'
                keyboardType='email-address'
                required
                email
                autoCapitalize='none'
                errorText='Email invalido'
                onInputChange={onInputChangeHandler}
                initialValue=''/>
              <Input 
                id='password'
                label='Clave'
                keyboardType='default'
                secureTextEntry
                required
                minLength={6}
                autoCapitalize='none'
                errorText='Por favor ingrese contraseña de al menos 6 caracteres'
                onInputChange={onInputChangeHandler}
                initialValue=''
                />
              <View style={styles.footer}>
                <View style={styles.buttton}>
                  <Button title='Acceder' color={AZULES.dark} onPress={onLoginHandler}/>
                </View>
                <View style={styles.buttton}>
                  <Button title='Registrarse' color={AZULES.accent} onPress={onSignupHandler}/>
                </View>
              </View>
            </View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        marginBottom: 18,
      },
      container: {
        width: '80%',
        maxWidth: 400,
        height: '50%',
        maxHeight: 400,
        padding: 12,
      },
      footer: {
        marginTop: 24,
      },
      button: {
        marginBottom: 8,
      },})

export default AuthScreen