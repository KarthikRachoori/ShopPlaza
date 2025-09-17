import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, Linking, Button } from 'react-native';

export default function Forget_password({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Perform your login logic here, e.g., API call
        // For demo purposes, we'll just show an alert
        Alert.alert('Login', `Email: ${email}, Password: ${password}`);
    };
    return (
        <View style={styles.container} >
            <Image source={require('../../assets/1.png')}
                style={styles.logo}
                resizeMode="contain" />
            <Text style={styles.center}>Please enter your email you will receive a link to reset your password</Text>
            <View style={styles.Block}>
                <Text style={styles.Text}>Email</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#ccc"
                    value={email}
                    onChangeText={setEmail}
                />
                <View>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.resetButton]}
                            onPress={() => {/* Handle reset password */ }}
                        >
                            <Text style={styles.buttonText}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

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
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        marginTop: '10%',
        width: 100,
        height: 100,
        borderRadius: 75,
    },
    block: {
        backgroundColor: 'white',
    },
    center: {
        textAlign: 'center',
        paddingTop: 20,
    },
    Block: {
        margin: 10,
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
    },
    inputText: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 2, // Sets border width for all sides
        borderColor: '#dfe1e5',
    },
    Text: {
        paddingBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      },
      button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
      },
      cancelButton: {
        backgroundColor: '#ccc',
      },
      resetButton: {
        backgroundColor: 'red',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
});
