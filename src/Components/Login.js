import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform your login logic here, e.g., API call
    // For demo purposes, we'll just show an alert
    Alert.alert('Login', `Email: ${email}, Password: ${password}`);
  };
    return (
      <View style={styles.container} >
        <Image
          source={require('../../assets/1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.inputView}>
          <Text style={styles.Text}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder="your email"
            placeholderTextColor="#dfe1e5"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputView}>
        <Text style={styles.Text}>Password</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#dfe1e5"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.cartBtn}
        onPress={() => navigation.navigate('Forget_password')}
      >
        <Text style={styles.cartBtnText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createaccount}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0EBED',
        alignItems: 'center',
      },
      logo: {
        marginTop: '10%',
        width: 100,
        height: 100,
        borderRadius: 75,
      },
      title: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#fb5b5a',
        marginBottom: 40,
      },
      inputView: {
        borderRadius: 5,
        justifyContent: 'center',
        padding: 15,
        width: '80%',
      },
      inputText:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
      },
      loginBtn: {
        alignItems:'center',
        width:'100%',
        padding:15,
      },
      loginText: {
        textAlign:'center',
        color: 'white',
        padding: 10,
        width:'80%',
        borderRadius:5,
        backgroundColor: 'black',
      },
      Text:{
        paddingBottom:10,
      },
      createaccount:{
        alignItems:'center',
        width:'100%',
        padding:15,
        marginTop:100,
      },
      createAccountText:{
        textAlign:'center',
        color: 'black',
        padding: 10,
        width:'80%',
        borderRadius:5,
        backgroundColor: 'white',
      },
});
