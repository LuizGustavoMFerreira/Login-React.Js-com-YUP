import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Card from '../../components/card';

const myImage = require('../../assets/Logo.png');

export default function nivel1() {
  return (
    <View style={styles.container}>
        <Image source={myImage} style={styles.image} />
        <Card />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
