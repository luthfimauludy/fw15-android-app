import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Link} from '@react-navigation/native';

const ForgotPassword = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headTitle}>
        <View>
          <Text style={globalStyles.title}>Forgot Password</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            You’ll get mail soon on your email{' '}
            <Link to="/ResetPassword" style={globalStyles.link}>
              Reset
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.gap10}>
        <Input placeholder="Email" keyboardType="email-address" />
      </View>
      <View>
        <Button>Send</Button>
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

export default ForgotPassword;
