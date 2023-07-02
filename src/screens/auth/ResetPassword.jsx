import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import http from '../../helpers/http';
import Alert from '../../components/Alert';

const validationSchema = Yup.object({
  code: Yup.number().required('Code cannot be empty').positive().integer(),
  email: Yup.string()
    .required('Email cannot be empty')
    .email('Email is invalid'),
  password: Yup.string().required('Password cannot be empty'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Password cannot be empty'),
});

const ResetPassword = () => {
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigation = useNavigation();

  const doReset = async values => {
    try {
      setErrorMessage('');
      const body = new URLSearchParams(values).toString();
      const {data} = await http().post('/auth/reset-password', body);
      if (data?.message.includes('success')) {
        setSuccessMessage(data?.message);
        setTimeout(() => navigation.replace('Login'), 3000);
      }
      if (data.results.errors) {
        setErrorMessage(data.results.errors[0].msg);
      }
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        setErrorMessage(message);
      }
    }
  };

  if (successMessage) {
    setTimeout(() => setSuccessMessage(''), 3000);
  }
  if (errorMessage) {
    setTimeout(() => setErrorMessage(''), 3000);
  }

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
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="error">{errorMessage}</Alert>}
      <Formik
        initialValues={{
          code: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={doReset}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.gap10}>
              <Input
                placeholder="Code"
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
                value={values.code}
              />
              {errors.code && touched.code && (
                <Text style={globalStyles.textError}>{errors.code}</Text>
              )}
              <Input
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={globalStyles.textError}>{errors.email}</Text>
              )}
              <Input
                placeholder="New Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={globalStyles.textError}>{errors.password}</Text>
              )}
              <Input
                placeholder="Confirm Password"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={globalStyles.textError}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
            <View>
              <Button onPress={handleSubmit}>Continue</Button>
            </View>
          </>
        )}
      </Formik>
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
