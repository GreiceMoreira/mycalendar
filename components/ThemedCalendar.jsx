import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'
import { Colors } from '../constants/colors';

const ThemedCalendar = () => {
    const [selectedDate,  setSelectedDate] = useState();
  return (
    <Calendar 
        markedDates={{
            [selectedDate] : { selected: true, marked: Colors.primary, selectedColor: Colors.secondly},
        }}
        onDayPress={(day) => {setSelectedDate(day.dateString)}}
    
    />
  )
}

export default ThemedCalendar

const styles = StyleSheet.create({})