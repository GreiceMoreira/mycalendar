import { StyleSheet, useColorScheme } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Colors } from '../../constants/colors'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCalendar from '../../components/ThemedCalendar'
import { useFocusEffect } from "@react-navigation/native"
import { loadEvents } from '../../data/storage'

const Calendar = () => {
    const colotScheme = useColorScheme()
    const theme = Colors[colotScheme] ?? Colors.light
        
    const [selectedDate,  setSelectedDate] = useState();
    const [events, setEvents] = useState({})
    
    useFocusEffect(
      useCallback(() => {
        async function fetchEvents() {
          const stored = await loadEvents();
          setEvents(stored)
        }
          fetchEvents()
      } , []))
    
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Calendar</ThemedText>
      <ThemedCalendar 
        events={events} 
        selectedDate={selectedDate} 
        setSelectedDate={setSelectedDate} 
      >
      </ThemedCalendar>
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