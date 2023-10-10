import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import HomeVelha from './src/Jogo-Velha/HomeVelha';
import JogoVelha from './src/Jogo-Velha/JogoVelha';
import HomeForca from './src/Jogo-Forca/HomeForca';
import JogoForca from './src/Jogo-Forca/JogoForca';
import HomeMemoria from './src/Jogo-Memoria/HomeMemoria';
import JogoMemoria from './src/Jogo-Memoria';


export default function App() {

<<<<<<< HEAD
const [scream, setScream] = useState("home");
=======
const [scream, setScream] = useState("jogoForca");
>>>>>>> b1f00647a1fc63d1568f09beb530f49ba7810b76
const [palavra, setPalavra] = useState("");
const [player1, setPlayer1] = useState("");
const [player2, setPlayer2] = useState("");

const checkScream = (checkScream) => checkScream === scream;

const setJogadores = (nome1, nome2) =>{
  setPlayer1(nome1);
  setPlayer2(nome2);
}

const changeScream = (newScream) => setScream(newScream);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScream('home') && <Home changeScream={changeScream}/>}
      {checkScream('homeVelha') && <HomeVelha mudarNomeJogadores={setJogadores} changeScream={changeScream} />}
      {checkScream('jogoVelha') && <JogoVelha changeScream={changeScream} player1={player1} player2 = {player2}/>}
      {checkScream('homeForca') && <HomeForca changeScream={changeScream} setPalavra={setPalavra}/>}
      {checkScream('jogoForca') && <JogoForca changeScream={changeScream} palavra={palavra}/>}
      {checkScream('homeMemoria') && <HomeMemoria changeScream={changeScream} mudarNomeJogadores={setJogadores}/>}
      {checkScream('jogoMemoria') && <JogoMemoria changeScream={changeScream} player1={player1} player2={player2}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#62B3F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
