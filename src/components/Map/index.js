import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import MapView from "react-native-maps";

import styles from "./style";

const Map = () => {
  return (
    <View style={styles.mapContainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Text style={styles.rideMateText}>RideMate</Text>
      <MapView style={styles.map} />
    </View>
  );
};

export default Map;
