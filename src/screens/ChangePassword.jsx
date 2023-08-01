import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import http from '../helpers/http';
import {Formik} from 'formik';
import Alert from '../components/Alert';
import globalStyles from '../assets/globalStyles';

const validationSchema = Yup.object({
  oldPassword: Yup.string().required('Old password cannot be empty'),
  newPassword: Yup.string().required('New password cannot be empty'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Password must match')
    .required('Confirm password cannot be empty'),
});

const ChangePassword = ({navigation}) => {
  const token = useSelector(state => state.auth.token);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const doChangePassword = async values => {
    const {oldPassword, newPassword, confirmPassword} = values;
    const form = new URLSearchParams({
      oldPassword,
      newPassword,
      confirmPassword,
    }).toString();
    try {
      const {data} = await http(token).patch('/change-password', form);
      if (data?.message) {
        setSuccessMessage(data?.message);
        setTimeout(() => navigation.navigate('Profile'), 2000);
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

  const handlePressEvent = () => {
    navigation.navigate('Profile');
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={globalStyles.sectionHeader}>
        <View style={globalStyles.backArrow}>
          <TouchableOpacity onPress={handlePressEvent}>
            <Feather name="arrow-left" size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={globalStyles.textHeader}>Change Password</Text>
        </View>
      </View>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={doChangePassword}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formInput}>
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
            {errorMessage && <Alert variant="error">{errorMessage}</Alert>}
            <View style={styles.gap10}>
              <View style={styles.gap10}>
                <Text>Old Password</Text>
                <Input
                  onChangeText={handleChange('oldPassword')}
                  onBlur={handleBlur('oldPassword')}
                  value={values.oldPassword}
                  placeholder="Input Old Password"
                  secureTextEntry
                />
                {errors.oldPassword && touched.oldPassword && (
                  <Text style={globalStyles.textError}>
                    {errors.oldPassword}
                  </Text>
                )}
              </View>
              <View style={styles.gap10}>
                <Text>New Password</Text>
                <Input
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  value={values.newPassword}
                  placeholder="Input New Password"
                  secureTextEntry
                />
                {errors.newPassword && touched.newPassword && (
                  <Text style={globalStyles.textError}>
                    {errors.newPassword}
                  </Text>
                )}
              </View>
              <View style={styles.gap10}>
                <Text>Confirm Password</Text>
                <Input
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder="Input Confirm Password"
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={globalStyles.textError}>
                    {errors.confirmPassword}
                  </Text>
                )}
              </View>
            </View>
            <View>
              <Button
                disabled={
                  !touched.oldPassword &&
                  !touched.newPassword &&
                  !touched.confirmPassword
                }
                onPress={handleSubmit}>
                Update
              </Button>
            </View>
          </View>
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
    paddingVertical: 15,
  },
  headTitle: {
    gap: 10,
    marginBottom: 20,
  },
  formInput: {
    gap: 30,
  },
  gap10: {
    gap: 10,
  },
});

export default ChangePassword;
