import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import axios from 'axios';

// Import Screens
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreenLink" component={SplashScreen} />
        <Stack.Screen name="MainScreenLink" component={MainScreen} />
        <Stack.Screen name="MurabbiMainMenuLink" component={MurabbiMainMenu} />
        <Stack.Screen name="TestScreenLink" component={MyTestingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// This component is a complete screen
// First Screen
function MainScreen({ navigation }){
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Button
        title='مربی سکرین'
        onPress={() => navigation.navigate('MurabbiMainMenuLink')}
      />
    </View>
  );
}

// This component is a complete screen
function MurabbiMainMenu({ navigation }){
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.my_1}>
        <Button
          title='پہلی آپشن'
          onPress={() => navigation.navigate('TestScreenLink')}
        />
      </View>
      <View style={styles.my_1}>
        <Button
          title='دوسری آپشن'
          style={{ borderRadius: 200 }}
          onPress={() => navigation.navigate('TestScreenLink')}
        />
      </View>
      <View style={styles.my_1}>
        <Button
          title='تیسری آپشن'
          onPress={() => navigation.navigate('TestScreenLink')}
        />
      </View>
      <View style={styles.my_1}>
        <Button
          title="test screen"
          onPress={() => navigation.navigate('TestScreenLink')}
        />
      </View>
      <View style={styles.my_1}>
        <Button title="Test API" onPress={fetchData} />
      </View>
    </View>
  );
}

// This component is a complete screen
// This is a test screen - to test and practice code
function MyTestingScreen({ navigation }){
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Test Screen</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
      />

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </View>
  );
}

function fetchData(){
  axios.get(api_url)
    .then(response => {
      Alert.alert('Data', JSON.stringify(response.data));
      // Alert.alert('Data', 'Hello1');
      // Alert.alert('Data', 'Hello2');
      
      // setData(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      // setLoading(false);
    });

  // Alert.alert('Error', 'Failed to fetch data');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  my_1: {
    marginTop: 5,
    marginBottom: 5
  },
});
