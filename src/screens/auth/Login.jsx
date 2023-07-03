import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {asyncLogin} from '../../redux/actions/auth';
import Alert from '../../components/Alert';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {clearMessage} from '../../redux/reducers/auth';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid')
    .required('Email cannot be empty'),
  password: Yup.string().required('Password cannot be empty'),
});

const Login = () => {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const doLogin = values => {
    dispatch(asyncLogin(values));
  };

  if (errorMessage) {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.headTitle}>
        <View>
          <Text style={globalStyles.title}>Login</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            Hi, Welcome back to Urticket!{' '}
            <Link to="/Register" style={globalStyles.link}>
              Register Now
            </Link>
          </Text>
        </View>
      </View>
      {errorMessage && <Alert variant="error">{errorMessage}</Alert>}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={doLogin}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.gap10}>
              <View>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email"
                  keyboardType="email-address"
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={globalStyles.textError}>{errors.email}</Text>
                )}
              </View>
              <View>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  secureTextEntry
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text style={globalStyles.textError}>{errors.password}</Text>
                )}
              </View>
            </View>
            <View style={styles.alignRight}>
              <Link to="/ForgotPassword" style={globalStyles.link}>
                Forgot Password?
              </Link>
            </View>
            <View style={styles.buttonContain}>
              <Button
                disabled={!touched.email && !touched.password}
                onPress={handleSubmit}>
                Login
              </Button>
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
          </>
        )}
      </Formik>
    </ScrollView>
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
  buttonContain: {
    paddingTop: 20,
  },
});

export default Login;
