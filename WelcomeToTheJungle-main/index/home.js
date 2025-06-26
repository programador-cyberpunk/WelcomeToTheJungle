// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Explore São Paulo!</Text>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Ibira')}
            >
                <Text style={styles.cardTitle}>Parque do Ibirapuera</Text>
                <Text style={styles.cardDescription}>O pulmão verde da cidade, com muita cultura e lazer.</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Anhangabau')}
            >
                <Text style={styles.cardTitle}>Vale do Anhangabaú</Text>
                <Text style={styles.cardDescription}>Espaço cultural e de eventos no coração de SP.</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Paulista')}
            >
                <Text style={styles.cardTitle}>Avenida Paulista</Text>
                <Text style={styles.cardDescription}>O centro financeiro e cultural mais famoso de SP.</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Liberdade')}
            >
                <Text style={styles.cardTitle}>Liberdade </Text>
                <Text style={styles.cardDescription}>O centro otaku mais famoso de SP.Tem um museu irado tbm</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Zoo')}
            >
                <Text style={styles.cardTitle}>Zoologico SP</Text>
                <Text style={styles.cardDescription}>Longe pa caralho, o viveiro das aves é o mais daora e o hipopotamo é um bicho assustador.</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6FA',
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 30,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 8,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
    },
});