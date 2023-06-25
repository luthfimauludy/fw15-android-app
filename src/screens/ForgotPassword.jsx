import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';

const ForgotPassword = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headText}>Forgot Password</Text>
      <Text style={styles.baseText}>You’ll get mail soon on your email</Text>
      <View style={styles.form}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Email"
          />
        </SafeAreaView>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  headText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: 1,
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
    marginTop: 10,
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
  form: {
    marginTop: 20,
  },
});

export default ForgotPassword;
