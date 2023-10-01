import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable} from "react-native";

export default function JogoVelha(props){
    
    const [botoes, setBotoes] = useState([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]);

    useEffect(()=>{
        verificarVitoria();
    },[botoes])

    const verificarVitoria = ()=>{
        if(botoes[0][0] == botoes[1][1] && botoes[1][1] == botoes[2][2] && botoes[0][0] != " "){
            declararVencedor();
        }

        if(botoes[0][2] == botoes[1][1] && botoes[1][1] == botoes[2][0] && botoes[1][1] != " "){
            declararVencedor();
        }

        for(let i=0; i<botoes.length; i++){
            if(botoes[i][0] == botoes [i][1] && botoes[i][0] == botoes[i][2] && botoes[i][0] != " "){
                declararVencedor();
            }
        }
        for(let i=0; i<botoes.length; i++){
            if(botoes[0][i] == botoes [1][i] && botoes[1][i] == botoes[2][i] && botoes[1][i] != " "){
                declararVencedor();
            } 
        }

    }

    const declararVencedor = () =>{
        if(vez == "X"){
            alert("O vencedor é: " + props.player1);
        }else{
            alert("O vencedor é: " + props.player2);
        }
    }

    const trocarVez = () =>{
        if(vez == "X"){
            setVez("O");
        }else{
            setVez("X");
        }
    }
    
    const [vez, setVez] = useState("X");


    function handleClickB(x, o){
        if(botoes[x][o] === ' '){
            let novoTabuleiro = [[...botoes[0]],[...botoes[1]],[...botoes[2]]];
            novoTabuleiro[x][o] = vez;
            setBotoes([...novoTabuleiro]);
            trocarVez();     
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Vez de </Text>
            <View style={styles.col1}>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(0,0);
                }}>
                    <Text>{botoes[0][0]}</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(0,1);
                }}>
                    <Text>{botoes[0][1]}</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(0,2);
                }}>
                    <Text>{botoes[0][2]}</Text>
                </Pressable>
            </View>
            <View style={styles.col1}>
            <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(1,0);
                }}>
                    <Text>{botoes[1][0]}</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(1,1);
                }}>
                    <Text>{botoes[1][1]}</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(1,2);
                }}>
                    <Text>{botoes[1][2]}</Text>
                </Pressable>
            </View>
            <View style={styles.col1}>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(2,0);
                }}>
                    <Text>{botoes[2][0]}</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(2,1);
                }}>
                    <Text>{botoes[2][1]}</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress = {()=>{
                    handleClickB(2,2);
                }}>
                    <Text>{botoes[2][2]}</Text>
                </Pressable>
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
        gap: 10,
        marginBottom: 10,
      },
      btn: {
        width: 40,
        height: 40,
        backgroundColor: "red"
      }
});