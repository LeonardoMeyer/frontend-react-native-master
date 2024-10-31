import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ onPress, children }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#003366' : '#004080' }  // azul escuro com efeito ao pressionar
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
