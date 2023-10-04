import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function HomeMemoria(props) {

const [player1, setPlayer1] = useState("");
const [player2, setPlayer2] = useState("");

const handClick = ()=>{
    if(player1 === "" || player2 ===""){
        alert("Erro, digite um nome válido");
    }else{
      alert(player1 +" x "+ player2);
      props.mudarNomeJogadores(player1, player2);
      props.changeScream('jogoMemoria');
  }
}
const goBack = () =>{
  props.changeScream('home');
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao Jogo da Memoria digite o nome dos jogadores 1 e 2</Text>
      <Text style={styles.text}>Nome: {player1}</Text>
      <TextInput style={styles.input} placeholderTextColor = "white" placeholder="Player 1" onChangeText={setPlayer1} />
      <Text style={styles.text}>Nome: {player2}</Text>
      <TextInput style={styles.input} placeholderTextColor = "white" placeholder="Player 2" onChangeText={setPlayer2} />
      <Pressable onPress={handClick} style={styles.btn}><Text style={styles.text}>Jogar</Text></Pressable>
      <Pressable onPress={goBack} style={styles.btn}><Text style={styles.text}>Voltar a Página Inicial</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    backgroundColor: '#232',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 20,
  },

  input: {
    width: "80%",
    height: 40,
    color: "#fff",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'white',
    padding: 10
  },

  title: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    width: "85%",
    margin: "auto",
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  }

});
