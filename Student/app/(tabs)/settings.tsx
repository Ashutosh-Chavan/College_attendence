import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    if (username === 'testuser' && password === 'password123') {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#FCE38A', dark: '#e7e7b4' }}
    headerImage={
      <View style={styles.headerImagesContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
        <Image
          source={require('@/assets/images/profile.png')} // Add your profile image here
          style={styles.profileImage}
        />
      </View>
      }>
      <View style={styles.container}>
        {/* Add the image above the title */}
        <Image
          source={require('@/assets/images/logo2.jpg')}
          style={styles.studentLogo}
        />
        <Text style={styles.title}>Student Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Admission Number"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#f9f9f9',
  },
  headerImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  reactLogo: {
    height: 40,
    width: 190,
    marginTop:40,
  },
  profileImage: {
    height: 45,
    width: 45,
    marginTop:40,
    borderRadius: 50, // Make the image circular
    marginLeft: 130, // Add space between logo and profile image
  },
  studentLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16, 
    marginTop: 120
  },
});
