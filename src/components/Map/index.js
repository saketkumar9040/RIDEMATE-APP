import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import start from "../../../assets/images/pin.png";

import styles from "./style";
import { useSelector } from "react-redux";
import { mapCustomStyle } from "../../globals/styles/mapCustomStyle";

const Map = () => {
  const currentLocation = useSelector(state=>state.auth.currentLocation)
  const startingPoint = useSelector(state=>state?.nav.origin);
  const destination = useSelector(state=>state?.nav.destination);
  console.log(startingPoint);
  console.log(destination)
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
          latitude: currentLocation?.coords.latitude,
          longitude: currentLocation?.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapCustomStyle}
      >
        <Marker
          coordinate={{
            latitude: currentLocation?.coords.latitude,
            longitude: currentLocation?.coords.longitude,
          }}
        >
          <Image
            source={start}
            style={{ width: 34, height: 34, resizeMode: "contain" }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;
