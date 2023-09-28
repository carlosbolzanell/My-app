import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';

export default function HomeForca(props) {

const [palavra, setPalavra] = useState("");

const handClick = ()=>{
    if(palavra == ""){
        alert("Erro, digite uma palavra válida!");
    }else{
        alert("A palavra escolhida foi: "+ palavra)
        props.setPalavra(palavra)
        props.changeScream('jogoForca');
  }
}
const goBack = () =>{
  props.changeScream('home');
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao Jogo da Forca digite a palavra que deseje para o jogo</Text>
      <Text style={styles.text}>Palavra: {palavra}</Text>
      <TextInput style={styles.input} placeholderTextColor = "white" placeholder="Palavra" onChangeText={setPalavra} />
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
