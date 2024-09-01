import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

// Exemple de données produits
const products = [
    {
        id: '1',
        name: 'Produit 1',
        price: '20.00€ TTC',
        image: 'https://via.placeholder.com/150',
        description: 'Description du produit 1',
    },
    {
        id: '2',
        name: 'Produit 2',
        price: '35.00€ TTC',
        image: 'https://via.placeholder.com/150',
        description: 'Description du produit 2',
    },
    {
        id: '3',
        name: 'Produit 3',
        price: '50.00€ TTC',
        image: 'https://via.placeholder.com/150',
        description: 'Description du produit 3',
    },
];

const ProductScreen: React.FC = () => {

    const renderProduct = ({ item }: { item: any }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Ajouter au panier</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Produits</Text>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Lucida Console',
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Lucida Console',
    },
    productPrice: {
        fontSize: 16,
        color: 'green',
        marginBottom: 10,
        fontFamily: 'Lucida Console',
    },
    productDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 15,
        fontFamily: 'Lucida Console',
    },
    addButton: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Lucida Console',
    },
});

export default ProductScreen;
