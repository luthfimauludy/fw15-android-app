import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Link} from '@react-navigation/native';
import Button from '../components/Button';

const galery = require('../assets/img/galery.jpg');
const maps = require('../assets/img/maps.png');
const Event = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <ImageBackground source={galery} style={styles.imgBackground}>
        <View style={styles.paddingTop50}>
          <View style={styles.eventBanner}>
            <View>
              <Link to="/Booking" style={styles.eventTitle}>
                Sights & Sounds Exhibition
              </Link>
            </View>
            <View style={styles.eventInfo}>
              <Icon name="map-pin" size={25} color="#FC1055" />
              <Text style={styles.whiteText}>Jakarta, Indonesia</Text>
            </View>
            <View style={styles.eventInfo}>
              <Icon name="clock" size={25} color="#FC1055" />
              <Text style={styles.whiteText}>Wed, 15 Nov, 4:00 PM</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>Attendees</Text>
            </View>
          </View>
          <View style={styles.eventDetail}>
            <View>
              <Text style={styles.headText}>Event Detail</Text>
              <Text style={styles.innerText}>
                After his controversial art exhibition "Tear and Consume" back
                in November 2018, in which guests were invited to tear up…
              </Text>
            </View>
            <View>
              <Text style={styles.headText}>Location</Text>
              <Image source={maps} />
            </View>
            <View>
              <Button>Buy Tickets</Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  paddingTop50: {
    paddingTop: 50,
  },
  imgBackground: {
    flex: 1,
    height: '65%',
    resizeMode: 'cover',
  },
  eventBanner: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 20,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: 2,
    color: 'white',
  },
  eventInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  whiteText: {
    fontSize: 14,
    lineHeight: 27,
    letterSpacing: 1,
    color: 'white',
  },
  eventDetail: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  headText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    letterSpacing: 1,
    marginBottom: 10,
  },
  innerText: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 1,
  },
});

export default Event;
