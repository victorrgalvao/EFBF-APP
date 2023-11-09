import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, TouchableOpacity, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      setLoading(true); // Inicia o loading
      const response = await fetch('http://192.168.0.10:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData.user);
        // setMostrarFavoritos(user.filmesFavoritos);
        console.log(user);
      } else {
        // Trate erros de autenticação aqui
        console.error('Erro de autenticação');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    } finally {
      
      setLoading(false); // Finaliza o loading
      navigation.navigate('Favoritos', { mostrarFavoritos: user.filmesFavoritos });
    }
  };

  const mostrarFav = () => {
    if (user && user.filmesFavoritos) {
      // Sua lógica para mostrar favoritos
      navigation.navigate('Favoritos', { mostrarFavoritos: user.filmesFavoritos });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome de Usuário:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de usuário"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} color="#7747FF" />
      {loading && <ActivityIndicator style={styles.loading} size="large" color="#7747FF" />}
       <Text style={styles.welcome2}>ou</Text>
      <Button title="Cadastrar-se" onPress={mostrarFav} color="#7747FF" />
      {/* <Button title="Mostrar Favoritos" onPress={mostrarFav} color="#7747FF" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 46,
    backgroundColor: '#131313',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#ffffff', // Cor do texto
  },
  input: {
    backgroundColor:'#D9D9D9',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color: '#7747FF', // Cor do texto
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#ffffff', // Cor do texto
    textAlign:'center'
  },
  welcome2: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginTop: 16,
    color: '#ffffff', // Cor do texto
    textAlign:'center'
  },
  loading: {
    marginVertical: 20,
  },
});
