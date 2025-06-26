import React from 'react';
import {SafaAreaView, StyleSheet, Text, View, Button, Image, Linking} from 'react-native';

import styles from './styles/styles_liba.js';

export default function TelaLiba({navigation}){
    const LibaNome = 'Liberdade';
    const LibaDescri = 'Um dos principais pontos turísticos de sp,o famoso bairo otaku de SP,tudo lá é bonito e caro';
    const LibaSite = 'https://www.instagram.com/vempraliba/?hl=pt';
    const LibaContato = 'https://www.instagram.com/vempraliba/?hl=pt';//taca o contato

    const LibaImgUrl = 'https://blog.aguiabranca.com.br/wp-content/uploads/2023/09/praca-da-liberdade.jpg';//taca uma imagem

    const handleOpenSite = () => {
        Linking.openURL(LibaSite).catch(err => console.error("Deu ruim,página não encontrada", err));
    }
};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{LibaNome}</Text>
                 <Image source={{url: "https://blog.aguiabranca.com.br/wp-content/uploads/2023/09/praca-da-liberdade.jpg"}}>  style={styles.imageStyle} resizeMode = "Cover" 
                    </Image> 

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