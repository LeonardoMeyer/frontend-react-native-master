
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});