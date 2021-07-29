import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import {ThemeProvider} from './themes/theme-context'
import Vista from './Vista'
import store from './store/index'
import {Provider}  from 'react-redux';

const App = () => {

  const [dataLoaded] = Font.useFonts({
    'sanspro': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'sansbold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    'sanslight': require('./assets/fonts/SourceSansPro-Light.ttf'),
  })
  if(!dataLoaded){
    return(
      <AppLoading/>
    )
  }
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Vista />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}


export default App