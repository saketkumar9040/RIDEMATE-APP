import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { useSelector } from "react-redux";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SearchPlaces from "../SearchPlaces";
import Modal from "react-native-modal";
import { StatusBar } from "expo-status-bar";

const HomeBottom = () => {
  const currentAddress = useSelector((state) => state?.auth?.currentAddress[0]);
  const [isModalVisible, setModalVisible] = useState(false);

  const origin = useSelector((state) => state.nav.origin);
  const destination = useSelector((state) => state.nav.destination);
  console.log(origin);
  console.log(destination);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(()=>{
    if(destination.description){
      toggleModal();
    }
  },[destination])

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
          ...StyleSheet.autoFillObject,
        }}
      >
        <StatusBar translucent backgroundColor="#fff" />
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <TouchableOpacity onPress={toggleModal} style={styles.downArrow}>
            <AntDesign name="down" size={28} color="black" />
          </TouchableOpacity>
          <View
            style={{ ...styles.searchInputContainer, marginHorizontal: 10 }}
          >
            <FontAwesome
              name="map-marker"
              size={32}
              color="black"
              style={{ marginRight: 10 }}
            />
            <SearchPlaces
              placeholder={origin.description ?origin.description:currentAddress.name}
              type="startingPoint"
            />
          </View>
          <View
            style={{ ...styles.searchInputContainer, marginHorizontal: 10 }}
          >
            <FontAwesome name="flag" size={29} color="black" />
            <SearchPlaces
              placeholder={destination?destination.description:"Enter destination..."}
              type="destination"
            />
          </View>
        </View>
      </Modal>
      <View style={styles.bottomContainer}>
        <Text style={styles.searchRideText}>Search a ride</Text>
        <View style={styles.searchInputContainer}>
          <FontAwesome
            name="map-marker"
            size={32}
            color="black"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder={"Enter starting point..."}
            value={
              origin?.description ? origin.description : currentAddress.name
            }
            style={styles.textInput}
            onFocus={toggleModal}
          />
        </View>
        <View style={styles.searchInputContainer}>
          <FontAwesome name="flag" size={29} color="black" />
          <TextInput
            placeholder={"Enter Destination..."}
            value={destination ? destination.description : ""}
            style={styles.textInput}
            onFocus={toggleModal}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => console.log("searching...")}
        >
          <Text style={styles.buttonText}>SEARCH</Text>
          <AntDesign
            name="arrowright"
            size={28}
            color="#ffffff"
            style={styles.arrowLeft}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeBottom;
