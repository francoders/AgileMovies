import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Movie } from '../interfaces/movieInterce';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends NativeStackScreenProps<RootStackParams, 'Detail'> { }


const DetaildScreen = ({ route }: Props) => {
    const movie = route.params as Movie;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={styles.content}>
            <Image
                source={{ uri }}
                style={styles.img}
            />
            <Text style={styles.text}>{movie.title}</Text>

            <View style={styles.card}>
                <Text style={styles.text}>Descripcion:</Text>
                <Text style={styles.text2}>{movie.overview}</Text>
            </View>
        </View>
    )
}

export default DetaildScreen



const styles = StyleSheet.create({
    text: {
        color: '#A85CF9',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 8,
        marginLeft: 12,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text2: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 8,
        marginLeft: 8,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: '100%',
        height: 400,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },

    content: {
        display: 'flex',
        alignItems: 'flex-start'
    },

    card: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 350,
    }
})