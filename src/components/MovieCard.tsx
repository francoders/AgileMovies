import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterce';

interface Props {
    movie: Movie;
}

const MovieCard = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => navigation.navigate('Detail', movie)}
        >
            <Image
                source={{ uri }}
                style={styles.img}
            />
            <Text style={styles.text}>{movie.title}</Text>
        </TouchableOpacity>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 300,
        borderRadius: 30,
    },

    text: {
        color: '#F0F0F0',
        fontWeight: 'bold',
        marginTop: 4,
        marginBottom: 4
    }
})