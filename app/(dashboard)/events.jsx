import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { items } from '../../data/events'

const sections = Object.keys(items).map(date => ({
  title: date,
  data: items[date],
}));

const Events = () => {
    
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