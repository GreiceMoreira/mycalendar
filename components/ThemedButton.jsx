import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedButton = ({style, children, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
        <Pressable 
            style={({pressed}) => [styles.btn, pressed && styles.pressed, style]}
            {...props}>
                <Text style={styles.text}>{children}</Text>
         </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        color: "#fff"
    },
    text:{
        color:"#fff",
        fontWeight:"600"
    },
    pressed:{
        opacity: 0.8
    }
})