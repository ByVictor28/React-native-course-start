import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const FloatingButton = ({title, onPress, position = 'br'}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.buttonLocation,
          position === 'bl' ? styles.buttonLocationL : styles.buttonLocationR,
        ]}
        onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.buttonLocation,
          position === 'bl' ? styles.buttonLocationL : styles.buttonLocationR,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('black', false, 30)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  buttonLocation: {
    position: 'absolute',
    bottom: 25,
    backgroundColor: 'red',
    borderRadius: 29,
  },
  buttonLocationR: {
    right: 25,
  },
  buttonLocationL: {
    left: 25,
  },
  button: {
    backgroundColor: '#5852d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
