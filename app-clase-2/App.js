import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}/>
          <Button title='ADD' color='#5555ff' />
        </View>
        <View style={styles.taskContainer}>
          <View style={styles.card}><Text style={styles.taskText}>Item 1</Text></View>
          <View style={styles.card}><Text style={styles.taskText}>Item 2</Text></View>
          <View style={styles.card}><Text style={styles.taskText}>Item 3</Text></View>
          <View style={styles.card}><Text style={styles.taskText}>Item 4</Text></View>
        </View>
      </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#888888',
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 250,
    fontSize: 16,
  },
  taskContainer: {
    borderWidth: 1,
    marginTop: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  card: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cccccc',
      width: '90%',
      paddingVertical: 15,
      marginVertical: 10,
      borderRadius: 10
  },
  taskText: {
    fontWeight: "bold",
    fontSize: 16
  },
})
