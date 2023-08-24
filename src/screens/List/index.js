import React, { useEffect, useState } from "react";
import {View, Text, Button, FlatList} from 'react-native';
import MovieCard from "../../components/Movie Card";
import { moviesList } from "../../config/dummyData/moviesList";
import Constants from "../../config/Constants";
export default function List({navigation}){
    const [movies,setMovies] = useState(moviesList);
    const fetchMovies = async() => {
        const url = `${Constants.API_URL}${Constants.findAll}`;
        fetch(url, {
            method: "GET",
            headers: Constants.headers,
        })
        .then((res) => res.json())
        .then(res => setMovies(res))
        .catch((err) => console.log(err))
    }

    useEffect(() => {
       fetchMovies()
    }, []);
    return(
        <View>
            <Text>
                List Page
            </Text>
            <FlatList
                data={moviesList}
                renderItem = {({item}) => <MovieCard navigation={navigation} movie = {item}/>}
                numColumns = {2}
            />
        </View>
    )
}