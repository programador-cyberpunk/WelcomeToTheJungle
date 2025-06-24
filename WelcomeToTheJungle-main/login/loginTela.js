import React , {useState} from 'react';
import {View, Text, TextInput, Buttom, StyleSheet, Alert, TouchableOpacity} from 'react-native';

export default function loginScreen({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () =>{
        if(username === 'usuario' && password === 'senha123'){
            navigation.replace('MainTabs');
        }else{
            Alert.alert('Erro', "Usuario ou senha invalidos,");
        }
    }


return (
    <View style={StyleSheet.container}>
        <Text style={styles.title}>Seja bem vindo!</Text>
        <TextInput style={styles.input} placeholder = "Usuario" value={username} onChangeText={setUsername} autoCapitalize="none"></TextInput>

        <TextInput style={styles.input} placeholder = "Senha" secureTextEntryvalue={password} onChangeText={setPassword} autoCapitalize="none"></TextInput>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
    },

    input:{
        width: '90%',
        height: 50,
        borderColor: '#ccc',
        borderWidith: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    button: {
        width: '90%',
        height: 50,
        borderColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        marginTop: 20,
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});