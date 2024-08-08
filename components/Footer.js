import { View, Text, StyleSheet } from "react-native"

export default function Footer(){
    return (
        <View style={styles.footer}>
        <Text style={styles.footerText}>ny</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: 300,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      },
      footerText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold'
      }
})