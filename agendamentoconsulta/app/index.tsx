import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { useUsuariosDatabase } from '../database/useUsuariosDatabase';
import { useRouter } from 'expo-router';

export default function Index() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { login } = useUsuariosDatabase();
    const router = useRouter();

    async function handleLogin() {
        try {
            const usuario = await login(email, senha);
            Alert.alert("Login bem-sucedido");
            router.replace("/app_logado");
        } catch (error) {
            Alert.alert("Erro", error.message);
        }   
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imglogo} source={require('../src/logo.png')} />
            <Text style={styles.titulo}>Faça login em sua conta</Text>
            <View style={styles.containerMeio}>
                <Text style={styles.campo}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu endereço de email"
                    placeholderTextColor="#A9A9A9"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Text style={styles.campo}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira sua senha"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={true}
                    onChangeText={text => setSenha(text)}
                    value={senha}
                />
                <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Entrar</Text>
                </TouchableOpacity>
                <Text style={{ color: '#0B3B60', textDecorationLine: 'underline', fontSize: 16 }}>Esqueceu sua senha?</Text>
            </View>
            <View style={styles.linha}>
                <Text>Ainda não tem conta? </Text>
                <Link href="/cadastro1" style={{ color: '#339CFF' }}>Faça seu cadastro!</Link>
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
        marginBottom: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6B6E71',
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
})