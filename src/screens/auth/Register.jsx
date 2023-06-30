import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headTitle}>
        <View>
          <Text style={globalStyles.title}>Sign Up</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            Already have an account?{' '}
            <Link to="/Login" style={globalStyles.link}>
              Log In
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.formGap}>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />
      </View>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Accept terms and condition</Text>
      </View>
      <View>
        <Button>Sign Up</Button>
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
  formGap: {
    gap: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkboxLabel: {
    margin: 8,
  },
  form: {
    marginTop: 20,
  },
});

export default Signup;
