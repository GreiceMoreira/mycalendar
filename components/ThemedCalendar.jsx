import { StyleSheet } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import { Colors } from '../constants/colors';


const ThemedCalendar = ({ events = {}, selectedDate, setSelectedDate }) => {

  const eventTypes = {    
    birthday : {key:'birthday', color: Colors.birthday, selectedDotColor:'blue'},
    task : {key:'task', color: Colors.task, selectedDotColor:'blue'},
    appointment : {key:'appointment', color: Colors.appointment, selectedDotColor:'blue'},
    meeting : {key:'meeting', color: Colors.meeting, selectedDotColor:'blue'},
  }

  const markedDates = {}
  Object.keys(events).forEach(date => {
  const dateEvents = events[date] || []
  const uniqueTypes = [...new Set(dateEvents.map(e => e.type).filter(t => t && eventTypes[t]))]
  
  if(uniqueTypes.length > 0) {
    const dots = uniqueTypes.map(type => ({
      key: type,
      color: eventTypes[type].color,
      selectedDotColor: eventTypes[type].selectedDotColor
    }))

    markedDates[date] = {
      dots,
      selected: selectedDate === date,
      selectedColor: selectedDate === date ? Colors.secondly : undefined
    }
  }
  })


  return (
    <Calendar 
        markingType={'multi-dot'}
        markedDates={markedDates}
        onDayPress={(day) => {setSelectedDate(day.dateString)}}
    
    />
  )
}

export default ThemedCalendar

const styles = StyleSheet.create({

})