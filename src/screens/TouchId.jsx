import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TouchId = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headText}>Touch ID</Text>
      <Text style={styles.innerText}>
        Authenticate using app’s Touch ID instead of tentering your password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    gap: 30,
    paddingTop: 100,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: 1,
  },
  innerText: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    paddingHorizontal: 40,
    textAlign: 'center',
  },
});

export default TouchId;
