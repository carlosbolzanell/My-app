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
      <TextInput style={styles.input} placeholderTextColor = "black" placeholder="Player 1" onChangeText={setPlayer1} />
      <Text style={styles.text}>Nome: {player2}</Text>
      <TextInput style={styles.input} placeholderTextColor = "black" placeholder="Player 2" onChangeText={setPlayer2} />
      <Pressable onPress={handClick} style={styles.btn}><Text style={styles.textBtn}>Jogar</Text></Pressable>
      <Pressable onPress={goBack} style={styles.btn}><Text style={styles.textBtn}>Voltar a Página Inicial</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#62B3F0',
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 500,
  },

  input: {
    width: "80%",
    height: 40,
    color: "black",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    padding: 10
  },

  title: {
    color: "black",
    fontWeight: 400,
    fontSize: 31,
    textAlign: "center",
    width: "85%",
    margin: "auto",
  },
  btn: {
    backgroundColor: "#2D526E",
    padding: 10,
    borderRadius: 10,
  },
  textBtn:{
    fontSize: 20,
    color: 'white',
    fontWeight: 400,
  }

});
