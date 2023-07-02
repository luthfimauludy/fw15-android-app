import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/reducers/auth';

const galery = require('../assets/img/galery.jpg');
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.whiteText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text style={styles.whiteText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flex1}>
        <View style={styles.ph10}>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Search Event..."
            placeholderTextColor="#C1C5D0"
          />
        </View>
        <View style={styles.date}>
          <View style={styles.flexRow}>
            <View>
              <Text style={styles.whiteText}>13</Text>
              <Text style={styles.whiteText}>Mon</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>14</Text>
              <Text style={styles.whiteText}>Tue</Text>
            </View>
            <View style={styles.dateBorder}>
              <Text style={styles.orangeText}>15</Text>
              <Text style={styles.orangeText}>Wed</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>16</Text>
              <Text style={styles.whiteText}>Thu</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>17</Text>
              <Text style={styles.whiteText}>Fri</Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.mainHead}>
              <Text style={styles.headText}>Events For You</Text>
              <Text>Sort</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailEvent')}>
                <View style={styles.relative}>
                  <Image source={galery} style={styles.galeryImg} />
                  <View style={styles.eventText}>
                    <Text style={styles.eventDate}>Wed, 15 Nov, 4:00 PM</Text>
                    <Text style={styles.eventTitle}>
                      Sights & Sounds Exhibition
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#61764b',
  },
  relative: {
    position: 'relative',
  },
  ph10: {
    paddingHorizontal: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
  },
  orangeText: {
    color: 'orange',
    textAlign: 'center',
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#C1C5D0',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  date: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 30,
    paddingVertical: 40,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: '#222B45',
  },
  dateBorder: {
    height: 50,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    gap: 40,
  },
  mainContent: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: 'white',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  mainHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    color: '#373A42',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 1,
  },
  galeryImg: {
    width: '50%',
    height: '90%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  eventText: {
    position: 'absolute',
    width: '50%',
    bottom: 80,
    left: 10,
  },
  eventDate: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 27,
    color: 'white',
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'white',
  },
  dataEvent: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Home;
