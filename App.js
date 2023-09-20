import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

const [player1, setPlayer1] = useState("");
const [player2, setPlayer2] = useState("");

const handClick = (event)=>{
  alert("bla!")
}

const rand = Math.round(Math.random()*100);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {player1}</Text>
      <TextInput style={styles.input} placeholder="Player 1" onChangeText={setPlayer1} />
      <Text style={styles.text}>Nome: {player2}</Text>
      <TextInput style={styles.input} placeholder="Player 2" onChangeText={setPlayer2} />
      <Button title='Me aperte' onPress={handClick}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#232',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 30,
  },

  input: {
    width: "80%",
    height: 40,
    color: "white",
    borderWidth: 1,
    padding: 10,
  },

});
