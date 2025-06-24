import React from 'react';
import {SafaAreaView, StyleSheet, Text, View, Button, Image, Linking} from 'react-native';

import styles from './styles/styles_paulista.js';

export default function TelaIbira({navigation}){
    const IbiraNome = 'Parque  do Ibirapuera';
    const IbiraDescri = 'O principal parque de São Paulo,localizado na Av. Pedro Álvares Cabral, s/n - Vila Mariana, São Paulo - SP, o parque é o maior de São Paulo ,foi o mais visitado da América Latina no ano de 2017,a área total do parque é de 1.58 KM² e o parque também serve como local para festivais de musica como o Best Of Blues N Rock, C6 Fest e TIM Music';
    const IbiraSite = 'https://www.instagram.com/ibirapueraoficial/';
    const IbiraContato = 'https://www.parquedoibirapuera.org/contato/';
    const IbiraImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lago_no_Ibirapuera_2022_4_%28cropped%29.jpg/960px-Lago_no_Ibirapuera_2022_4_%28cropped%29.jpg';

    const handleOpenSite = () => {
        Linking.openURL(IbiraSite).catch(err => console.error("Deu ruim,página não encontrada", err));
    }
};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{PaulistaNome}</Text>
                 <Image source={{url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lago_no_Ibirapuera_2022_4_%28cropped%29.jpg/960px-Lago_no_Ibirapuera_2022_4_%28cropped%29.jpg"}}>  style={styles.imageStyle} resizeMode = "Cover" 
                    </Image> //tacar uma imagem aqui

            </View>
        </SafeAreaView>
    )