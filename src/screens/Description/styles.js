import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container : {
        margin : '5%',
        flex : 1,
    },
    imgContainer : {
        width : '100%',
        height : 400
    },
    img : {
        width : '100%',
        height : 400,
        resizeMode: 'contain'
    },
    yearTitle :{
        marginTop : '5%',
        color : "black",
        fontSize : 20,
        fontWeight : 'bold'
    },
    year : {
        color : "black",
        fontSize : 16,
        textAlign : "justify"
    }
})