import { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput} from "react-native";
import { StatusBar } from "react-native";

export default function JogoForca(props){
  
  let input = document.getElementById('input');
  let letras = props.palavra.split('');

  const primeiraPalavra = letras.map((char) =>{
    return char === " " ? " ": "_ ";
  });
  
  const [palavraMostrada, setPalavraMostrada] = useState(primeiraPalavra);
  const [letra, setLetra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState("");

  const verificarLetra = () => {
    if(letra.length > 1){
      if(letra.length != props.palavra.length){
        alert("Digite uma letra ou a palavra certa!")
      }else{
        if(props.palavra.includes(letra)){
          alert("Parabens, você descobriu a palavra "+props.palavra+ "!");
        }else{
          //perdeu vida na lógica
        }
      }
    }
    else{
      let letrasUtilizadas = letrasUsadas;
      letrasUtilizadas += letra+" ";
      setLetrasUsadas(letrasUtilizadas);
      input.value = "";
      let palavraNova = [...letras];
      let palavraNovaMostrada = [...palavraMostrada];
      palavraNova.map((char, index) =>{
        if(char === letra){
          palavraNovaMostrada[index] = letra;
        }else{
          //perdeu vida
        }
      })
      setPalavraMostrada(palavraNovaMostrada);
      verificarPalavra();
    }
    
  }

  const verificarPalavra = () =>{
    let cont = 0;
    palavraMostrada.map((char)=>{
      if(char != "_ "){
        cont++;
      }
    })

    if(cont === props.palavra.length - 1){
      alert("Parabens, você descobriu a palavra "+props.palavra+ "!");
      
    }
  }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
              <Text id="texto" style={styles.text}>Letra Usadas: {letrasUsadas}</Text>
              <Text id="texto" style={styles.palavra}>{palavraMostrada}</Text>
            </View>
            <TextInput id="input" style={styles.input} placeholder="Digite a letra ou a Palavra" onChangeText={setLetra}/>
            <Pressable style={styles.btn} onPress={verificarLetra}><Text style={styles.textBtn}>Enviar</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      gap: 20,
      backgroundColor: '##62B3F0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      color: 'black',
      fontSize: 20,
      maxWidth: 130,
    },
  
    input: {
      width: "100%",
      height: 40,
      color: "black",
      borderWidth: 1.5,
      borderRadius: 10,
      borderColor: 'black',
      padding:(50,20)
    }, 
    btn: {
      backgroundColor: "#2D526E",
      padding: 10,
      borderRadius: 10,
    },
    palavra:{
      color: 'black',
      fontSize: 20,
      textAlign: 'center',

    },
    textBtn:{
      color: 'white',
      fontSize: 20,
    }
  
  });
  