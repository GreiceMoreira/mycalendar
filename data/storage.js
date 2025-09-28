import AsyncStorage from '@react-native-async-storage/async-storage'
const EVENTS_KEY = "events"

export const saveEvents = async (events) => {
    try {
        await AsyncStorage.setItem(EVENTS_KEY, JSON.stringify(events));
        console.log("Event save");
    }catch (error) {
        console.error("Event not save", error)
    }
}

export const loadEvents = async () => {
    try {
        const value = await AsyncStorage.getItem(EVENTS_KEY)
        if(value !== null) {
            return JSON.parse(value)
        }else{
            return{}
        }
    }catch(error) {
        console.error("Error" , error)
        return {}
    }
}

export const addEvents = async (date, newEvent) => {
    const events = await loadEvents();
    const updated = {
        ...events,
        [date]:[...(events[date] || []), newEvent]
    }
    await saveEvents(updated)
    return updated
} 

export const clearEvents = async () => {
  try {
    await AsyncStorage.removeItem('events'); 
    console.log('You have no events');
  } catch (error) {
    console.error('Error:', error);
  }
}