import { TextInput, useColorScheme, View ,StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedTextInput = ({style, ...props}) => {    
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (

        <TextInput
            style = {[ styles.input,
                {
                    backgroundColor: theme.uiBackground,
                    color:theme.text,
                },
                style
            ]}
            keyboardAppearance = {colorScheme === "dark" ? "dark" : "light"}
            {...props}
     />

  )
}

export default ThemedTextInput

const styles = StyleSheet.create({
    input: {
        width: '95%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginVertical: 8,
        shadowColor: Colors.primary,
        shadowOffset: {width:0 , height: 1},
        shadowRadius: 10,
        shadowOpacity: 0.1
    }
})