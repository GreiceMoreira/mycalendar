import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { clearEvents, loadEvents } from '../../data/storage'
import { useFocusEffect } from '@react-navigation/native'

import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/colors'

const Events = () => {
  const [events, setEvents] = useState({})

  useFocusEffect(
    useCallback(() => {
      async function fetchEvents() {
        const stored = await loadEvents();
        setEvents(stored)
      }
      fetchEvents()
    } , []))
    
  const sections = Object.keys(events).map(date => ({
    title: date,
    data: events[date]
  }))

  const resetEvents = async () => {
    clearEvents()
    console.log('Empty Calendar')
  }


  return (
    <ThemedView style={styles.container} safe={true}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      <ThemedButton onPress={resetEvents} style={{ backgroundColor: Colors.warning }}>Reset Calendar</ThemedButton>
    </ThemedView>
  );
};
export default Events

const styles = StyleSheet.create({
      container: { 
        flex: 1, 
        padding: 10 
      },
    header: { fontWeight: 'bold', fontSize: 18, marginVertical: 10 },
    item: { backgroundColor: 'white', padding: 10, marginVertical: 5, borderRadius: 8 },
    itemTitle: { fontWeight: 'bold' },
})