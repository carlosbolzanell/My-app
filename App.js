import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeVelha from './src/Jogo-Velha/HomeVelha';
import JogoVelha from './src/Jogo-Velha/JogoVelha';
import Home from './src/Home';
import HomeForca from './src/Jogo-Forca/HomeForca';
import HomeMemoria from './src/Jogo-Memoria/HomeMemoria';
import JogoForca from './src/Jogo-Forca/JogoForca';


export default function App() {

const [scream, setScream] = useState("jogoForca");
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
      {checkScream('homeMemoria') && <HomeMemoria changeScream={changeScream} setPalavra={setPalavra}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#232',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
