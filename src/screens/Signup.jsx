import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <Text style={styles.signupText}>Sign Up</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.baseText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.innerText}> Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Full Name"
          />
        </SafeAreaView>
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
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Confirm Password"
          />
        </SafeAreaView>
      </View>
      <View style={styles.checkboxContainer}>
        {/* <CheckBox style={styles.checkbox} /> */}
        <Text style={styles.label}>Accept terms and condition</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  innerText: {
    color: '#61764b',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  input: {
    height: 55,
    margin: 10,
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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  form: {
    marginTop: 20,
  },
});

export default Signup;
