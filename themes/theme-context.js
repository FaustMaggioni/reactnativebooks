import React, { createContext, useState } from 'react';
import { AZULES } from '../constants/colors';

const themes = {
    dark: {
        backgroundColor: 'black',
        backgroundCard: '#25282c',
        color: 'white'
      },
     light: {
       backgroundColor: 'white',
       backgroundCard: AZULES.primary,
       color: 'black'
     }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
  }
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false) // El theme por default es el Light
    
    // Para Cambiar de themes
    const toggle = () => {
       setDark(!dark)
    }
    
    // Filtrar los estilos según el tema seleccióonado
    const theme = dark ? themes.dark : themes.light
    
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
           {children}
        </ThemeContext.Provider>
        )
    }
    // exportamos ThemeProvider y ThemeContext
    export { ThemeProvider, ThemeContext }

