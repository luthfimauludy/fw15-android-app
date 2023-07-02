import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

const card = require('../assets/img/card.png');
const picture = require('../assets/img/default-picture.jpg');
const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={style.container}>
      <View style={style.contProfile}>
        <View style={style.contProfileName}>
          <View style={style.foto}>
            <View style={style.fotoIcon}>
              <Image style={style.picture} source={picture} />
            </View>
          </View>
          <View style={style.contProfileName}>
            <Text style={style.name}>Luthfi Putra M.</Text>
            <Text style={style.profession}>Developers, ID</Text>
          </View>
        </View>
        <View style={style.cardOne}>
          <View style={style.cardOption}>
            <Text style={style.cardText}>Card</Text>
            <View>
              <TouchableOpacity style={style.plusIcon}>
                <FeatherIcon name="plus" size={25} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal={true}>
            <View style={style.cardContains}>
              <View style={style.cardOutput}>
                <Image source={card} />
              </View>
              <View style={style.cardOutput}>
                <Image source={card} />
              </View>
            </View>
          </ScrollView>
          <View style={style.editProfile}>
            <View style={style.contTextEdit}>
              <View>
                <AntDesignIcon name="edit" size={25} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}>
                <Text style={style.textEdit}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <FeatherIcon name="chevron-right" size={25} />
            </TouchableOpacity>
          </View>
          <View style={style.changePassword}>
            <View style={style.contTextEdit}>
              <View>
                <FeatherIcon name="unlock" size={25} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChangePassword')}>
                <Text style={style.textEdit}>Change Password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <FeatherIcon name="chevron-right" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  profCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  contProfile: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    gap: 15,
  },
  contProfileName: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
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
  picture: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#373A42',
  },
  profession: {
    fontSize: 12,
    color: 'black',
    opacity: 0.7,
  },
  cardOne: {
    gap: 15,
  },
  cardOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    color: '#373A42',
    fontWeight: 'bold',
  },
  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: 'blue',
    borderStyle: 'dashed',
    borderRadius: 10,
    marginLeft: 30,
  },
  cardContains: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  editProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changePassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  textEdit: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 1,
    color: '#373A42',
    fontWeight: 'bold',
  },
  contTextEdit: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
