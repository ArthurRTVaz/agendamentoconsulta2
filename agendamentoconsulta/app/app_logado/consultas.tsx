import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

export default function Index() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Minhas consultas</Text>
            <Link href="/app_logado/consultas" style={styles.botao1}>Agendar outra consulta</Link>
            <Text style={styles.subtitulo}>Próximas consultas</Text>

            <View style={styles.viewInputs}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario2.png')} />
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6B6E71'}}>Dra. Ana Lúcia</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>Angiologista</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>01/02/2022</Text>
                    </View>
                </View>
                <Link href="/app_logado/consultas" style={styles.botao}>Cancelar</Link>
            </View>

            <View style={styles.linha}></View>
            <Text style={styles.subtitulo}>Consultas passadas</Text>

            <View style={styles.viewInputs1}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario2.png')} />
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6B6E71'}}>Dra. Ana Lúcia</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>Angiologista</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>01/02/2022</Text>
                    </View>
                </View>
                <Link href="/app_logado/consultas" style={styles.botao}>Cancelar</Link>
            </View>

            <View style={styles.viewInputs1}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario3.png')} />
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6B6E71'}}>Dr. Paulo Matos</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>Otorrinolaringologista</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>09/08/2022</Text>
                    </View>
                </View>
                <Link href="/app_logado/consultas" style={styles.botao}>Cancelar</Link>
            </View>

            <View style={styles.viewInputs1}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario4.png')} />
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6B6E71'}}>Dra. Mariana Luz</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>Mastologista</Text>
                        <Text style={{fontSize: 18, color: '#6B6E71'}}>07/10/2022</Text>
                    </View>
                </View>
                <Link href="/app_logado/consultas" style={styles.botao}>Cancelar</Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        paddingVertical: 20,
    },
    imglogo: {
        marginBottom: 20,
        width: 70,
        height: 70,
        marginRight: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#339CFF',
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#339CFF',
        marginBottom: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: 20,
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
        color: 'white',
        backgroundColor: '#0B3B60',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        paddingVertical: 12,
    },
    botao1: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0B3B60',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        paddingVertical: 12,
        marginBottom: 15,
    },
    linha: {
        height: 1,
        backgroundColor: '#ccc',
        width: '100%',
        marginVertical: 10,
    },
    viewInputs: {
        alignItems: 'left',
        width: '90%',
        padding: 25,
        borderRadius: 8,
        shadowColor: '#6B6E71',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
    },
    viewInputs1: {
        alignItems: 'left',
        width: '90%',
        padding: 25,
        borderRadius: 8,
        shadowColor: '#6B6E71',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
        backgroundColor: '#C2E1FF',
    },
});
