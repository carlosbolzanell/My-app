import { View, Text, Pressable, StyleSheet, TextInput} from "react-native";
import { StatusBar } from "react-native";

export default function JogoForca(props){

    const tamanhoPalavra = props.palavra.lenght;

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <Text></Text>
            </View>
            <TextInput style={styles.input} placeholder="Digite a letra ou a Palavra" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      gap: 20,
      backgroundColor: '#232',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      color: 'white',
      fontSize: 20,
    },
  
    input: {
      width: "100%",
      height: 40,
      color: "#fff",
      borderWidth: 1.5,
      borderRadius: 10,
      borderColor: 'white',
      padding:(50,20)
    },
  
    title: {
      color: "white",
      fontSize: 25,
      textAlign: "center",
      width: "85%",
      margin: "auto",
    },
    btn: {
      backgroundColor: "blue",
      padding: 10,
      borderRadius: 10,
    }
  
  });
  