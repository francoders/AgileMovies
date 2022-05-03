import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

const LoginScreen = (props: any) => {

    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../image/Logo.png')}
            />

            <Text style={styles.text}>Usuario</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Ingrese Usuario'
                placeholderTextColor={'gray'}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Ingrese Contraseña'
                placeholderTextColor={'gray'}
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textBtn}>Iniciar Sesion</Text>
            </TouchableOpacity>

        </View>
    )

}

export default LoginScreen


const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginHorizontal: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontWeight: '600',
        alignSelf: 'stretch'
    },

    textBtn: {
        color: 'white',
        fontWeight: '600',
    },

    textInput: {
        color: 'white',
        width: 200,
    },

    btn: {
        width: 220,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#A85CF9',
        justifyContent: 'center',
        alignItems: 'center',
    },


    img: {
        marginBottom: 30
    }
})