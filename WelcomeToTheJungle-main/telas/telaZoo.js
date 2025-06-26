import React from 'react';
import {SafaAreaView, StyleSheet, Text, View, Button, Image, Linking} from 'react-native';

import styles from './styles/styles_zoo.js';

export default function TelaZoo({navigation}){
    const ZooNome = 'Zoológico de SP';
    const ZooDescri = 'Longe pa cacete, tem uns bichos mto maneiros,o melho lugar é o viveiro das aves, o hipopotamo é um bicho assustador';
    const ZooSite = 'https://www.instagram.com/zoosaopaulo/';// tacar o instagram
    const ZooContato = 'https://ingressos.zoologico.com.br/?gad_campaignid=21288890589';//taca o contato

    const ZooImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSGAGbjTn2__EOfcv1MROKWm6p4fW5fSymQ&s';//taca uma imagem

    const handleOpenSite = () => {
        Linking.openURL(ZooSite).catch(err => console.error("Deu ruim,página não encontrada", err));
    }
};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{ZooNome}</Text>
                 <Image source={{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSGAGbjTn2__EOfcv1MROKWm6p4fW5fSymQ&s"}}>  style={styles.imageStyle} resizeMode = "Cover" 
                    </Image> //tacar uma imagem aqui

            </View>
        </SafeAreaView>
    )