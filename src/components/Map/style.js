import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  rideMateText:{
    position:"absolute",
    top:40,
    left:10,
    fontSize:30,
    fontWeight:"500",
    zIndex:1,
  },
});

export default styles;
