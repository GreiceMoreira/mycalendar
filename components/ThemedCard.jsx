import { StyleSheet,useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedCard = (style , ...props) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View
        style={[{backgroundColor:Colors.uiBackground}, style.card,]}
        {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})