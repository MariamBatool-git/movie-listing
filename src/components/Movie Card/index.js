import React from "react";
import {Image, TouchableOpacity } from "react-native";
import styles from "./styles";


export default function MovieCard({navigation, movie, route}){
    return(
        <TouchableOpacity 
            style = {styles.cardContainer}
            onPress = {() => navigation.navigate("Description", {movie : movie})}
        > 
            <Image source={{uri : movie.image}} style = {styles.cardImage}/>
        </TouchableOpacity>
    )
}