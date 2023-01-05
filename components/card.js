import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const image1 = require('../assets/x.png')
const image2 = require('../assets/f.png')

export default function card(){
    return(
        <View>
            <Card style={styles.card}>
                <Text style={styles.titleCard}>Protesto contra produtos químicos gera tumulto </Text>
                <Image source={image1} style={styles.image1} />
                <Text style={styles.hyperlinkStyle} 
                      onPress={() => { Linking.openURL('https://www.abrasco.org.br/site/noticias/posicionamentos-oficiais-abrasco/nota-sobre-a-liberacao-automatica-de-agrotoxicos/45451/'); }}>
                      Ver Mais
                </Text>
            </Card>
            <Card style={styles.card}>
                <Text style={styles.titleCard}>Porcentagem do aumento de agrotóxicos</Text>
                <Image source={image2} style={styles.image2} />
                <Text style={styles.hyperlinkStyle} 
                      onPress={() => { Linking.openURL('https://www.brasildefato.com.br/2019/04/03/desde-o-golpe-contra-dilma-12-mil-novos-agrotoxicos-foram-liberados-no-brasil'); }}>
                      Ver Mais
                </Text>
            </Card>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        marginVertical: 10,
      },
      titleCard: {
        fontSize: 15,
        fontWeight: 'bold'
      },
      hyperlinkStyle: {
        color: 'blue'
      }
});