import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardAccount2 = ({ service, imgUrl, userName }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.header}>
                <Image source={{ uri: imgUrl }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.service}>{service}</Text>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e0f7fa',
        borderRadius: 10,
        padding: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    service: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00796b',
    },
    userName: {
        fontSize: 16,
        color: '#004d40',
        marginTop: 4,
    },
});
export default CardAccount2;
