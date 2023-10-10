import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, TextInput, Image} from "react-native";
import { StatusBar } from "react-native";

const imagensForca = [require("../assets/forca6.png"), require("../assets/forca5.png"), require("../assets/forca4.png"), require("../assets/forca3.png"), require("../assets/forca2.png"), require("../assets/forca1.png"), require("../assets/forca0.png")]

export default function JogoForca(props){
  
  let input = document.getElementById('input');
  let letras = props.palavra.split('');

  const primeiraPalavra = letras.map((char) =>{
    return char === " " ? " ": "_ ";
  });
  
  const [palavraMostrada, setPalavraMostrada] = useState(primeiraPalavra);
  const [letra, setLetra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState("");
  const [contador, setContador] = useState(1)
  const [imagem, setImagem] = useState(imagensForca[0])

  useEffect(() => {
    verificarPalavra()
}, palavraMostrada);


  const checkWin = () =>{
    if(contador == 6){
      alert("Você o deixou morrer! Press F \nA palavra era "+ props.palavra.toUpperCase());
      props.changeScream('home')
    }
  }

  const goBack = () =>{
    props.changeScream('home');
  }

  const verificarLetra = () => {
    if(letra.length > 1){
      if(letra.length != props.palavra.length){
        alert("Digite uma letra ou a palavra certa!")
      }else{
        if(props.palavra.toUpperCase().includes(letra.toUpperCase())){
          alert("Parabens, você descobriu a palavra "+props.palavra+ "!");
        }else{
          alert("Palavra Errada!")
          setContador(contador+1);
          setImagem(imagensForca[contador]);
          checkWin();
        }
      }
    }
    else{
      let jaUsada = false;
      const verificacao = letrasUsadas.split(" ");
      verificacao.map((caracter)=>{
        if(caracter == letra.toUpperCase()){
          jaUsada = true;
        }
      })
      if(!jaUsada){
        let letrasUtilizadas = letrasUsadas;
        letrasUtilizadas += letra.toUpperCase()+" ";
        setLetrasUsadas(letrasUtilizadas);
        input.value = "";
        let palavraNova = [...letras];
        let palavraNovaMostrada = [...palavraMostrada];
        let cont = 0;
        palavraNova.map((char, index) =>{
          if(char.toUpperCase() === letra.toUpperCase()){
            palavraNovaMostrada[index] = letra.toUpperCase();
            cont++;
          }
        })
        if(cont == 0){
          setContador(contador+1);
          setImagem(imagensForca[contador]);
          checkWin();
        }
        setPalavraMostrada(palavraNovaMostrada);
      }else{
        alert("Essa letra já foi utilizada!");
        input.value = "";
      }
    }
    
  }

  const verificarPalavra = () =>{
    if(palavraMostrada.toString() == letras.toString().toUpperCase()){
      alert("Parabens, você descobriu a palavra "+props.palavra.toUpperCase()+ "!");
      props.changeScream("home");
    }
    
  }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
              <Text id="texto" style={styles.text}>Letra Usadas: {letrasUsadas}</Text>
              <Image
                style={styles.imgForca}
                source={imagem}
              >
              </Image>
              <Text id="texto" style={styles.palavra}>{palavraMostrada}</Text>
            </View>
            <TextInput id="input" style={styles.input} placeholder="Digite a letra ou a Palavra" onChangeText={setLetra}/>
            <Pressable style={styles.btn} onPress={verificarLetra}><Text style={styles.textBtn}>Enviar</Text></Pressable>
            <Pressable onPress={goBack} style={styles.btn}><Text style={styles.textBtn}>Voltar a Página Inicial</Text></Pressable>
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
      padding:(50,20),
      marginTop: 20,
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
      marginTop: 20,

    },
    textBtn:{
      color: 'white',
      fontSize: 20,
    },
    imgForca: {
      marginTop: 20,
      width: 150,
      height: 150,
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
  