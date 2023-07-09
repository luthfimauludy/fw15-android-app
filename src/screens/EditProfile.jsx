import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import {RadioButton} from 'react-native-paper';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import http from '../helpers/http';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

const picture = require('../assets/img/default-picture.jpg');

const EditProfile = () => {
  const [editFullName, setEditFullName] = React.useState(false);
  const [editEmail, setEditEmail] = React.useState(false);
  const [gender, setGender] = React.useState('0');
  const [editPhoneNumber, setEditPhoneNumber] = React.useState(false);
  const [editProfession, setEditProfession] = React.useState(false);
  const [editNasionality, setEditNasionality] = React.useState(false);
  const [editBirthDate, setEditBirthDate] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);
  const [professionValue, setProfessionValue] = React.useState(null);
  const [nasionalityValue, setNasionalityValue] = React.useState(null);
  const token = useSelector(state => state.auth.token);
  const [picture, setPicture] = React.useState(null);
  const [profile, setProfile] = React.useState({});
  const [successMessage, setSuccessMessage] = React.useState('');
  const [profession, setProfession] = React.useState([
    {label: 'Web Developer', value: 'webdeveloper'},
    {label: 'Architect', value: 'architect'},
    {label: 'Accountant', value: 'accountant'},
    {label: 'Chef', value: 'chef'},
  ]);
  const [nasionality, setNasionality] = React.useState([
    {label: 'Indonesia', value: 'indonesia'},
    {label: 'USA', value: 'usa'},
    {label: 'UK', value: 'uk'},
    {label: 'Singapore', value: 'singapore'},
  ]);

  React.useEffect(() => {
    async function getProfileUser() {
      try {
        const {data} = await http(token).get('/profile');
        setProfile(data.results);
        console(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getProfileUser();
  }, [token]);

  const handleRadioPress = value => {
    setGender(value);
  };

  const doEditProfile = async values => {
    console.log(
      values.fullName,
      values.email,
      values.phoneNumber,
      professionValue,
      nasionalityValue,
      picture,
    );
    try {
      const form = new FormData();
      Object.keys(values).forEach(key => {
        if (values[key]) {
          if (key === 'birthDate') {
            form.append(key, moment(values[key]).format('YYYY/MM/DD'));
          } else {
            form.append(key, values[key]);
          }
        }
      });
      form.append('fullName', values.fullName);
      form.append('email', values.email);
      form.append('phoneNumber', values.phoneNumber);
      form.append('profession', professionValue);
      form.append('nasionality', nasionalityValue);

      if (picture) {
        form.append('picture', {
          name: picture.fileName,
          type: picture.type,
          uri:
            Platform.OS === 'android'
              ? picture.uri.replace('file://', ' ')
              : picture.uri,
        });
      }

      if (token) {
        const {data} = await http(token).post('/profile', form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setSuccessMessage(data.message);
        console.log(data);
      }
    } catch (err) {
      const message = err?.response?.data?.message;
      console.log(message);
    }
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.contEditProf}>
        <View style={style.fotoCont}>
          <View style={style.foto}>
            <View style={style.fotoIcon}>
              <Image style={style.picture} source={picture} />
            </View>
          </View>
        </View>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phoneNumber: '',
            gender: profile?.gender ? '1' : '0',
            birthDate: '',
          }}
          onSubmit={doEditProfile}
          enableReinitialize>
          {({handleBlur, handleChange, handleSubmit, values}) => (
            <>
              <View style={style.nameCont}>
                {successMessage && (
                  <View>
                    <Feather name="check" size={25} />
                    <Text>{successMessage}</Text>
                  </View>
                )}
                <Text style={style.title}>Full Name</Text>
                <View style={style.flexCont}>
                  {editFullName && (
                    <Input
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                    />
                  )}
                  <View style={style.directionRow}>
                    {!editFullName && (
                      <>
                        {profile.fullName ? (
                          <Text>{profile?.fullName}</Text>
                        ) : (
                          <Text style={style.textRed}>Not Set</Text>
                        )}
                      </>
                    )}
                    {!editFullName && (
                      <TouchableOpacity onPress={() => setEditFullName(true)}>
                        <Text style={style.textEdit}>Edit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Email</Text>
                <View style={style.flexCont}>
                  {editEmail && (
                    <Input
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  )}
                  <View style={style.directionRow}>
                    {!editEmail && (
                      <>
                        {profile.email ? (
                          <Text>{profile?.email}</Text>
                        ) : (
                          <Text style={style.textRed}>Not Set</Text>
                        )}
                      </>
                    )}
                    {!editEmail && (
                      <TouchableOpacity onPress={() => setEditEmail(true)}>
                        <Text style={style.textEdit}>Edit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Phone Number</Text>
                <View style={style.flexCont}>
                  {editPhoneNumber && (
                    <Input
                      style={style.width100}
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      value={values.phoneNumber}
                    />
                  )}
                  <View style={style.directionRow}>
                    {!editPhoneNumber && (
                      <>
                        {profile.phoneNumber ? (
                          <Text>{profile?.phoneNumber}</Text>
                        ) : (
                          <Text style={style.textRed}>Not Set</Text>
                        )}
                      </>
                    )}
                    {!editPhoneNumber && (
                      <TouchableOpacity
                        onPress={() => setEditPhoneNumber(true)}>
                        <Text style={style.textEdit}>Edit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Gender</Text>
                <RadioButton.Group
                  onValueChange={handleRadioPress}
                  value={gender}>
                  <View style={style.directionRow}>
                    <View style={style.flexContGender}>
                      <RadioButton.Android name="gender" value="0" />
                      <Text>Male</Text>
                    </View>
                    <View style={style.flexContGender}>
                      <RadioButton.Android name="gender" value="1" />
                      <Text>Female</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Profession</Text>
                <View style={style.flexCont}>
                  {editProfession && (
                    <DropDownPicker
                      placeholder="Select Profession"
                      open={open}
                      value={professionValue}
                      items={profession}
                      setOpen={setOpen}
                      setValue={setProfessionValue}
                      setItems={setProfession}
                      zIndex={1001}
                    />
                  )}
                  <View style={style.directionRow}>
                    {!editProfession && (
                      <>
                        {profile.profession ? (
                          <Text>{profile?.profession}</Text>
                        ) : (
                          <Text style={style.textRed}>Not Set</Text>
                        )}
                      </>
                    )}
                    {!editProfession && (
                      <TouchableOpacity onPress={() => setEditProfession(true)}>
                        <Text style={style.textEdit}>Edit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Nationality</Text>
                <View style={style.flexCont}>
                  {editNasionality && (
                    <DropDownPicker
                      placeholder="Select Nasionality"
                      open={openSelect}
                      value={nasionalityValue}
                      items={nasionality}
                      setOpen={setOpenSelect}
                      setValue={setNasionalityValue}
                      setItems={setNasionality}
                      zIndex={1000}
                    />
                  )}
                  <View style={style.directionRow}>
                    {!editNasionality && (
                      <>
                        {profile.nasionality ? (
                          <Text>{profile?.nasionality}</Text>
                        ) : (
                          <Text style={style.textRed}>Not Set</Text>
                        )}
                      </>
                    )}
                    {!editNasionality && (
                      <TouchableOpacity
                        onPress={() => setEditNasionality(true)}>
                        <Text style={style.textEdit}>Edit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Birthday Date</Text>
                <View style={style.flexCont}>
                  {editBirthDate && (
                    <Input
                      onChangeText={handleChange('birthDate')}
                      onBlur={handleBlur('birthDate')}
                      value={values.birthDate}
                    />
                  )}
                  <View style={style.directionRow}>
                    {!editBirthDate && (
                      <>
                        {profile.birthDate ? (
                          <Text>
                            {moment(profile?.birthDate).format('YYYY/MM/DD')}
                          </Text>
                        ) : (
                          <Text style={style.textRed}>Not Set</Text>
                        )}
                      </>
                    )}
                    {!editBirthDate && (
                      <TouchableOpacity onPress={() => setEditBirthDate(true)}>
                        <Text style={style.textEdit}>Edit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
              <View>
                <Button onPress={handleSubmit}>Save</Button>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  textEditPr: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contTextPr: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  contEditProf: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    gap: 20,
  },
  foto: {
    width: 137,
    height: 137,
    borderWidth: 5,
    borderColor: '#61764B',
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  fotoIcon: {
    width: 110,
    height: 110,
    backgroundColor: 'gray',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  fotoCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  textInput: {
    fontSize: 16,
    padding: 14,
    borderWidth: 1,
    borderRadius: 15,
  },
  nameCont: {
    gap: 10,
  },
  flexCont: {
    gap: 10,
  },
  directionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  flexContGender: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  textEdit: {
    color: '#61764B',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textRed: {
    color: 'red',
  },
});

export default EditProfile;
