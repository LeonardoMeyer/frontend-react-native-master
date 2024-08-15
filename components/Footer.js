import { View, Text, StyleSheet } from "react-native"

export default function Footer(){
    return (
        <View style={styles.footer}>
        <Text style={styles.footerText}> Copyright © Renan Cavichi</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: 75,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      },
      footerText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold'
      }
})