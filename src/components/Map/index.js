import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import start from "../../../assets/images/pin.png";
import end from "../../../assets/images/flag.png";
import {GOOGLE_API_KEY} from "@env";

import styles from "./style";
import { useSelector } from "react-redux";
import { mapCustomStyle } from "../../globals/styles/mapCustomStyle";

const Map = () => {
  const currentAddress = useSelector(state=>state.auth.currentAddress[0])
  const startingPoint = useSelector(state=>state.nav.origin);
  const destination = useSelector(state=>state.nav.destination);
  // console.log(currentAddress)
  // console.log(startingPoint);
  // console.log(destination)
  const mapRef = useRef();

  useEffect(()=>{
    if(!startingPoint || ! destination){
      return
    };
    mapRef.current.fitToSuppliedMarkers(["origin","destination"],{
      edgePadding:{top:100,right:100,bottom:100,left:100}
    });
  },[startingPoint,destination]);

  return (
    <View style={styles.mapContainer}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Text style={styles.rideMateText}>RideMate</Text>
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={{
          latitude: startingPoint.location.lat,
          longitude: startingPoint.location.lng,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapCustomStyle}
      >
        {
          startingPoint && destination && (
            <MapViewDirections
               origin={{latitude:startingPoint.location.lat,longitude:startingPoint.location.lng}}
               destination={{latitude:destination.location.lat,longitude:destination.location.lng}}
               apikey={GOOGLE_API_KEY}
               strokeWidth={3}
               strokeColor="black"
            />
          )
        }
      
        <Marker
          coordinate={{
            latitude: startingPoint.location.lat ,
            longitude: startingPoint.location.lng ,
          }}
          title="origin"
          description={startingPoint?.description?? currentAddress.name}
          identifier="origin"
        >
          <Image
            source={start}
            style={{ width: 34, height: 34, resizeMode: "contain",marginBottom:5, }}
          />
        </Marker>
        {
          destination && (
            <Marker
            coordinate={{
              latitude: destination?.location.lat ,
              longitude: destination?.location.lng ,
            }}
            title="destination"
            description={destination?.description}
            identifier="destination"
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
