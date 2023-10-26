import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geolocation from "react-native-geolocation-service";
import { GOOGLE_API_KEY } from "@env";
import { useEffect } from "react";
import { useSelector } from "react-redux";

navigator.geolocation = Geolocation;

const SearchPlaces = ({ placeholder }) => {
  const currentLocation = useSelector((state) => state.auth.currentLocation);
  // console.log(currentLocation);

  return (
    <GooglePlacesAutocomplete
      nearbyPlacesAPI="GooglePlacesSearch"
      placeholder={placeholder}
      minLength={3}
      autoFocus={false}
      returnKeyType={"default"}
      listViewDisplayed="auto"
      fetchDetails={true}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
        type: "establishment",
        components: "country:in",
        location: `${currentLocation?.coords.latitude},${currentLocation?.coords.longitude}`,
        radius: "50000",
        strictbounds: true,
      }}
      enablePoweredByContainer={false}
      styles={{
        container: {
          flex: 1,
        },
        textInputContainer: {
          padding: 10,
        },
        textInput: {
          color: "#5d5d5d",
          fontSize: 18,
          paddingLeft: 20,
          fontWeight: "800",
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
      // currentLocation={true}
      // currentLocationLabel="Current location"
      debounce={400}
      GooglePlacesDetailsQuery={{
        fields: ["formatted_address", "geometry"],
      }}
      //   predefinedPlaces={[HOME,WORK]}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details.geometry.location);
      }}
    />
  );
};

export default SearchPlaces;
