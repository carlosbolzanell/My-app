import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable} from "react-native";

const valoresIniciais = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

export default function JogoVelha(props){
    
    const [botoes, setBotoes] = useState(valoresIniciais);

    useEffect(()=>{
        verificarVitoria();
    },[botoes])

    const verificarVitoria = ()=>{
        let vencedor = false;
        if(botoes[0][0] == botoes[1][1] && botoes[1][1] == botoes[2][2] && botoes[0][0] != " "){
            declararVencedor();
            vencedor = true;
            props.changeScream('home');
        }

        if(botoes[0][2] == botoes[1][1] && botoes[1][1] == botoes[2][0] && botoes[1][1] != " "){
            declararVencedor();
            vencedor = true;
            props.changeScream('home');
        }

        for(let i=0; i<botoes.length; i++){
            if(botoes[i][0] == botoes [i][1] && botoes[i][0] == botoes[i][2] && botoes[i][0] != " "){
                declararVencedor();
                vencedor = true;
                props.changeScream('home');
            }
        }
        for(let i=0; i<botoes.length; i++){
            if(botoes[0][i] == botoes [1][i] && botoes[1][i] == botoes[2][i] && botoes[1][i] != " "){
                declararVencedor();
                vencedor = true;
                props.changeScream('home');
            } 
        }
        let cont=0
        botoes.forEach((linha, indexLinha) =>{
            linha.forEach((coluna, indexColuna)=>{
                if(coluna != " "){
                    cont++
                }
            })
        })
        if(cont == 9 && !vencedor){
            alert("Ninguém venceu!");
            props.changeScream('home');
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
            {
                botoes.map((linha, indexLinha) =>{
                    return(
                        <View key={`${linha}${indexLinha}`} style={styles.col1}>
                            {
                                linha.map((coluna, indexColuna)=>(
                                    <Pressable key={`´${coluna}${indexColuna}`} style={styles.btn} onPress={()=> handleClickB(indexLinha, indexColuna)} >
                                        <View>
                                            <Text style={styles.game}>{coluna}</Text>
                                        </View>
                                    </Pressable>
                                ))
                            }
                        </View>
                    )
                })
            }
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        backgroundColor: '#62B3F0',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: "black",
        fontSize: 30,
        fontWeight: 400,
        marginBottom: 20,
      },
      col1: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
      },
      btn: {
        backgroundColor: "#2D526E",
        padding: 50,
        maxHeight: 10,
        maxWidth: 10,
        alignItems: "center",
        justifyContent: 'center',
      },
      game: {
        color: 'white',
        fontSize: 20,
      }
});