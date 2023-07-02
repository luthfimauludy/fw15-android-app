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

const picture = require('../assets/img/default-picture.jpg');

const EditProfile = () => {
  const [gender, setGender] = React.useState('');

  const [value, setValue] = React.useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Apple', value: 'apple'},
  ]);

  const handleRadioPress = value => {
    setGender(value);
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
        <View style={style.nameCont}>
          <Text style={style.values}>Full Name</Text>
          <Input placeholder="Luthfi Putra Mauludy" />
        </View>
        <View style={style.nameCont}>
          <Text style={style.values}>Email</Text>
          <View style={style.flexCont}>
            <Text>luthfi@mail.com</Text>
            <TouchableOpacity>
              <Text style={style.textEdit}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.nameCont}>
          <Text style={style.values}>Phone Number</Text>
          <View style={style.flexCont}>
            <Text>081234567890</Text>
            <TouchableOpacity>
              <Text style={style.textEdit}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.nameCont}>
          <Text style={style.values}>Gender</Text>
          <RadioButton.Group onValueChange={handleRadioPress} value={gender}>
            <View style={style.flexCont}>
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
          <Text style={style.values}>Profession</Text>
          <DropDownPicker
            multiple={true}
            min={0}
            max={5}
            value={value}
            setValue={setValue}
          />
          ;
        </View>
        <View style={style.nameCont}>
          <Text style={style.values}>Nationality</Text>
        </View>
        <View style={style.nameCont}>
          <Text style={style.values}>Birthday Date</Text>
        </View>
        <View>
          <Button>Save</Button>
        </View>
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
  },
  values: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default EditProfile;
