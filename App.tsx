import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen'

import {
  useFonts, // carregar as fontes
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';
import { Register } from './src/Register';

export default function App() {
  SplashScreen.preventAutoHideAsync()
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });


  if(!fontsLoaded) {
    return null
  }

  SplashScreen.hideAsync();

  return (
    // Contexto o thmeProvider
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}