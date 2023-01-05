import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


class Teste extends React.Component {  
    render() {
    return (
        <View>
            <Text>Hello Wold</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });