import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container:{
      flex:1,
      paddingTop:Platform.OS==="android"?40:0,
      backgroundColor:"#353935"
   },
   headerContainer:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"center",
    height:200
   },
   headerText:{
    color:"#ffffff",
    fontWeight:"900",
    fontSize:27,
    letterSpacing:1,
   },
   image:{
    height:400,
    width:400,
    resizeMode:"contain"
   },
   imageContainer:{
    alignSelf:'center'
   },
   enjoyRideText:{
    textAlign:"center",
    fontWeight:"100",
    fontSize:18,
    color:"#ffffff",
    letterSpacing:2,
   }
});

export default styles;
