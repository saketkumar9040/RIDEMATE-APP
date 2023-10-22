import { View, Text, StyleSheet,StatusBar } from 'react-native'
import React from 'react';
import MapView from "react-native-maps";

import styles from './style';

const Map = () => {
  return (
    <View >
        <StatusBar backgroundColor="transparent" barStyle='dark-content' translucent/>
      <MapView style={styles.map} />
    </View>
  )
}

export default Map