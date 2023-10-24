import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location"

import styles from "./style";

const Map = () => {
 let currentLocation =  Location.getCurrentPositionAsync({});
 console.log(currentLocation)
  return (
    <View style={styles.mapContainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Text style={styles.rideMateText}>RideMate</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map;
