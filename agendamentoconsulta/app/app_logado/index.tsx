import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

export default function Index() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.viewLogo}>
                <Image style={styles.imglogo} source={require('../../src/logo1.png')} />
                <Text style={styles.titulo}>Boas Vindas!</Text>
            </View>

            <View style={styles.viewInputs}>
                <TextInput style={styles.input} placeholder="Digite a especialidade" placeholderTextColor="#A9A9A9" />
                <TextInput style={styles.input} placeholder="Digite sua localização" placeholderTextColor="#A9A9A9" />
                <Link href="/app_logado/" style={styles.botao}>Buscar</Link>
            </View>

            <View style={styles.depoimentosContainer}>
                <Text style={styles.tituloDepoimentos}>Depoimentos</Text>
                <Text style={styles.depoimentoText}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </Text>
                <Text style={styles.depoimentoAutor}>Júlio, 40 anos, São Paulo/SP.</Text>
                <View style={styles.linha}></View>
                
                <Text style={styles.depoimentoText}>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </Text>
                <Text style={styles.depoimentoAutor}>Júlio, 40 anos, São Paulo/SP.</Text>
                <View style={styles.linha}></View>
                
                <Text style={styles.depoimentoText}>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.
                </Text>
                <Text style={styles.depoimentoAutor}>Júlio, 40 anos, São Paulo/SP.</Text>
                <View style={styles.linha}></View>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        padding: 20,
    },
    viewLogo: {
        alignSelf: 'flex-start',
        marginBottom: 20,
        marginTop: -40,
    },
    viewInputs: {
        alignItems: 'center',
        width: '100%',
        padding: 25,
        borderRadius: 8,
        shadowColor: '#E7EBEF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
        marginBottom: 50,
    },
    imglogo: {
        marginBottom: 10,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0B3B60',
        marginBottom: 20,
    },
    input: {
        width: 311,
        height: 48,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 24,
    },
    botao: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#0B3B60',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        marginTop: 10,
    },
    depoimentosContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    tituloDepoimentos: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0B3B60',
        marginBottom: 20,
        textAlign: 'center',
    },
    depoimentoText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    depoimentoAutor: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    linha: {
        height: 1,
        backgroundColor: '#ccc',
        width: '100%',
        marginVertical: 10,
    },
});
