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
