import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const tabuleiroInicial = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]
const valores = ["🐷","🐷","🧡","🧡","💚","💚", "🐼","🐼","🐱",'🐱',"🌍","🌍",
"😈","😈","💙","💙","🐸","🐸","🐻","🐻","🐵","🐵","🌳","🌳","🍑","🍑",
"🐋","🐋","🥂","🥂","🍪","🍪","🌶️","🌶️","🎗️","🎗️","🎱","🎱","☯️","☯️","🟡",
"🟡","🌝","🌝","🔥","🔥","🐴","🐴","🥰","🥰"];

for(let l=0; l<10; l++){
    for(let c=0; c<5; c++){
        let num = Math.floor(Math.random()*valores.length);
        tabuleiroInicial[l][c] = valores[num];
        valores.splice(num, 1);   
    }
}
console.log(tabuleiroInicial)

export default function JogoMemoria(props){

    const [pecas, setPecas] = useState();
    const [tabuleiro, setTabuleiro] = useState(tabuleiroInicial);
    const [jogador, setJogador] = useState(1);
    
    const jogadorVez = () => jogador === 1 ? props.player1 : props.player2 ;

    return(
        <View>
            <Text style={styles.text}>Vez de </Text>

            {
                tabuleiro.map((linha, indexLinha) =>{
                    return(
                    <View key={`${linha}${indexLinha}`} style={styles.linha}>
                        {
                            linha.map((coluna, indexColuna)=>(
                                <TouchableOpacity key={`${coluna}${indexColuna}`}>
                                    <View style={styles.botao}>
                                        <Text></Text>
                                    </View>
                                </TouchableOpacity>
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
    botao: {
        backgroundColor: "grey",
        padding: 26,

    },
    linha: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 5,
    },
    text:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    }
});