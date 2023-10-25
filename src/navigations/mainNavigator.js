import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { useDispatch } from "react-redux";
import { setCurrentAddress, setCurrentLocation } from "../redux/authSlice";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const startBackgroundTracking = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission for location was denied");
        return;
      } else {
        let currentLocation = await Location.getCurrentPositionAsync({});
        dispatch(setCurrentLocation({currentLocation}));
        let currentAddress = await Location.reverseGeocodeAsync({
          latitude: currentLocation?.coords.latitude,
          longitude: currentLocation?.coords.longitude,
        });
        dispatch(setCurrentAddress({currentAddress}));
      }
    };
    startBackgroundTracking();
  }, []);

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
