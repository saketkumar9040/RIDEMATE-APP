import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import start from "../../../assets/images/pin.png";
import end from "../../../assets/images/flag.png";
import { GOOGLE_API_KEY } from "@env";
import axios from "axios";

import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { mapCustomStyle } from "../../globals/styles/mapCustomStyle";
import { setTravelDistance, setTravelTime } from "../../redux/navSlice";

const Map = () => {
  const dispatch = useDispatch();

  const currentAddress = useSelector((state) => state.auth.currentAddress[0]);
  const startingPoint = useSelector((state) => state.nav.origin);
  const destination = useSelector((state) => state.nav.destination);
  console.log(startingPoint);

  const mapRef = useRef();

  useEffect(() => {
    if (!startingPoint || !destination) {
      return;
    }
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
    });
  }, [startingPoint, destination]);

  // useEffect(() => {
  //   if (!startingPoint || !destination) {
  //     return;
  //   }
  //   const getTravelTime = async () => {
  //     const URL =
  //       await axios(`https://maps.googleapis.com/maps/api/distancematrix/json
  //     ?destinations=${destination.description}
  //     &origins=${[
  //       `${startingPoint.location.lat},${startingPoint.location.lng}`,
  //     ]}
  //     &units=imperial
  //     &key=${GOOGLE_API_KEY}`)
  //         .then((res) => JSON.stringify(res))
  //         .then((data) => console.log(data))
  //         .catch((err) => console.log(err));
  //   };
  //   getTravelTime();
  //   const getTravelDistance = async () => {
  //     const distance = await getDistance(
  //       {
  //         latitude: startingPoint.location.lat,
  //         longitude: startingPoint.location.lng,
  //       },
  //       {
  //         latitude: destination.location.lat,
  //         longitude: destination.location.lng,
  //       }
  //     );
  //     dispatch(setTravelDistance(distance / 1000));
  //   };
  //   getTravelDistance();
  // }, [startingPoint, destination, GOOGLE_API_KEY]);

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
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={{
          latitude: startingPoint.location.lat,
          longitude: startingPoint.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapCustomStyle}
        showsUserLocation={true}
        followsUserLocation={true}
        rotateEnabled={true}
        zoomEnabled={true}
        toolbarEnabled={true}
      >
        {startingPoint && destination && (
          <MapViewDirections
            origin={{
              latitude: startingPoint.location.lat,
              longitude: startingPoint.location.lng,
            }}
            destination={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="black"
            onReady={(e) => {
              dispatch(setTravelTime(e.legs[0].duration.text));
              dispatch(setTravelDistance(e.legs[0].distance.text));
            }}
          />
        )}

        <Marker
          coordinate={{
            latitude: startingPoint.location.lat,
            longitude: startingPoint.location.lng,
          }}
          title="origin"
          description={startingPoint?.description ?? currentAddress.name}
          identifier="origin"
        >
          <Image
            source={start}
            style={{
              width: 34,
              height: 34,
              resizeMode: "contain",
              marginBottom: 5,
            }}
          />
        </Marker>
        {destination && (
          <Marker
            coordinate={{
              latitude: destination?.location.lat,
              longitude: destination?.location.lng,
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
        )}
      </MapView>
    </View>
  );
};

export default Map;
