import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import http from '../helpers/http';
import moment from 'moment';
import {useSelector} from 'react-redux';

const MyWishlist = () => {
  const [wishlists, setWishlists] = React.useState([]);
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    async function getWishlists() {
      const {data} = await http(token).get('/wishlists');
      setWishlists(data.results);
    }
    getWishlists();
  }, [token]);

  return (
    <View style={styles.wrapper}>
      {wishlists.map(item => {
        return (
          <View key={`wishlist-${item?.id}`} style={styles.eventContain}>
            <View style={styles.spaceBetween}>
              <View style={styles.eventDate}>
                <Text style={styles.textOrange}>
                  {moment(item.date).format('DD')}
                </Text>
                <Text style={styles.textDay}>
                  {moment(item.date).format('ddd')}
                </Text>
              </View>
              <View>
                <Icon name="heart" size={25} color="#61764b" />
              </View>
            </View>
            <View style={styles.eventDetail}>
              <Text style={styles.eventTitle}>{item?.title}</Text>
              <View>
                <Text style={styles.eventSubtitle}>
                  {item?.location}, Indonesia
                </Text>
                <Text style={styles.eventSubtitle}>
                  {moment(item.date).format('LLL')}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
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
