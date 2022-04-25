import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaVerde}></View>
    </View>
  );
};
// start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    flex: 1,
  },
  cajaVerde: {
    backgroundColor: '#28C4D9',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
});
