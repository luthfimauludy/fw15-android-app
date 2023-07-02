import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const ChangePassword = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.gap10}>
        <View style={styles.gap10}>
          <Text>Old Password</Text>
          <Input placeholder="Input Old Password" secureTextEntry />
        </View>
        <View style={styles.gap10}>
          <Text>New Password</Text>
          <Input placeholder="Input New Password" secureTextEntry />
        </View>
        <View style={styles.gap10}>
          <Text>Confirm Password</Text>
          <Input placeholder="Input Confirm Password" secureTextEntry />
        </View>
      </View>
      <View>
        <Button>Update</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: 'white',
    gap: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  headTitle: {
    gap: 10,
    marginBottom: 20,
  },
  gap10: {
    gap: 10,
  },
});

export default ChangePassword;
