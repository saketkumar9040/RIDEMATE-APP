import { View, Text, SafeAreaView, Image,TouchableOpacity } from "react-native";
import React from "react";

import { AntDesign } from '@expo/vector-icons';

import styles from "./style";
import taxiImage from "../../../assets/images/taxi.png";

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Ride Mate</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={taxiImage} />
        <Text style={styles.enjoyRideText}>Enjoy the safe ride</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("home")}>
        <Text style={styles.buttonText}>BOOK A RIDE</Text>
        <AntDesign name="arrowright" size={28} color="#ffffff" style={styles.arrowLeft} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
