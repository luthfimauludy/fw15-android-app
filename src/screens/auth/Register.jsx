import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {asyncRegister} from '../../redux/actions/auth';
import Alert from '../../components/Alert';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {clearMessage} from '../../redux/reducers/auth';
import {useNavigation} from '@react-navigation/native';
import Checkbox from '../../components/CheckBox';
import SplashScreen from 'react-native-splash-screen';

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'Name length is not valid, at least 3 characters')
    .required('Full Name cannot be empty'),
  email: Yup.string()
    .email('Email is invalid')
    .required('Email cannot be empty'),
  password: Yup.string()
    .min(
      8,
      'Password must be strong, at least 8 characters and must include capital letters, numbers and symbols',
    )
    .required('Password cannot be empty'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Password cannot be empty'),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const errorMessage = useSelector(state => state.auth.errorMessage);
  const successMessage = useSelector(state => state.auth.successMessage);

  const doRegister = values => {
    dispatch(asyncRegister(values));
  };

  if (successMessage) {
    setTimeout(() => {
      dispatch(clearMessage());
      navigation.navigate('Login');
    }, 3000);
  }
  if (errorMessage) {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  }

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
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
      {errorMessage && <Alert variant="error">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={doRegister}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.formGap}>
              <View>
                <Input
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  placeholder="Full Name"
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName && (
                  <Text style={globalStyles.textError}>{errors.fullName}</Text>
                )}
              </View>
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
              <View>
                <Input
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirm Password"
                  secureTextEntry
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={globalStyles.textError}>
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.checkboxContainer}>
              <Checkbox />
              <Text style={styles.checkboxLabel}>
                Accept terms and condition
              </Text>
            </View>
            <View>
              <Button
                disabled={
                  !touched.fullName &&
                  !touched.email &&
                  !touched.password &&
                  !touched.confirmPassword
                }
                onPress={handleSubmit}>
                Sign Up
              </Button>
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

export default Register;
