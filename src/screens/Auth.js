import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";

const myImage = require('../../assets/Logo.png');

export default function Auth({onAuthenticate}) {  

    return (
        <View>
            <Image source={myImage} style={styles.image} />

                <TextInput type='text' placeholder="Digite seu E-mail" 
                            style={styles.email} 
                            
                            returnKeyType="done" 
                            />
                <TextInput type='number' 
                            placeholder="Digite sua senha" 
                            secureTextEntry={true} 
                            style={styles.password} 
                            returnKeyType="done" 
                            />

                 <TouchableOpacity
                    onPress={onAuthenticate} 
                    style={styles.btn}> 
                    <Text styles={styles.text}>Login</Text>   
                </TouchableOpacity>
            </View>  
    );
}


const styles = StyleSheet.create({
    btn: {
        width: 200,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0893fc',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        marginVertical: 30,
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
    },
    email: {
        width: 200,
        marginTop: 10,
        fontSize: 12,
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'center',
        height: 50
    }, 
    password: {
        width: 200,
        marginTop: 10,
        fontSize: 12,
        borderRadius: 5,
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'center',
        height: 50
    }
})

