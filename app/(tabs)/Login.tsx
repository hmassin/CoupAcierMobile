import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Veuillez remplir tous les champs');
            return;
        }

        try {
            // Appel de l'API avec fetch
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Connexion réussie
                Alert.alert('Connexion réussie', `Token: ${data.token}`);
            } else {
                // Gérer les erreurs de l'API
                setError(data.message || 'Erreur de connexion');
            }
        } catch (err) {
            // Gérer les erreurs de réseau
            setError('Erreur de réseau, veuillez réessayer');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>COUP'ACIER</Text>
            
            <Text style={styles.title}>Se connecter</Text>

            <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
            />

            <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Mot de passe"
                placeholderTextColor="#aaa"
                secureTextEntry
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
                Vous n'avez pas de compte ? <Text style={styles.signup}>Inscrivez-vous</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'orange',
        textAlign: 'center',
        marginBottom: 50,
        fontFamily: 'Lucida Console',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Lucida Console',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        fontSize: 16,
        fontFamily: 'Lucida Console',
    },
    errorText: {
        color: 'red',
        marginBottom: 15,
        fontFamily: 'Lucida Console',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lucida Console',
    },
    footerText: {
        textAlign: 'center',
        color: 'gray',
        fontFamily: 'Lucida Console',
        marginTop: 30, // Ajustez cette valeur pour créer plus d'espace
    },
    signup: {
        color: 'red',
        fontSize: 13,
        fontFamily: 'Lucida Console',
    },
});

export default LoginScreen;
