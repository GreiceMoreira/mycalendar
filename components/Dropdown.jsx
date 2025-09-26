import React, { useState } from "react";
import { StyleSheet, View, Text, useColorScheme } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import { Colors } from "../constants/colors";


const Dropdown = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    const [open, setOpen] = useState(false);
    const [value , setValue] = useState(null)
    const [items, setItems] = useState([
            {label:'Birthday', value:'birthday'},
            {label:'Task', value:'task'},
            {label:'Meeting', value:'meeting'},
            {label:'Appointment', value:'appointment'}
            ]);
            

  return (
            <View 
                style={[styles.dropdown, {
                    zIndex: 1000,
                    backgroundColor: theme.uiBackground,
                    color:theme.text,
                }]}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={'Choose the type'}
                />
            </View>
  )
}

export default Dropdown

const styles = StyleSheet.create({
    dropdown: {
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 15,
                width: '95%',
                borderRadius: 12,
                paddingVertical: 8,
                marginVertical: 8,
                shadowColor: Colors.primary,
                shadowOffset: {width:0 , height: 1},
                shadowRadius: 10,
                shadowOpacity: 0.1
    }
})