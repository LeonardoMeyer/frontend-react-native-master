import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from './Button';
import { useLoginStore } from '../stores/useLoginStore';
import { useRouter } from 'expo-router';

export default function Footer() {
    const { logout: logoutStore, accessToken } = useLoginStore();
    const router = useRouter();

    const handleLogout = async () => {
        const logout = { accessToken };

        try {
            const response = await fetch('http://localhost:3000/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logout)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                logoutStore();
                router.push('/login');
            } else {
                const data = await response.json();
                Alert.alert('Erro ao sair', data?.error || 'Não foi possível efetuar o logout.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Ocorreu um problema de conexão.');
        }
    };

    return (
        <View style={styles.footer}>
            <Text style={styles.copy}>Copyright © 2024 Renan Cavichi </Text>
            <Button onPress={handleLogout}>Logout</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    copy: {
        color: "#808080"
    }
});
