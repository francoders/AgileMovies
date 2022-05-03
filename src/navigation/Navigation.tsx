import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetaildScreen from '../screens/DetaildScreen';
import { Movie } from '../interfaces/movieInterce';

export type RootStackParams = {
    Login: undefined;
    Home: undefined;
    Detail: Movie;
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#222'
                },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetaildScreen} />
        </Stack.Navigator>
    )
}