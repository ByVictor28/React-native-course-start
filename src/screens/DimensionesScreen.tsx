import React from 'react';
import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');
export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.5,
          }}></View>
        <View style={styles.cajaNaranja}></View>
      </View>
      <Text style={styles.dimentions}>
        W: {width} , H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 200,
    width: '100%',
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  dimentions: {
    fontSize: 20,
    textAlign: 'center',
  },
});
