import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function CreateAccount({ navigation }) {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Confirm_Password, setConfirm_Password]=useState('');
  const [FullName, setFullName]=useState('');

  const handleRegister = () => {
    // Perform your registration logic here, e.g., API call
    // For demo purposes, we'll navigate to main app
    if (email && password && Confirm_Password && FullName) {
      if (password === Confirm_Password) {
        navigation.navigate('MainTabs');
      } else {
        Alert.alert('Error', 'Passwords do not match');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };
  return (
    <View style={styles.container}>
      <Image
          source={require('../../assets/1.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.inputView}>
          <Text style={styles.Text}>Full Name</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Full Name"
            placeholderTextColor="#ccc"
            value={FullName}
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.Text}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder="your email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputView}>
        <Text style={styles.Text}>Password</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputView}>
        <Text style={styles.Text}>Confirm Password</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={Confirm_Password}
            onChangeText={setConfirm_Password}
          />
        </View>
        <TouchableOpacity
        style={styles.createaccount}
        onPress={handleRegister}
      >
        <Text style={styles.createAccountText}>Register</Text>
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
      Text:{
        paddingBottom:10,
      },
      createaccount:{
        alignItems:'center',
        width:'100%',
        padding:15,
        marginTop:30,
      },
      createAccountText:{
        textAlign:'center',
        color: 'white',
        padding: 10,
        width:'80%',
        borderRadius:5,
        backgroundColor: 'black',
      },
});
