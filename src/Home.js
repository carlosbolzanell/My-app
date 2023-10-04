import { View, StyleSheet, Text, Pressable } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Home(props){
    const handleClick = (x) =>{
        if(x === 1){
            props.changeScream('homeVelha');
        }else if(x === 2){
            props.changeScream('homeForca');
        }else{
            props.changeScream('homeMemoria');
        }
    }

    return(
        <View > 
            <StatusBar style="auto" />
            <View>
                <Text style={styles.title}>Bem vindo ao portal dos games!</Text>
            </View>
            <View style={styles.botoes}>
                <Pressable style={styles.botao} onPress = {()=>{
                    handleClick(1);
                }}>
                    <Text style={styles.text}>
                        Jogo da Velha
                    </Text>
                </Pressable>
            
                <Pressable style={styles.botao} onPress={()=>{~
                    handleClick(2)
                }}>
                    <Text style={styles.text}>
                        Jogo da Forca
                    </Text>
                </Pressable>
                
                <Pressable onPress={()=>{
                    handleClick(3);   
                }} style={styles.botao}>
                    <Text style={styles.text}>
                        Jogo da Memória
                    </Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    botoes : {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "column",
        gap: 4,
        marginTop: 10,
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
    },
    botao: {
        backgroundColor: "black",
        padding: 20,

    },
    title: {
        color: 'white',
        fontSize: 25,
        marginBottom: 10
    }
});