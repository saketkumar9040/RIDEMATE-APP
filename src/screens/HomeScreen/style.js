import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container:{
      flex:1,
      paddingTop:Platform.OS==="android"?40:0
   },
   rideMateText:{
      position:"absolute",
      top:50,
      left:10,
      color:"#000000",
   }
});

export default styles;
