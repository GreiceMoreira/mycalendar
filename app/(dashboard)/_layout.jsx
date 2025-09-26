
import { Tabs } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Tabs
        screenOptions={{headerShown: false, tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
        }}
        >
        <Tabs.Screen 
            name="profile" 
            options={{title:"Profile", tabBarIcon:({focused}) => (
                <Ionicons 
                    size={24}
                    name={focused ? 'happy' : 'happy-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />)
            }}
        /> 
        <Tabs.Screen 
            name="create" 
            options={{title:"Create",  tabBarIcon:({focused}) => (
                <Ionicons 
                    size={24}
                    name={focused ? 'create' : 'create-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />)
            }}
        /> 
        <Tabs.Screen 
            name="events" 
            options={{title:"Events",  tabBarIcon:({focused}) => (
                <Ionicons 
                    size={24}
                    name={focused ? 'sparkles' : 'sparkles-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />)
            }}
        /> 
        <Tabs.Screen 
            name="calendar" 
            options={{title:"Calendar",  tabBarIcon:({focused}) => (
                <Ionicons 
                    size={24}
                    name={focused ? 'calendar' : 'calendar-outline'}
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />)
            }}
        /> 
    </Tabs>
  )
}

export default DashboardLayout