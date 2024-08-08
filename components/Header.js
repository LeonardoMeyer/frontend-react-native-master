import { View, Text, StyleSheet } from "react-native"

export default function Header() {
    return(
        <View style={styles.header}>
        <Text style={styles.headerText}>ger</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 300,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }})