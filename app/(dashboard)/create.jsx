import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import Dropdown from '../../components/Dropdown'

const Create = () => {
  const [description , setDescription] = useState("")

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Create</ThemedText>
      <ThemedTextInput placeholder="Name" />
      <Spacer height={20}/>
      <Dropdown />
      <Spacer height={20}/>
      <ThemedTextInput placeholder="Date" />
      <Spacer height={20}/>
      <ThemedTextInput placeholder="Time"/>
      <Spacer height={20}/>
      <ThemedTextInput 
        multiline={true}
        numberOfLines={4}
        onChangeText={setDescription}
        value={description} placeholder="Description"/>
      <Spacer height={20}/>
      <ThemedButton>Submit</ThemedButton>
    </ThemedView>
  )
}

export default Create

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