import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

const HomeBottom = () => {
    const currentAddress = useSelector(state=>state.auth.currentAddress[0]);
    console.log(currentAddress)
  return (
    <View style={styles.bottomContainer}>
      <Text style={styles.searchRideText}>Search a ride</Text>
      <View style={styles.searchInputContainer}>
         <TextInput
          style={styles.textInput}
          value={currentAddress.name}
         />
      </View>
      <View style={styles.searchInputContainer}>
         <TextInput
          style={styles.textInput}
          value={currentAddress.name}
         />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("home")}>
        <Text style={styles.buttonText}>SEARCH RIDE</Text>
        <AntDesign name="arrowright" size={28} color="#ffffff" style={styles.arrowLeft} />
      </TouchableOpacity>
    </View>
  )
}

export default HomeBottom;