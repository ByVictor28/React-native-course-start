import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModelScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontSize: 20,
    borderWidth: 10,
  },
});
