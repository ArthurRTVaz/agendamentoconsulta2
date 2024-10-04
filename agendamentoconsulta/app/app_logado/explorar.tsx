import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

export default function Index() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.viewInputs}>
                <TextInput style={styles.input} placeholder="Digite a especialidade" placeholderTextColor="#A9A9A9" />
                <TextInput style={styles.input} placeholder="Digite sua localização" placeholderTextColor="#A9A9A9" />
                <Link href="/app_logado/explorar" style={styles.botao}>Buscar</Link>
            </View>

            <Text style={styles.titulo}>Resultado da busca</Text>

            <View style={styles.viewInputs}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario2.png')} />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6B6E71' }}>Dra. Ana Lúcia</Text>
                        <Text style={{ fontSize: 18, color: '#6B6E71' }}>Angiologista</Text>
                    </View>
                </View>
                <Link href="/app_logado/explorar" style={styles.botao}>Agendar consulta</Link>
            </View>

            <View style={styles.viewInputs}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario2.png')} />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6B6E71' }}>Dra. Ana Lúcia</Text>
                        <Text style={{ fontSize: 18, color: '#6B6E71' }}>Angiologista</Text>
                    </View>
                </View>
                <Link href="/app_logado/explorar" style={styles.botao}>Agendar consulta</Link>
            </View>

            <View style={styles.viewInputs}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario2.png')} />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6B6E71' }}>Dra. Ana Lúcia</Text>
                        <Text style={{ fontSize: 18, color: '#6B6E71' }}>Angiologista</Text>
                    </View>
                </View>
                <Link href="/app_logado/explorar" style={styles.botao}>Agendar consulta</Link>
            </View>

            <View style={styles.viewInputs}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario2.png')} />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6B6E71' }}>Dra. Ana Lúcia</Text>
                        <Text style={{ fontSize: 18, color: '#6B6E71' }}>Angiologista</Text>
                    </View>
                </View>
                <Link href="/app_logado/explorar" style={styles.botao}>Agendar consulta</Link>
            </View>

            <View style={styles.viewInputs}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.imglogo} source={require('../../src/fotousuario2.png')} />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6B6E71' }}>Dra. Ana Lúcia</Text>
                        <Text style={{ fontSize: 18, color: '#6B6E71' }}>Angiologista</Text>
                    </View>
                </View>
                <Link href="/app_logado/explorar" style={styles.botao}>Agendar consulta</Link>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        paddingBottom: 20,
    },
    imglogo: {
        marginBottom: 20,
        width: 70,
        height: 70,
        marginRight: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#339CFF',
        marginBottom: 20,
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
        borderRadius: 10,
        width: '100%',
        paddingVertical: 12,
    },
    viewInputs: {
        alignItems: 'flex-start',
        width: '90%',
        padding: 25,
        borderRadius: 8,
        shadowColor: '#6B6E71',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
        marginTop: 25,
    },
});
