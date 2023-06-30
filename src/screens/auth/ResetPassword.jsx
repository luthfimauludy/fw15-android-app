import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ResetPassword = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headTitle}>
        <View>
          <Text style={globalStyles.title}>Reset Password</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            You have to enter your email and new password
          </Text>
        </View>
      </View>
      <View style={styles.gap10}>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="New Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />
      </View>
      <View>
        <Button>Continue</Button>
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
  },
  headTitle: {
    gap: 10,
    marginBottom: 20,
  },
  gap10: {
    gap: 10,
  },
});

export default ResetPassword;
