import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <Text style={styles.signupText}>Login</Text>
      <Text style={styles.baseText}>Hi, Welcome back to Urticket!</Text>
      <View style={styles.form}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Email"
          />
        </SafeAreaView>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Password"
          />
        </SafeAreaView>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.signinWithText}>or sign in with</Text>
      <View style={styles.flexRow}>
        <View style={styles.google}>
          <Text>G</Text>
        </View>
        <View style={styles.google}>
          <Text>F</Text>
        </View>
        <View style={styles.google}>
          <Text>Touch ID</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  signupText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  baseText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 36,
  },
  forgotText: {
    color: '#61764b',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    lineHeight: 36,
    marginBottom: 20,
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#C1C5D0',
    borderRadius: 10,
    padding: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 40,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#61764b',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  signinWithText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  flexRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  google: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#61764b',
  },
  form: {
    marginTop: 20,
  },
});

export default Login;
