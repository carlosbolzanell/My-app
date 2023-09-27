import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text} from "react-native";
import { Button } from "react-native";

export default function Jogo(props){
    let contador = 1;
    let jogadorDaVez = 'Jogador 1';
    
    let setVez = () =>{
        if(contador%2 == 0){
            jogadorDaVez = "Jogador 1"
            contador++
            return 1
        }else if(contador%2 == 1){
            jogadorDaVez = "Jogador 2"
            return 2
            contador++
        }
        return "";
    } 

    let marcador = ()=>{
        if(setVez() == 1){
            return 'X';
        }else if(setVez == 2){
            return 'O';
        }
        return " "
    }


    const [b1, setB1] = useState("");
    const [b2, setB2] = useState("");
    const [b3, setB3] = useState("");
    const [b4, setB4] = useState("");
    const [b5, setB5] = useState("");
    const [b6, setB6] = useState("");
    const [b7, setB7] = useState("");
    const [b8, setB8] = useState("");
    const [b9, setB9] = useState("");

    const handleClickB1 = () =>{
        setB1(marcador());
    }
    const handleClickB2 = () =>{
        setB2(marcador());
    }
    const handleClickB3 = () =>{
        setB3(marcador());
    }
    const handleClickB4 = () =>{
        setB4(marcador());
    }
    const handleClickB5 = () =>{
        setB5(marcador());
    }
    const handleClickB6 = () =>{
        setB6(marcador());
    }
    const handleClickB7 = () =>{
        setB7(marcador());
    }
    const handleClickB8 = () =>{
        setB8(marcador());
    }
    const handleClickB9 = () =>{
        setB9(marcador());
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Vez de {jogadorDaVez}</Text>
            <View style={styles.col1}>
                <Button title = {b1} style={styles.btn} onPress = {handleClickB1}/>
                <Button title = {b2} style={styles.btn} onPress = {handleClickB2}/>
                <Button title = {b3} style={styles.btn} onPress = {handleClickB3}/>
            </View>
            <View style={styles.col1}>
                <Button title = {b4} style={styles.btn} onPress = {handleClickB4}/>
                <Button title = {b5} style={styles.btn} onPress = {handleClickB5} />
                <Button title = {b6} style={styles.btn} onPress = {handleClickB6}/>
            </View>
            <View style={styles.col1}>
                <Button title = {b7} style={styles.btn} onPress = {handleClickB7}/>
                <Button title = {b8} style={styles.btn} onPress = {handleClickB8}/>
                <Button title = {b9} style={styles.btn} onPress = {handleClickB9}/>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        backgroundColor: '#232',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: "white",
        fontSize: 20,
      },
      col1: {
        flexDirection: "row",
      },
      btn: {
        width: 40,
        height: 40,
      }
});