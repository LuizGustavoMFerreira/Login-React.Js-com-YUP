import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import Auth from './src/screens/Auth';
import Nivel1 from './src/screens/nivel1';
import Nivel3 from './src/screens/nivel3';
import {useState, useEffect} from 'react';

export default function App({onAuthenticate}) {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  useEffect(() => {
    if(isAuthenticated === true) {
      alert('ola')
    }
  }), []

  function onAuthenticate () {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
    });
    auth.then(result => {
      setIsAuthenticated(result.success);
        console.log(result);
    }
    );
  }

  return (
    <View style={styles.container}>
      { isAuthenticated
        ? <Nivel1 />
        : <Auth onAuthenticate={onAuthenticate} />
      } 
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
