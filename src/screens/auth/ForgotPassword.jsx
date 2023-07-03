import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/globalStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import http from '../../helpers/http';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Alert from '../../components/Alert';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email cannot be empty')
    .email('Email is invalid'),
});

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const navigation = useNavigation();

  const doForgot = async values => {
    try {
      setErrorMessage('');
      const body = new URLSearchParams(values).toString();
      const {data} = await http().post('/auth/forgot-password', body);
      if (data?.message.includes('success')) {
        setSuccessMessage(data?.message);
        setTimeout(() => navigation.replace('ResetPassword'), 3000);
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
    <ScrollView style={styles.wrapper}>
      <View style={styles.headTitle}>
        <View>
          <Text style={globalStyles.title}>Forgot Password</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            You’ll get mail soon on your email
          </Text>
        </View>
      </View>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="error">{errorMessage}</Alert>}
      <Formik
        initialValues={{email: ''}}
        validationSchema={validationSchema}
        onSubmit={doForgot}>
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
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={globalStyles.textError}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.buttonContain}>
              <Button onPress={handleSubmit}>Send</Button>
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
  buttonContain: {
    paddingTop: 20,
  },
});

export default ForgotPassword;
