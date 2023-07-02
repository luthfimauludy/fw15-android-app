import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const MyWishlist = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.eventContain}>
        <View style={styles.spaceBetween}>
          <View style={styles.eventDate}>
            <Text style={styles.textOrange}>15</Text>
            <Text style={styles.textDay}>Wed</Text>
          </View>
          <View>
            <Icon name="heart" size={25} color="#61764b" />
          </View>
        </View>
        <View style={styles.eventDetail}>
          <Text style={styles.eventTitle}>Sights & Sounds Exhibition</Text>
          <View>
            <Text style={styles.eventSubtitle}>Jakarta, Indonesia</Text>
            <Text style={styles.eventSubtitle}>Wed, 15 Nov, 4:00 PM</Text>
          </View>
        </View>
      </View>
      <View style={styles.eventContain}>
        <View style={styles.spaceBetween}>
          <View style={styles.eventDate}>
            <Text style={styles.textOrange}>15</Text>
            <Text style={styles.textDay}>Wed</Text>
          </View>
          <View>
            <Icon name="heart" size={25} color="#61764b" />
          </View>
        </View>
        <View style={styles.eventDetail}>
          <Text style={styles.eventTitle}>Sights & Sounds Exhibition</Text>
          <View>
            <Text style={styles.eventSubtitle}>Jakarta, Indonesia</Text>
            <Text style={styles.eventSubtitle}>Wed, 15 Nov, 4:00 PM</Text>
          </View>
        </View>
      </View>
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
  eventContain: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  eventDate: {
    alignItems: 'center',
  },
  textOrange: {
    color: '#FF8900',
  },
  textDay: {
    color: '#C1C5D0',
  },
  eventDetail: {
    flexDirection: 'column',
    gap: 10,
  },
  eventTitle: {
    color: '#373A42',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: 2,
  },
  eventSubtitle: {
    color: '#373A42BF',
    fontSize: 12,
    lineHeight: 27,
  },
  linkDetail: {
    color: '#61764b',
    fontSize: 12,
  },
  spaceBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
});

export default MyWishlist;
