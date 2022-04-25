import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>caja 1</Text>
      <Text style={styles.caja2}>caja 2</Text>
      <Text style={styles.caja3}>caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25c4d9',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  caja1: {
    backgroundColor: '#5856d6',
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    backgroundColor: '#f0a23b',
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    backgroundColor: 'green',
    borderColor: 'white',
    fontSize: 30,
  },
});
