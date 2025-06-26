import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//é só uns exemplo,me erra caralho
const initialFavorites =[
    {id: '1', name: 'Liberdade', description: 'Otakus,otakus e roupas caras por todos os lados'},
    {id: '2', name: 'Anhangabaú', description: 'Tem uns shows de rock,skatistas e maconheiros na maio parte do tempo'},
]

export default function FavoritesScreen() {
    const [favorites, setFavorites] = useState(initialFavorites);

    const handleRemoveFavorite = (id) => {
        Alert.alert(
            "Remover Favorito",
            "Tem certeza que deseja remover este item dos seus favoritos?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Remover",
                    onPress: () => {
                        setFavorites(favorites.filter(item => item.id !== id));
                        Alert.alert("Removido", "Item removido dos favoritos.");
                    },
                    style: "destructive"
                }
            ]
        );
    };

    const renderFavoriteItem = ({ item }) => (
        <View style={styles.favoriteItem}>
            <View style={styles.textContainer}>
                <Text style={styles.favoriteName}>{item.name}</Text>
                <Text style={styles.favoriteDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)}>
                <Icon name="delete" size={24} color="#FF6347" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus Favoritos</Text>
            {favorites.length === 0 ? (
                <Text style={styles.noFavoritesText}>Você ainda não tem favoritos. Adicione alguns!</Text>
            ) : (
                <FlatList
                    data={favorites}
                    renderItem={renderFavoriteItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5DC', // Bege claro
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6B8E23', // Verde oliva
        marginBottom: 30,
        textAlign: 'center',
    },
    listContent: {
        paddingBottom: 20,
    },
    favoriteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    favoriteName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4682B4', // Azul aço
        marginBottom: 5,
    },
    favoriteDescription: {
        fontSize: 14,
        color: '#666',
    },
    noFavoritesText: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
        marginTop: 50,
    },
});