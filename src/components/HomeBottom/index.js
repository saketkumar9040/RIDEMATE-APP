import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  FlatList,
  Image,
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

const vehicleData = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "UberLUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const HomeBottom = () => {
  const currentAddress = useSelector((state) => state?.auth?.currentAddress[0]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  
  const origin = useSelector((state) => state.nav.origin);
  const destination = useSelector((state) => state.nav.destination);
  // console.log(origin);
  // console.log(destination);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    if (destination?.description) {
      toggleModal();
    }
  }, [destination]);

  return (
    <>
      {destination ? (
        <View style={{ ...styles.bottomContainer, flex: 1 }}>
          <Text style={styles.searchRideText}>Select a Ride</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={vehicleData}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.rideContainer} onPress={()=>setSelectedVehicle(item)}>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "contain",
                    }}
                    source={{ uri: item.image }}
                  />
                  <View style={styles.carContainer}>
                    <Text style={styles.carTitle}>{item.title}</Text>
                    <Text>Travel Time ...</Text>
                  </View>
                  <Text style={styles.moneyText}>Rs 200</Text>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => console.log("searching...")}
          >
            <Text style={styles.buttonText}>RIDE {selectedVehicle?.title}</Text>
            <AntDesign
              name="arrowright"
              size={28}
              color="#ffffff"
              style={styles.arrowLeft}
            />
          </TouchableOpacity>
        </View>
      ) : (
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
                  placeholder={
                    origin.description
                      ? origin.description
                      : currentAddress.name
                  }
                  type="startingPoint"
                />
              </View>
              <View
                style={{ ...styles.searchInputContainer, marginHorizontal: 10 }}
              >
                <FontAwesome name="flag" size={29} color="black" />
                <SearchPlaces
                  placeholder={
                    destination
                      ? destination?.description
                      : "Enter destination..."
                  }
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
            {/* <TouchableOpacity
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
        </TouchableOpacity> */}
          </View>
        </>
      )}
    </>
  );
};

export default HomeBottom;
