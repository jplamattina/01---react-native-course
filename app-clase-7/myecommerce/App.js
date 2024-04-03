import Home from './src/Screens/Home'
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/constants/colors'
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
    <Header title={'HOME DE MY APP'} />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.teal200
  },
});

export default App