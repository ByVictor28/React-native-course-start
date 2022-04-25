import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {FloatingButton} from '../components/FloatingButton';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter : {counter}</Text>
      {/* <Button title="Click" onPress={() => setCounter(counter + 1)} /> */}

      {/* <TouchableOpacity
        onPress={() => setCounter(counter - 1)}
        style={styles.buttonLocationL}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>-1</Text>
        </View>
      </TouchableOpacity> */}

      <FloatingButton title="+1" onPress={() => setCounter(counter + 1)} />
      <FloatingButton
        title="-1"
        onPress={() => setCounter(counter - 1)}
        position="bl"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    backgroundColor: 'red',
  },
  // buttonLocationR: {
  //   position: 'absolute',
  //   bottom: 2,
  //   right: 2,
  // },
  // buttonLocationL: {
  //   position: 'absolute',
  //   bottom: 2,
  //   left: 2,
  // },
  // button: {
  //   backgroundColor: '#5852d6',
  //   width: 60,
  //   height: 60,
  //   borderRadius: 100,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   color: 'white',
  //   fontSize: 25,
  //   fontWeight: 'bold',
  // },
});
