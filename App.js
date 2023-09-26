import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
export default function App() {
  const [name, setName] = useState("");
  const [changed, setChanged] = useState("");
  const handleInput = (TextInput)=>{
    setName(TextInput);
    console.log(name);
    
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput onChangeText={handleInput} placeholder='Pls Enter Your Name' ></TextInput>
      <Button onPress={()=>{setChanged(name)}} title='Click me'></Button>
      <Text>Hi {changed}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
