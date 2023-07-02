import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Alert = ({variant, children}) => {
  if (variant === 'error') {
    return (
      <View style={styles.errorWrapper}>
        <Text style={styles.errorText}>{children}</Text>
      </View>
    );
  }
  if (variant === 'success') {
    return (
      <View style={styles.successWrapper}>
        <Text style={styles.successText}>{children}</Text>
      </View>
    );
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    backgroundColor: '#FF9191',
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 25,
    borderRadius: 15,
    height: 45,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
  },
  successWrapper: {
    backgroundColor: '#2edb6b',
    borderWidth: 1,
    borderColor: 'green',
    paddingHorizontal: 25,
    borderRadius: 15,
    height: 45,
    justifyContent: 'center',
  },
  successText: {
    color: 'green',
  },
  wrapper: {
    backgroundColor: '#BFBFBF',
    borderWidth: 1,
    borderColor: '#545454',
    padding: 5,
  },
  text: {
    color: '#545454',
  },
});

export default Alert;
