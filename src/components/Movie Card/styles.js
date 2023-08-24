import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default styles = StyleSheet.create({
    cardContainer: {
        maxwidth: Dimensions.get('window').width /2,
        width : "46%", 
        backgroundcolor: '#fff',
        marginbottom: 10,
        borderradius: 4,
        margin: '2%',
    },
    cardImage : {
        height: 250,
        width: '100%',
        resizeMode : 'contain'
    }
})
