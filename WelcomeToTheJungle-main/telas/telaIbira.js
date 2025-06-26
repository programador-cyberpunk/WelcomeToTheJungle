// screens/TelaIbira.js
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, Linking, ScrollView } from 'react-native';

import styles from '../styles/ibira_styles.js';

export default function telaIbira({ navigation }) {
    const IbiraNome = 'Parque do Ibirapuera';
    const IbiraDescri = 'O principal parque de São Paulo, localizado na Av. Pedro Álvares Cabral, s/n - Vila Mariana, São Paulo - SP. O parque é o maior de São Paulo e foi o mais visitado da América Latina no ano de 2017. A área total do parque é de 1.58 KM² e o parque também serve como local para festivais de música como o Best Of Blues N Rock, C6 Fest e TIM Music.';
    const IbiraSite = 'https://www.instagram.com/ibirapueraoficial/';
    const IbiraContato = 'https://www.parquedoibirapuera.org/contato/';
    const IbiraImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lago_no_Ibirapuera_2022_4_%28cropped%29.jpg/960px-Lago_no_Ibirapuera_2022_4_%28cropped%29.jpg';

    const handleOpenSite = (url) => {
        Linking.openURL(url).catch(err => console.error("Deu ruim, página não encontrada", err));
    };

    return (
        <SafeAreaView style={defaultStyles.container}>
            <ScrollView contentContainerStyle={defaultStyles.scrollContent}>
                <Image
                    source={{ uri: IbiraImgUrl }}
                    style={defaultStyles.imageStyle}
                    resizeMode="cover"
                />
                <View style={defaultStyles.content}>
                    <Text style={defaultStyles.title}>{IbiraNome}</Text>
                    <Text style={defaultStyles.description}>{IbiraDescri}</Text>

                    <Button
                        title="Visitar Instagram"
                        onPress={() => handleOpenSite(IbiraSite)}
                        color="#4CAF50"
                    />
                    <View style={{ marginTop: 10 }}>
                        <Button
                            title="Contato"
                            onPress={() => handleOpenSite(IbiraContato)}
                            color="#007BFF"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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
