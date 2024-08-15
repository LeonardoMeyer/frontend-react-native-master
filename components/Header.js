import { View, Text, StyleSheet } from "react-native"
import { Image } from "expo-image"
import Feather from '@expo/vector-icons/Feather';

export default function Header() {
    return(
        <View style={styles.header}>
          <View style={styles.user}>
          <Image
          style={styles.avatar}
          source="https://miro.medium.com/v2/resize:fit:736/0*e2FeM-WKmvdXJs9W.jpg"
          />
        <Text style={styles.name}>Leonardo Meyer</Text>
        </View>
        <Feather name="menu" size={24} color="black" />
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center', 
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 16, 
    paddingTop: 10, 
    paddingBottom: 10, 
  },
  user: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
  }, 
  name: {
    fontWeight: '600',
    fontSize: 18
  },
  avatar: {
      width: 50,
      height: 50,
      borderRadius: 25
  },
  menu: {
      width: 25,
      height: 25,
      padding: 10,
  }
})