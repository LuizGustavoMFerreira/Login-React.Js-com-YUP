import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const myImage = require('../../assets/Logo.png');

export default function nivel3() {
    return (
        <View style={styles.center}>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.title}>Você tem permissão para acessar os arquivos</Text>
                <TouchableOpacity  style={styles.button}> 
                <Text>Agrotoxicos</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button}> 
                <Text>Propriedades</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button}> 
                <Text>Proprietário</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        margin: 15 
    },
    button: {
        width: 200,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893fc',
        padding: 10,
        borderRadius: 5,
    }
});
  