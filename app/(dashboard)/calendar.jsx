import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/colors'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCalendar from '../../components/ThemedCalendar'

const Calendar = () => {
    const colotScheme = useColorScheme()
    const theme = Colors[colotScheme] ?? Colors.light
        
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Calendar</ThemedText>
      <ThemedCalendar></ThemedCalendar>
    </ThemedView>
  )
}

export default Calendar

const styles = StyleSheet.create({    
  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight: "bold",
        fontSize: 16,
        padding: 20,
        borderRadius: 16
    },

})