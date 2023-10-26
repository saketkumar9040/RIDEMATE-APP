import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import start from "../../../assets/images/pin.png";
import end from "../../../assets/images/flag.png";

import styles from "./style";
import { useSelector } from "react-redux";
import { mapCustomStyle } from "../../globals/styles/mapCustomStyle";

const Map = () => {
  const currentLocation = useSelector(state=>state.auth.currentLocation)
  const currentAddress = useSelector(state=>state.auth.currentAddress[0])
  const startingPoint = useSelector(state=>state?.nav.origin);
  const destination = useSelector(state=>state?.nav.destination);
  console.log(currentAddress)
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
        mapType="mutedStandard"
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
            latitude: startingPoint?.location.lat ?? currentLocation.coords.latitude,
            longitude: startingPoint?.location.lng ?? currentLocation.coords.longitude,
          }}
          title="origin"
          description={startingPoint?.description?? currentAddress.name}
          identifier="origin"
        >
          <Image
            source={start}
            style={{ width: 34, height: 34, resizeMode: "contain",marginBottom:5, }}
          />
          {/* <Text style={{backgroundColor:"#ffffff"}}>{currentAddress.name}</Text> */}
        </Marker>
        {
          destination && (
            <Marker
            coordinate={{
              latitude: destination?.location.lat ,
              longitude: destination?.location.lng ,
            }}
          >
            <Image
              source={end}
              style={{ width: 34, height: 34, resizeMode: "contain" }}
            />
          </Marker>
          )
        }
      </MapView>
    </View>
  );
};

export default Map;
