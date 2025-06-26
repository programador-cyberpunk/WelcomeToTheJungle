import React from 'react';
import {SafaAreaView, StyleSheet, Text, View, Button, Image, Linking} from 'react-native';

import styles from './styles/styles_paulista.js';

export default function TelaPaulista({navigation}){
    const PaulistaNome = 'Avenida Paulista';
    const PaulistaDescri = 'Um dos principais pontos turísticos de sp, cruza o centro da cidade e possui varias atrações e centros culturais como a sede da TV Gazeta, Casa das Rosas,Centro Cultural Itau, MC Mil e muitos mais';
    const PaulistaSite = 'https://www.instagram.com/avenida_paulista/?hl=pt';// tacar o instagram
    const PaulistaContato = 'https://x.com/avpaulista_sp';//taca o contato

    const PaulistaImgUrl = 'https://blog.ublink.com.br/wp-content/uploads/2022/08/Paulista.jpg';//taca uma imagem

    const handleOpenSite = () => {
        Linking.openURL(PaulistaSite).catch(err => console.error("Deu ruim,página não encontrada", err));
    }
};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{PaulistaNome}</Text>
                 <Image source={{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT97fT03qS6XPpA6gGXTNqYN-uLNpeNWTIN1Q&s"}}>  style={styles.imageStyle} resizeMode = "Cover" 
                    </Image> //tacar uma imagem aqui

            </View>
        </SafeAreaView>
    )

    const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    content: {
        padding: 20,
        width: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
        marginBottom: 20,
        textAlign: 'justify',
    },
    imageStyle: {
        width: '100%',
        height: 250,
        marginBottom: 20,
    },
  
});