import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headTitle}>
        <View>
          <Text style={globalStyles.title}>Login</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            Hi, Welcome back to Urticket!
          </Text>
        </View>
      </View>
      <View style={styles.gap10}>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input
          placeholder="Password"
          keyboardType="number-pad"
          secureTextEntry
        />
      </View>
      <View style={styles.alignRight}>
        <Link to="/ForgotPassword" style={globalStyles.link}>
          Forgot Password?
        </Link>
      </View>
      <View>
        <Button>Login</Button>
      </View>
      <View style={styles.gap10}>
        <Text style={styles.signinWithText}>or sign in with</Text>
        <View style={styles.flexRow}>
          <View style={styles.loginWith}>
            <Icon name="google" size={20} />
          </View>
          <View style={styles.loginWith}>
            <Icon name="facebook" size={20} />
          </View>
        </View>
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
  alignRight: {
    alignItems: 'flex-end',
  },
  signinWithText: {
    textAlign: 'center',
    marginTop: 20,
  },
  flexRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  loginWith: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#61764b',
  },
});

export default Login;
