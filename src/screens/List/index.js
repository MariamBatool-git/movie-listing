import React, { useEffect, useState } from "react";
import {View, Text, Button, FlatList} from 'react-native';
import MovieCard from "../../components/Movie Card";
import { moviesList } from "../../config/dummyData/moviesList";
import Constants from "../../config/Constants";
export default function List({navigation}){
    const [movies,setMovies] = useState();
    const fetchMovies = async() => {
        const url = `${Constants.API_URL}${Constants.findAll}`;
        fetch(url, {
            method: "POST",
            headers: Constants.headers,
            body : JSON.stringify({
                "collection":"movies",
                "database":"sample_mflix",
                "dataSource":"ServerlessInstance0"
            })
        })
        .then((res) => res.json())
        .then(res => {
            const data = res;
            setMovies(data.documents);
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
       fetchMovies()
    }, []);

    return(
        <View>
            <Text style = {{color : 'black'}}>
            </Text>
            <FlatList
                data={movies}
                renderItem = {({item}) => <MovieCard navigation={navigation} movie = {item}/>}
                numColumns = {2}
            />
        </View>
    )
}