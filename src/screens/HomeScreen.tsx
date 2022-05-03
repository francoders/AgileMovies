import React from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions, Text, FlatList } from 'react-native';
import useMovie from '../hooks/useMovie';
import MovieCard from '../components/MovieCard';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: windowWidth } = Dimensions.get('window');


const HomeScreen = () => {

    const { peliculas, peliculasPopulares, isLoading } = useMovie();

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="red" size={60} />
            </View>
        )
    }

    return (

        <SafeAreaView>
            <View style={styles.vista}>
                <Text style={styles.text}>Peliculas Estrenos</Text>
                <Carousel
                    data={peliculas}
                    renderItem={({ item }: any) => <MovieCard movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={220}
                />
            </View>

            <View style={styles.vista}>
                <Text style={styles.text}>Peliculas Populares</Text>
                <FlatList
                    data={peliculasPopulares}
                    renderItem={({ item }: any) => <MovieCard movie={item} />}
                />
            </View>
        </SafeAreaView>

    )

}

export default HomeScreen;


const styles = StyleSheet.create({
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    vista: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#A85CF9',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 8
        
    }

})