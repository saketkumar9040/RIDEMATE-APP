import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import MapView from "react-native-maps";

import styles from "./style";
import { useSelector } from "react-redux";

const Map = () => {

  const currentLocation = useSelector(state=>state.auth.currentLocation);
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
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        </MapView>
    </View>
  );
};

export default Map;
