import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import styles from './styles';

import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import styles from './styles';

export default function HomeScreen({ navigation }) {
    const LugaresSP = [
        { nome: 'Ibira', rota: 'pontoIbira', site: 'siteIbira' },
        { nome: 'Soho', rota: 'pontoSoho', site: 'siteIbira' },
        { nome: 'Paulista', rota: 'pontoPaulista', site: 'sitePaulista' },
        { nome: 'LagoBatata', rota: 'pontoBatata', site: 'siteBatata' },
        { nome: 'Zoo SP', rota: 'pontoZoo', site: 'siteZoo' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>
                    De um bizu nos roles de SP, a selva de pedra (pra combinar com o nome)
                </Text>
                <Text style={styles.paragraph}>
                    Escolha um lugar e prepare-se pra morrer.
                </Text>

                {LugaresSP.map((ponto) => (
                    <View key={ponto.rota} style={styles.buttonContainer}>
                        <Button
                            title={ponto.nome}
                            onPress={() => navigation.navigate(ponto.rota)}
                            color="#841584"
                        />
                    </View>
                ))}

                <View style={styles.buttonContainer}>
                    <Button
                        title="Sobre"
                        onPress={() => navigation.navigate('Sobre')}
                        color={'#5a5a9a'}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Contatos"
                        onPress={() => navigation.navigate('Contatos')}
                        color={'#5a5a9a'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}