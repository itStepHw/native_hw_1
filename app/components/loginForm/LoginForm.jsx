import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export const LoginForm = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [submittedName, setSubmittedName] = useState('');
    const [submittedPhone, setSubmittedPhone] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');

    const handleLogin = () => {
        setSubmittedName(name);
        setSubmittedPhone(phone);
        setSubmittedEmail(email);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.textStyle}>Авторизация</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Имя"
                    placeholderTextColor="white"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                {/* Поле ввода телефона */}
                <TextInput
                    style={styles.input}
                    placeholder="Телефон"
                    placeholderTextColor="white"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="white"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                {/* Кнопка */}
                <Button
                    color="#7C7C7CFF"
                    title="Авторизоваться"
                    onPress={handleLogin}
                />
            </View>

            {submittedName || submittedPhone || submittedEmail ? (
                <View style={styles.outputContainer}>
                    <Text style={styles.outputText}>Введённые данные:</Text>
                    <Text style={styles.outputText}>Имя: {submittedName}</Text>
                    <Text style={styles.outputText}>Телефон: {submittedPhone}</Text>
                    <Text style={styles.outputText}>Email: {submittedEmail}</Text>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: '#7c7c7c',
        borderRadius: 5,
        color: 'white',
    },
    inputContainer: {
        backgroundColor: '#c8c8c8',
        borderRadius: 5,
        gap: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: 10,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    outputContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    outputText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
});
