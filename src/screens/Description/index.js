import React from "react";
import {Image, SafeAreaView, View, Text} from 'react-native';
import styles from "./styles";
import Constants from "../../config/Constants";
import { useEffect, useState } from "react";

export default function Description({route}){
    // movie to display static dummy data as api is not working
    const movie = route.params.movie;
    //movieSingle in case if api was working
    const [movieSingle, setMovie] = useState(route.params.movie);
    const [loading, setL] = useState(false);

    const fetchMovie = async() => {
        setL(!loading);
        const url = `${Constants.API_URL}${Constants.findOne}`;
        fetch(url, {
            method: "GET",
            headers: Constants.headers,
        })
        .then((res) => res.json())
        .then(res => {
            setMovie(res);
            setL(!loading);
        })
        .catch((err) => console.log(err))

        setTimeout(() => {
            setL(!loading);
        }, 3000);
    }

    useEffect(() => {
       fetchMovie()
    }, []);

    return(
        <SafeAreaView style = {styles.container}>
                <View style = {styles.imgContainer}>
                    <Image source={{uri : movie.image}} style = {styles.img}/>
                </View>
                <Text style = {styles.yearTitle}>
                    Year
                </Text>
                <Text style = {styles.year}>
                    {movie.year}
                </Text>
                <Text style = {styles.yearTitle}>
                    Genre
                </Text>
                <Text style = {styles.year}>
                    {movie.genre}
                </Text>
                <Text style = {styles.yearTitle}>
                    Description
                </Text>
                <Text style = {styles.year}>
                    {movie.description}
                </Text>
        </SafeAreaView>
    )
}