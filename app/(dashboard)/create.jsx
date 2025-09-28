import { StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { addEvents } from '../../data/storage'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import Dropdown from '../../components/Dropdown'
import { items } from '../../data/events'

const Create = () => {
  const [description , setDescription] = useState("")
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [type, setType] = useState("")

  const handleSubmit = async () => {
    const newEvent = {
      name,
      time,
      type,
      description
    } 
    const updatedEvents = await addEvents(date,newEvent)
    console.log("Event add", updatedEvents)
    setName("")
    setDate("")
    setTime("")
    setType("")
    setDescription("")

  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>New Event</ThemedText>
     
      <ThemedTextInput 
        onChangeText={setName}
        placeholder="Name"
        value={name}
        />
      <Spacer height={20}/>

      <Dropdown 
        value={type} 
        setValue={setType}
        />
      <Spacer height={20}/>

      <ThemedTextInput 
        onChangeText={setDate}
        placeholder="2025-00-00"
        value={date}
        />
      <Spacer height={20}/>

      <ThemedTextInput 
        onChangeText={setTime}
        placeholder="00:00"
        value={time}
        />
      <Spacer height={20}/>

      <ThemedButton onPress={handleSubmit}>Submit</ThemedButton>
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