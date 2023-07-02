import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import splashImg from '../assets/img/toyFaces.png';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1500);
    } else {
      setTimeout(() => {
        navigation.replace('Login');
      }, 1500);
    }
  }, [navigation, token]);
  return (
    <View style={styles.wrapper}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <View>
        <Text style={styles.title}>Find Events You Love</Text>
      </View>
      <View style={styles.imageContain}>
        <Image source={splashImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#61764b',
    flex: 1,
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 150,
  },
  title: {
    maxWidth: 380,
    fontSize: 48,
    letterSpacing: 2,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
  },
  imageContain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
