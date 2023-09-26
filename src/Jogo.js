import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Text} from "react-native";
import { Button } from "react-native";

export default function Jogo(props){

    const [b1, setB1] = useState("");

    const handleClick = ()=>{
        props.changeScream('home');
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Jogo</Text>
            
            <Button title="Voltar" onPress={handleClick}/>

            <Button title="Voltar" onPress={handleClick}/>
            <Button title="Voltar" onPress={handleClick}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        gap: 20,
        backgroundColor: '#232',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: "white",
        fontSize: 20,
      }
});