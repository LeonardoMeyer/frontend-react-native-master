import { View, Text, StyleSheet } from "react-native";

export default function Main(){
    return(
        <View style={styles.main}>
        <Text style={styles.mainText}>ma</Text>
      </View>
    )
}

const styles = StyleSheet.create({
        main: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          mainText: {
            fontSize: 18,
            color: '#333',
            fontWeight: 'bold'
          }
})