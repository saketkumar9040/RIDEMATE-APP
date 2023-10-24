import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style';
import { useSelector } from 'react-redux';

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
    </View>
  )
}

export default HomeBottom;