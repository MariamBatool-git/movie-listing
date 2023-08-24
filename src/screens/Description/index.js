import React from "react";
import {Image, SafeAreaView, View, Text, ScrollView} from 'react-native';
import styles from "./styles";
import Constants from "../../config/Constants";
import { useEffect, useState } from "react";
import { moviesList } from "../../config/dummyData/moviesList";

export default function Description({route}){
    const movie = route.params.movie;
    const [movieSingle, setMovie] = useState();

    const fetchMovie = async() => {
        const url = `${Constants.API_URL}${Constants.findOne}`;
        fetch(url, {
            method: "POST",
            headers: Constants.headers,
            body : JSON.stringify({
                "collection":"movies",
                "database":"sample_mflix",
                "dataSource":"ServerlessInstance0",
                "filter": {
                    "_id": ObjectId(movie._id)
                }
            })
        })
        .then((res) => res.json())
        .then(res => {
            setMovie(res);
        })
        .catch((err) => console.log(err))
        setTimeout(() => {
        }, 3000);
    }

    useEffect(() => {
       fetchMovie()
    }, []);
    return(
        <ScrollView style = {styles.container}>
                <View style = {styles.imgContainer}>
                    <Image source={{uri : movie.poster}} style = {styles.img}/>
                </View>
                <Text style = {styles.yearTitle}>
                    Title
                </Text>
                <Text style = {styles.year}>
                    {movie.title}
                </Text>
                <Text style = {styles.yearTitle}>
                    Year
                </Text>
                <Text style = {styles.year}>
                    {movie.year}
                </Text>
                <Text style = {styles.yearTitle}>
                    Genres
                </Text>
                <Text style = {styles.year}>
                    {movie.genres.join(", ")}
                </Text>
                <Text style = {styles.yearTitle}>
                    Description
                </Text>
                <Text style = {styles.year}>
                    {movie.plot}
                </Text>
                <Text style = {styles.yearTitle}>
                    Awards
                </Text>
                <Text style = {styles.year}>
                    "Nominations : {movie.awards.nominations}{"\n"}Wins : {movie.awards.wins}
                </Text>
                <Text style = {styles.yearTitle}>
                    Cast
                </Text>
                <Text style = {styles.year}>
                    {movie.cast.join(", ")}
                </Text>
                <Text style = {styles.yearTitle}>
                    Countries
                </Text>
                <Text style = {styles.year}>
                    {movie.countries.join(",")}
                </Text>
                <Text style = {styles.yearTitle}>
                    Directors
                </Text>
                <Text style = {styles.year}>
                    {movie.directors.join(", ")}
                </Text>
                <Text style = {styles.yearTitle}>
                    Full Plot
                </Text>
                <Text style = {styles.year}>
                    {movie.fullplot}
                </Text>
                <Text style = {styles.yearTitle}>
                    IMDB
                </Text>
                <Text style = {styles.year}>
                    ID : {movie.imdb.id}{"\n"}Rating : {movie.imdb.rating}{"\n"}Votes : {movie.imdb.votes}
                </Text>
                <Text style = {styles.yearTitle}>
                    Languages
                </Text>
                <Text style = {styles.year}>
                    {movie.languages.join(", ")}
                </Text>
                <Text style = {styles.yearTitle}>
                    Last Updated
                </Text>
                <Text style = {styles.year}>
                    {movie.lastupdated}
                </Text>
                <Text style = {styles.yearTitle}>
                    Number of mflix comments
                </Text>
                <Text style = {styles.year}>
                    {movie.num_mflix_comments}
                </Text>
                <Text style = {styles.yearTitle}>
                    Rated
                </Text>
                <Text style = {styles.year}>
                    {movie.rated}
                </Text>
                <Text style = {styles.yearTitle}>
                    Released
                </Text>
                <Text style = {styles.year}>
                    {movie.released}
                </Text>
                <Text style = {styles.yearTitle}>
                    Runtime
                </Text>
                <Text style = {styles.year}>
                    {movie.runtime}
                </Text>
                <Text style = {styles.yearTitle}>
                    Tomatoes
                </Text>
                <Text style = {styles.year}>
                    Critic{"\n\t"}Meter : {movie.tomatoes?.critic?.meter}{"\n\t"}Number of Reviews : {movie.tomatoes?.critic?.numReviews}{"\n\t"}Rating : {movie.tomatoes?.critic?.rating}{"\n"}
                    Fresh : {movie.tomatoes.fresh}{"\n"}
                    Last Updated : {movie.tomatoes.lastUpdated}{"\n"}
                    Rotten : {movie.tomatoes.rotten}{"\n"}
                    Viewer{"\n\t"}Meter : {movie.tomatoes?.viewer?.meter}{"\n\t"}Number of Reviews : {movie.tomatoes?.viewer?.numReviews}{"\n\t"}Rating : {movie.tomatoes?.viewer?.rating}
               </Text>
                <Text style = {styles.yearTitle}>
                    Type
                </Text>
                <Text style = {styles.year}>
                    {movie.type}
                </Text>
                

        </ScrollView>
    )
}