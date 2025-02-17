import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Solo Leveling App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030212',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'top',
    color: '#fff',
    paddingTop: 50,
    fontSize: 25,
    fontFamily: 'Poppins-Thin',
  },
});

//#030212