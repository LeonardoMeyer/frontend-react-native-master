import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Ícone de lixeira

export default function App() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Função para carregar as contas ao iniciar o componente
        const fetchAccounts = async () => {
            const response = await fetch('http://localhost:3000/account/list');
            if (response.ok) {
                const data = await response.json();
                setAccounts(data.accounts); // Carregando contas do backend
            } else {
                console.log('Erro ao carregar contas');
            }
        };
        fetchAccounts();
    }, []);

    // Função para deletar uma conta
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setAccounts((prevAccounts) => prevAccounts.filter((item) => item.id !== id)); // Removendo a conta da lista
            return;
        }

        console.log('Erro ao carregar contas');
    };

    return (
        <View style={styles.container}>
            {accounts.length === 0 ? (
                <Text style={styles.loading}>Carregando...</Text>
            ) : (
                accounts.map((account) => (
                    <CardAccount
                        key={account.id}
                        id={account.id}
                        service={account.service}
                        userName={account.username}
                        imgUrl={account.logo_image}
                        onDelete={handleDelete}
                    />
                ))
            )}
        </View>
    );
}

// Componente CardAccount que renderiza cada conta
function CardAccount({ id, service, userName, imgUrl, onDelete }) {
    return (
        <View style={styles.card}>
            <Image 
                style={styles.logo} 
                source={{ uri: imgUrl }} // Corrigido para utilizar URI
            />
            <View style={styles.content}>
                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>
            </View>
            <Pressable onPress={() => onDelete(id)} style={styles.deleteButton}>
                <MaterialIcons name="delete" size={24} color="#fff" />
            </Pressable>
        </View>
    );
}

// Estilos para o layout
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    loading: {
        fontSize: 18,
        color: '#777',
        textAlign: 'center',
        marginTop: 20,
    },
    card: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    service: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    username: {
        fontSize: 16,
        color: '#777',
        marginTop: 4,
    },
    deleteButton: {
        backgroundColor: '#555', 
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
