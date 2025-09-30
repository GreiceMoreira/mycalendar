import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>My name is Greice</ThemedText>
    </ThemedView>
  )
}

export default Profile

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