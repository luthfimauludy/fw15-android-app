import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import {RadioButton} from 'react-native-paper';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import {Formik} from 'formik';

const picture = require('../assets/img/default-picture.jpg');

const EditProfile = () => {
  const [editFullName, setEditFullName] = React.useState(false);
  const [editEmail, setEditEmail] = React.useState(false);
  const [editGender, setEditGender] = React.useState('');
  const [editPhoneNumber, setEditPhoneNumber] = React.useState(false);
  const [editProfession, setEditProfession] = React.useState(false);
  const [editNasionality, setEditNasionality] = React.useState(false);
  const [editBirthDate, setEditBirthDate] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);
  const [professionValue, setProfessionValue] = React.useState(null);
  const [nasionalityValue, setNasionalityValue] = React.useState(null);
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

  const handleRadioPress = value => {
    setEditGender(value);
  };

  const doEditProfile = async () => {
    console.log('Brodi');
    // const form = new FormData();
    // const {data} = await http(token).patch('/profile', form, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });
    // setProfile(data.results);
    // setEditEmail(false);
    // setEditPhoneNumber(false);
    // setEditBirthDate(false);
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
            gender: '',
            profession: '',
            nasionality: '',
            birthDate: '',
          }}
          onSubmit={doEditProfile}>
          {({handleBlur, handleChange, handleSubmit, values}) => (
            <>
              <View style={style.nameCont}>
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
                    {!editFullName && <Text>Luthfi Putra Mauludy</Text>}
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
                    {!editEmail && <Text>luthfi@mail.com</Text>}
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
                    {!editPhoneNumber && <Text>081234567890</Text>}
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
                  value={editGender}>
                  <View style={style.directionRow}>
                    <View style={style.flexContGender}>
                      <RadioButton.Android value="male" />
                      <Text>Male</Text>
                    </View>
                    <View style={style.flexContGender}>
                      <RadioButton.Android value="female" />
                      <Text>Female</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Profession</Text>
                <DropDownPicker
                  open={open}
                  value={professionValue}
                  items={profession}
                  setOpen={setOpen}
                  setValue={setProfessionValue}
                  setItems={setProfession}
                  zIndex={1001}
                />
              </View>
              <View style={style.nameCont}>
                <Text style={style.title}>Nationality</Text>
                <DropDownPicker
                  open={openSelect}
                  value={nasionalityValue}
                  items={nasionality}
                  setOpen={setOpenSelect}
                  setValue={setNasionalityValue}
                  setItems={setNasionality}
                  zIndex={1000}
                />
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
                    {!editBirthDate && <Text>31/07/2000</Text>}
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
});

export default EditProfile;
