// cadastro3.tsx
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from 'react';
import { useUsuariosDatabase } from '../database/useUsuariosDatabase';

export default function Cadastro3() {
    const params = useLocalSearchParams();
    const nome = params.nome?.toString() || "";
    const email = params.email?.toString() || "";
    const senha = params.senha?.toString() || "";
    const cep = params.cep?.toString() || "";
    const endereco = params.endereco?.toString() || "";
    const numero = params.numero?.toString() || "";
    const complemento = params.complemento?.toString() || "";
    const telefone = params.telefone?.toString() || "";

    // Adicione um console.log para verificar os valores recebidos
    console.log("Dados recebidos em cadastro3:", { nome, email, senha, cep, endereco, numero, complemento, telefone });

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const options = ['Amil', 'Biosaúde', 'Biovida', 'Bradesco', 'Sulamerica', 'Unimed', 'Outros', 'Não tenho Plano'];
    const { inserir } = useUsuariosDatabase();
    const router = useRouter();

    const handleCadastro = async () => {
        if (!selectedOption) {
            Alert.alert("Erro", "Por favor, selecione um plano de saúde.");
            return;
        }

        try {
            // Adicione um console.log para verificar os valores antes de inserir no banco de dados
            console.log("Dados para inserção:", { email, senha, nome, cep, endereco, numero, complemento, telefone, selectedOption });

            await inserir(email, senha, nome, cep, endereco, numero, complemento, telefone, selectedOption);
            Alert.alert("Cadastro", "Usuário cadastrado com sucesso!", [
                { text: "OK", onPress: () => router.replace("/") }
            ]);
        } catch (error) {
            Alert.alert("Erro", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imglogo} source={require('../src/logo.png')} />
            <Text style={styles.titulo}>Para finalizar, qual seu plano de saúde?</Text>
            <View style={styles.containerMeio}>
                <Text style={{ fontSize: 18, color: '#0B3B60', fontWeight: 'bold' }}>Selecione o plano:</Text>
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.optionContainer}
                        onPress={() => setSelectedOption(option)}
                    >
                        <View style={styles.checkboxContainer}>
                            {selectedOption === option && <View style={styles.selectedCheckbox} />}
                        </View>
                        <Text style={styles.checkboxText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
                <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Cadastrar</Text>
            </TouchableOpacity>
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
        marginLeft: 100,
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
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxContainer: {
        height: 25,
        width: 25,
        borderWidth: 2,
        borderColor: '#0B3B60',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedCheckbox: {
        height: 12,
        width: 12,
        backgroundColor: '#0B3B60',
    },
    checkboxText: {
        fontSize: 18,
        color: '#0B3B60',
    },
})