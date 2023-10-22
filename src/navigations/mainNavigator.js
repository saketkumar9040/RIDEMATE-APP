import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Alert } from "react-native";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

  const [location,setLocation]=useState(null);
  const [address,setAddress]= useState(null);
  console.log(address);

  useEffect(()=>{
    const startBackgroundTracking = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission for location was denied")
       return;
      }else{
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        let currentAddress = await Location.reverseGeocodeAsync({latitude:currentLocation.coords.latitude,longitude:currentLocation.coords.longitude});
        setAddress(currentAddress)
      }
    };
    startBackgroundTracking();
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
