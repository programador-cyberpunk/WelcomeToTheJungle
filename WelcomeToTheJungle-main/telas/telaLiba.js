import React from 'react';
import {SafaAreaView, StyleSheet, Text, View, Button, Image, Linking} from 'react-native';

import styles from './styles/styles_paulista.js';

export default function TelaPaulista({navigation}){
    const PaulistaNome = 'Avenida Paulista';
    const PaulistaDescri = 'Um dos principais pontos turísticos de sp, cruza o centro da cidade e possui varias atrações e centros culturais como a sede da TV Gazeta, Casa das Rosas,Centro Cultural Itau, MC Mil e muitos mais';
    const PaulistaSite = '';// tacar o instagram
    const PaulistaContato = '';//taca o contato

    const PaulistaImgUrl = '';//taca uma imagem

    const handleOpenSite = () => {
        Linking.openURL(PaulistaSite).catch(err => console.error("Deu ruim,página não encontrada", err));
    }
};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{PaulistaNome}</Text>
                 <Image source={{url: ""}}>  style={styles.imageStyle} resizeMode = "Cover" 
                    </Image> //tacar uma imagem aqui

            </View>
        </SafeAreaView>
    )