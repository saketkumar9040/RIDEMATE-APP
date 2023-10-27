import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geolocation from "react-native-geolocation-service";
import { GOOGLE_API_KEY } from "@env";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../../redux/navSlice";

navigator.geolocation = Geolocation;

const SearchPlaces = ({ placeholder, type }) => {
  const currentLocation = useSelector((state) => state.auth.currentLocation);
  const dispatch = useDispatch();

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
          width:"100%",
          alignItems:"center"
        },
        textInputContainer: {
          padding: 5,
        },
        textInput: {
          color: "#000000",
          fontSize: 18,
          paddingLeft: 20,
          marginLeft:10,
          fontWeight: "500",
        
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
      // predefinedPlaces={[HOME,WORK]}
      onPress={(data, details = null) => {
        if (type === "startingPoint") {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
        }
        if (type === "destination") {
          dispatch(
            setDestination({
              location: details.geometry.location,
              description: data.description,
            })
          );
        }
        // console.log(details.geometry.location);
      }}
    />
  );
};

export default SearchPlaces;
