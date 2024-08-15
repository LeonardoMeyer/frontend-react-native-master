// cardAccount.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CardAccount = ({ title, content, email, password, isMain, icon }) => {
    return (
        <View style={[styles.card, isMain && styles.mainCard]}>
            <View style={styles.header}>
                {isMain && icon && (
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
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: '100%',
    },
    mainCard: {
        backgroundColor: '#f9f9f9',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 16,
        marginVertical: 8,
    },
    email: {
        fontSize: 14,
        color: '#555',
    },
    password: {
        fontSize: 14,
        color: '#555',
    },
});

export default CardAccount;
