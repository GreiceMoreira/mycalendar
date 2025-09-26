import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

//themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedButton from '../components/ThemedButton'

const Home = () => {
    const router = useRouter()

    const navigateToPage = (page) => {
        router.push(page)
    } 

  return (

        <ThemedView style={[styles.container]}>
            <ThemedLogo style={styles.img}/>
            <Spacer height={20}/>
            
            <ThemedText style={styles.title} title={true}>Welcome to Calendar</ThemedText>
        
            <Spacer height={20}/>

            <ThemedButton onPress={() => navigateToPage('/events')}>Go to Dashboard</ThemedButton>
        </ThemedView>
 
  )
}

export default Home

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
    background:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
