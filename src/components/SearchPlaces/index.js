import { ScrollView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geolocation from "react-native-geolocation-service";

const SearchPlaces = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Enter Location"
      minLength={2}
      autoFocus={false}
      returnKeyType={"default"}
      listViewDisplayed="auto"
      fetchDetails={true}
      query={{
        key: "AIzaSyCp_xNn3-d1v1rSZL-5UASdMkrcsDjyNQQ",
        language: "en",
      }}
      styles={{
        textInputContainer: {
          // backgroundColor: "grey",
          padding:10,
        },
        textInput: {
          height: 38,
          color: "#5d5d5d",
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
      currentLocation={true}
      currentLocationLabel="Current location"
      debounce={200}
      //   predefinedPlaces={[HOME,WORK]}
    />
  );
};

export default SearchPlaces;
