import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';

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
console.log(tabuleiroInicial);

export default function JogoMemoria(props){

    const tabuleiroVazio = [
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

    const [tabuleiro, setTabuleiro] = useState(tabuleiroVazio);
    const [tabuleiroTemporario, setTabuleiroTemporario] = useState(tabuleiroVazio);
    const [jogador, setJogador] = useState(1);
    const [emoji, setEmoji] = useState('');
    const [contador, setContador] = useState(1);
    const [pontuacao1, setPontuacao1] = useState(0);
    const [pontuacao2, setPontuacao2] = useState(0);

    const handleClick = (l, c) =>{
        if(tabuleiro[l][c] == ""){
            let tabuleiroAtual = [[...tabuleiro[0]],[...tabuleiro[1]],[...tabuleiro[2]],[...tabuleiro[3]],[...tabuleiro[4]],[...tabuleiro[5]],[...tabuleiro[6]],[...tabuleiro[7]],[...tabuleiro[8]],[...tabuleiro[9]]]
            let tabuleiroModificado = [[...tabuleiroTemporario[0]],[...tabuleiroTemporario[1]],[...tabuleiroTemporario[2]],[...tabuleiroTemporario[3]],[...tabuleiroTemporario[4]],[...tabuleiroTemporario[5]],[...tabuleiroTemporario[6]],[...tabuleiroTemporario[7]],[...tabuleiroTemporario[8]],[...tabuleiroTemporario[9]]]
            if(contador == 1){
                tabuleiroAtual[l][c] = tabuleiroInicial[l][c];
                setTabuleiro(tabuleiroAtual);
                setEmoji(tabuleiroInicial[l][c]);
                setContador(2);
            }
            if(contador == 2){
                tabuleiroAtual[l][c] = tabuleiroInicial[l][c]
                setTabuleiro(tabuleiroAtual);
                setContador(0)
                if(emoji != tabuleiroInicial[l][c]){
                    setTimeout(()=>{
                        setTabuleiro(tabuleiroModificado);
                        setJogador(jogador === 1 ? 2 : 1);
                        setContador(1);
                    },1000);
                }else{
                    setJogador(jogador === 1 ? 1 : 2);
                    setTabuleiroTemporario(tabuleiroAtual);
                    setContador(1);
                    if(jogador == 1){
                        setPontuacao1(pontuacao1+1);
                    }else{
                        setPontuacao2(pontuacao2+1);
                    }
                }
                checkWin();
            }
        }
    }
    
    const checkWin = () =>{
        let cont = 0;
        tabuleiro.forEach((pecas) =>{
            pecas.forEach((emoji)=>{
                if(emoji != ""){
                    cont++;
                }
            })
        })
        if(cont == 49){
            if(pontuacao1 > pontuacao2){
                alert("Parabens! O vencedor foi o "+props.player1);
            }else{
                alert("Parabens! O vencedor foi o "+props.player2);
            }
            props.changeScream("home")
        }
    }

    const goBack = () =>{
        props.changeScream("home");
    }

    const jogadorVez = () => jogador === 1 ? props.player1 : props.player2 ;

    return(
        <View style={styles.conteiner}>
            <View style={styles.textos}>
                <Text style={styles.text}>Vez de {jogadorVez()}</Text>
                <Text style={styles.text}> Pontuação {props.player1} : {pontuacao1}</Text>
                <Text style={styles.text}> Pontuação {props.player2} : {pontuacao2}</Text>
            </View>

            {
                tabuleiro.map((linha, indexLinha) =>{
                    return(
                    <View key={`${linha}${indexLinha}`} style={styles.linha}>
                        {
                            linha.map((coluna, indexColuna)=>(
                                <TouchableOpacity key={`${coluna}${indexColuna}`} onPress={()=> handleClick(indexLinha, indexColuna)}>
                                    <View style={styles.botao}>
                                        <Text style={styles.emojis}>{coluna}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                    )
                })
            }
            <Pressable style={styles.btn} onPress={goBack}><Text style={styles.text}>Voltar</Text></Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#2D526E",
        padding: 26,
        maxHeight: 10,
        maxWidth: 10,
        alignItems: "center",
        justifyContent: 'center',

    },
    linha: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 5,
    },
    text:{
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
    emojis: {
        fontSize: 20,
    },
    btn:{
        backgroundColor: '#0A4270',
        width: 75,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        borderRadius: 8,
    },
    conteiner:{
        alignItems: 'center',
    },
    textos:{
        marginBottom: 10,
    }
});