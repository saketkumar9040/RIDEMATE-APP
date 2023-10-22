import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react';

import styles from './style';
import Map from '../../components/Map';

const HomeScreen = () => {
  return (
     <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <View>
      <Text style={styles.rideMateText}>RideMate</Text>
      <Map/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;