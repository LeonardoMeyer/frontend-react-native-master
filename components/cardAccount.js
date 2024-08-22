import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardAccount = ({ title, content, email, password, isMain, icon }) => {
    return (
        <View style={[styles.card, isMain && styles.mainCard]}>
            <View style={styles.header}>
                {icon && (
                    <Image source={{ uri: icon }} style={styles.icon} />
                )}
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.content}>{content}</Text>
            {email && <Text style={styles.email}>Email: {email}</Text>}
            {password && <Text style={styles.password}>Senha: {password}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '90%',
        alignSelf: 'center',
    },
    mainCard: {
        backgroundColor: '#f1f1f1',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    icon: {
        width: 28,
        height: 28,
        borderRadius: 14,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        fontSize: 16,
        marginVertical: 8,
        color: '#666',
    },
    email: {
        fontSize: 14,
        color: '#777',
    },
    password: {
        fontSize: 14,
        color: '#777',
    },
});

export default CardAccount;
