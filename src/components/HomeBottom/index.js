import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { useSelector } from "react-redux";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import SearchPlaces from "../SearchPlaces";
import Modal from "react-native-modal";

const HomeBottom = () => {
  const currentAddress = useSelector((state) => state?.auth?.currentAddress[0]);
  const [isModalVisible, setModalVisible] = useState(false);

  const origin = useSelector(state=>state.nav.origin);
  const destination = useSelector(state=>state.nav.destination);
  console.log(origin);
  console.log(destination)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.bottomContainer}>    
      <Modal isVisible={isModalVisible}>
        <Button title="close" onPress={toggleModal}/>
        <View style={{ flex: 1,backgroundColor:"#000000" }}>
          <Text>Hello!</Text>
        </View>
      </Modal>
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
         value={origin?.description  ? origin.description : currentAddress.name}
         style={styles.textInput}
         onFocus={toggleModal}
        />

        {/* <SearchPlaces placeholder={currentAddress?.name} type="startingPoint"/> */}
      </View>
      <View style={styles.searchInputContainer}>
        <FontAwesome name="flag" size={29} color="black" />
        <TextInput
         placeholder={"Enter Destination..."}
         value={destination ? destination.description : ""}
         style={styles.textInput}
         onFocus={toggleModal}
        />
        {/* <SearchPlaces placeholder={"Enter destination..."} type="destination"/> */}
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
  );
};

export default HomeBottom;
