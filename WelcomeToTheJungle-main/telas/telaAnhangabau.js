import React from 'react';
import {SafaAreaView, StyleSheet, Text, View, Button, Image, Linking} from 'react-native';

import styles from './styles/styles_anhangabau.js';

export default function TelaAnhangabau({navigation}){
    const AnhangabauNome = 'Anhangabau';// nao sei escrever o nome desse lugar
    const AnhangabauDescri = 'Localizado na região central de São Paulo, fica situado entra a Praça da Bandeira e o Viaduto Santa Ifigênia. Um local público que comummente caracterizado como parque, onde há comícios políticos,shows,apresentações públicas e o local ainda conta com pista de skate';
    const AnhangabauSite = 'https://www.instagram.com/novoanhangabau/reels/';
    const AnhangabauContato = 'https://www.novoanhangabau.com.br/sac';//taca o contato
    const AnhangabauImgUrl = 'https://turistandosp.com.br/wp-content/uploads/2024/11/61f07e2afd8471aba42f1b5e_Still005.jpg';

    const handleOpenSite = () => {
        Linking.openURL(AnhangabauSite).catch(err => console.error("Deu ruim,página não encontrada", err));
    }
};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{AnhangabauNome}</Text>
                 <Image source={{url: "'https://turistandosp.com.br/wp-content/uploads/2024/11/61f07e2afd8471aba42f1b5e_Still005.jpg'"}}>  style={styles.imageStyle} resizeMode = "Cover" 
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