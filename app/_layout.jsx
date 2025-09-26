import { ImageBackground, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot , Stack } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar  } from 'expo-status-bar'

import background from '../assets/img/background.jpg'

const RootLayout = () => {
    const colotScheme = useColorScheme()
    const theme = Colors[colotScheme] ?? Colors.light
    
  return (
    <>    
    <StatusBar value="auto" />
    
    <Stack screenOptions={{
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
    
    }}>
        <Stack.Screen name='(dashboard)' options={{ headerShown: false}} />

        <Stack.Screen name="index" options={{
          title: 'A goal without a plan is just a wish', 
          headerTitleStyle: {
            fontFamily: 'Arial-ItalicMT',
          color:Colors.warning
          }}} />
    </Stack>
  </>

  )
}

export default RootLayout

const styles = StyleSheet.create({
        background:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})