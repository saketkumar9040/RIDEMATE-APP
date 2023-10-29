import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomContainer: {
    padding: 10,
    marginBottom:10,
  },
  searchRideText: {
    fontSize: 22,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom:5,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"center",
    backgroundColor: "#E5E4E2",
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "500",
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#89CFF0",
    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 18,
    color: "#ffffff",
    letterSpacing: 2,
  },
  arrowLeft: {
    position: "absolute",
    right: 10,
  },
  downArrow: {
    padding: 10,
  },
  rideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  carContainer:{
   marginLeft:-50,
   gap:5,
  },
  carTitle:{
     fontSize:18,
     fontWeight:"800"
  },
  moneyText:{
    fontSize:18,
    fontWeight:"700"
  },
  travelText:{
    fontWeight:"500",
    fontSize:16,
  }
});

export default styles;
