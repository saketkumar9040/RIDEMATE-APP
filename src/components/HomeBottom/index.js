import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
import { useSelector } from 'react-redux';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import GooglePlacesAutocomplete from '../SearchPlaces';
import SearchPlaces from '../SearchPlaces';

const HomeBottom = () => {
    const currentAddress = useSelector(state=>state.auth.currentAddress[0]);
  return (
    <View style={styles.bottomContainer}>
      <Text style={styles.searchRideText}>Search a ride</Text>
      <View style={styles.searchInputContainer}>
      <FontAwesome name="map-marker" size={32} color="black" style={{marginRight:10,}}/>
         {/* <TextInput
          style={styles.textInput}
          value={currentAddress.name}
         /> */}
        <SearchPlaces/>
      </View>
      <View style={styles.searchInputContainer}>
      <FontAwesome name="flag" size={29} color="black" />
         {/* <TextInput
          style={styles.textInput}
          placeholder='Enter your destination'
          value={""}
         /> */}
         <SearchPlaces/>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>console.log("searching...")}>
        <Text style={styles.buttonText}>SEARCH</Text>
        <AntDesign name="arrowright" size={28} color="#ffffff" style={styles.arrowLeft} />
      </TouchableOpacity>
    </View>
  )
}

export default HomeBottom;