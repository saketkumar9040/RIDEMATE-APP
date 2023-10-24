import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react';

import styles from './style';
import Map from '../../components/Map';
import HomeBottom from '../../components/HomeBottom';

const HomeScreen = () => {
  return (
     <SafeAreaView style={{...StyleSheet.absoluteFillObject,backgroundColor:"#fff"}}>
      <Map/>
      <HomeBottom/>
    </SafeAreaView>
  )
}

export default HomeScreen;