// cadastro2.tsx
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from 'react';

export default function Cadastro2() {
    const params = useLocalSearchParams();
    const nome = params.nome?.toString() || "";
    const email = params.email?.toString() || "";
    const senha = params.senha?.toString() || "";

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [telefone, setTelefone] = useState("");

    const router = useRouter();

    // Adicione um console.log para verificar os valores recebidos
    console.log("Dados recebidos em cadastro2:", { nome, email, senha });

    const handleAvancar = () => {
        if (!cep || !endereco || !numero || !telefone) {
            Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Adicione um console.log para verificar os valores antes de passar para a próxima tela
        console.log("Dados do cadastro2:", { nome, email, senha, cep, endereco, numero, complemento, telefone });

        router.push({
            pathname: '/cadastro3',
            params: { 
                nome: nome.toString(), 
                email: email.toString(), 
                senha: senha.toString(), 
                cep: cep.toString(), 
                endereco: endereco.toString(), 
                numero: numero.toString(), 
                complemento: complemento.toString(), 
                telefone: telefone.toString() 
            },
        });
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imglogo} source={require('../src/logo.png')} />
            <Text style={styles.titulo}>Agora mais alguns dados sobre você:</Text>
            <View style={styles.containerMeio}>
                <Text style={styles.campo}>CEP</Text>
                <TextInput style={styles.input} placeholder="Insira seu CEP" placeholderTextColor="#A9A9A9" onChangeText={setCep} value={cep} />

                <Text style={styles.campo}>Endereço</Text>
                <TextInput style={styles.input} placeholder="Insira seu endereço" placeholderTextColor="#A9A9A9" onChangeText={setEndereco} value={endereco} />

                <Text style={styles.campo}>Número</Text>
                <TextInput style={styles.input} placeholder="Insira seu número" placeholderTextColor="#A9A9A9" onChangeText={setNumero} value={numero} />

                <Text style={styles.campo}>Complemento</Text>
                <TextInput style={styles.input} placeholder="Insira seu complemento" placeholderTextColor="#A9A9A9" onChangeText={setComplemento} value={complemento} />

                <Text style={styles.campo}>Telefone</Text>
                <TextInput style={styles.input} placeholder="(00)00000-0000" placeholderTextColor="#A9A9A9" onChangeText={setTelefone} value={telefone} />

                <Link href="/cadastro1" style={styles.botaoVoltar}>Voltar</Link>
                <TouchableOpacity style={styles.botao} onPress={handleAvancar}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    imglogo: {
        marginTop: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6B6E71',
        marginBottom: 20,
        textAlign: 'center'
    },
    containerMeio: {
        width: '100%',
        alignItems: 'center',
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
        backgroundColor: '#E7EBEF',
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
        height: '9%',
    },
    botaoVoltar: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
        backgroundColor: '#90989F',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: '9%',
    },
})