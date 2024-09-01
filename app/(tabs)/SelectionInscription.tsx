import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Définissez vos types de route ici
type RootStackParamList = {
    ParticulierInscription: undefined;
    ProfessionnelInscription: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ClientTypeSelectionScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vous etes : </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ParticulierInscription')}
            >
                <Text style={styles.buttonText}>Particulier</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProfessionnelInscription')}
            >
                <Text style={styles.buttonText}>Professionnel</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'Lucida Console',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lucida Console',
    },
});

export default ClientTypeSelectionScreen;
