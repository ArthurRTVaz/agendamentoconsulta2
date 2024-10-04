import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, } from "react-native";

export default function Index(){
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>Meu Perfil</Text>
            <Image style={styles.imglogo} source={require('../../src/fotousuario.png')} />
            
            <Text style={styles.titulo}>Informações Pessoais</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#6B6E71'}}>Joana Magalhães Souza</Text>
            <Text style={styles.textos}>28/05/1990</Text>
            <Text style={styles.textos}>São Paulo - SP</Text>

            <View style={styles.linha}></View>

            <Text style={styles.titulo}>Histórico Médico</Text>
            <Text style={styles.textos}>• Bronquite</Text>
            <Text style={styles.textos}>• Sinusite</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    imglogo: {
        marginBottom: 20,
        width: 100,
        height: 100,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#339CFF',
        marginBottom: 20,
    },
    containerMeio: {
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
    campo: {
        color: '#0B3B60',
        alignSelf: 'flex-start',
        marginLeft: 40,
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        width: 311,
        height: 48,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 24,
    },
    botao: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#0B3B60',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    linha: {
        height: 1,
        backgroundColor: '#ccc',
        width: '100%',
        marginVertical: 10,
    },
    botaoSair: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#90989F',
        padding: 20,
        borderRadius: 25,
        width: '25%',
    },
    textos: {
        color: '#6B6E71',
        fontSize: 18,
    }
})
