import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomContainer:{
        padding:10,
        marginTop:10,
    },
    searchRideText:{
        fontSize:25,
        fontWeight:"500",
    },
    searchInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#E5E4E2',
        padding:15,
        marginTop:10,
        borderRadius:10,
        paddingHorizontal:20,
    },
    textInput:{
        fontSize:20,
        fontWeight:"500"
    },
    buttonContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
         marginTop:30,
         backgroundColor:"#89CFF0",
         padding:10,
       },
       buttonText:{
        textAlign:"center",
        fontWeight:"800",
        fontSize:18,
        color:"#ffffff",
        letterSpacing:2,
       },
       arrowLeft:{
        position:"absolute",
        right:10,
       }
});

export default styles;