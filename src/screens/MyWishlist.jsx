import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import http from '../helpers/http';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import EventList from '../components/EventList';

const MyWishlist = () => {
  const [wishlists, setWishlists] = React.useState([]);
  const token = useSelector(state => state.auth.token);
  console.log(wishlists);

  const getWishlists = React.useCallback(async () => {
    const {data} = await http(token).get('/wishlists');
    setWishlists(data.results);
  }, [token]);

  React.useEffect(() => {
    getWishlists();
  }, [getWishlists]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const {data} = await http(token).get('/wishlists');
        setWishlists(data.results);
      };
      fetchData();
    }, [token]),
  );

  const addRemoveWishlist = async id => {
    try {
      const {data} = await http(token).delete(`/wishlists/${id}`);
      if (data.results) {
        console.log(data.results);
      }
      getWishlists();
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.eventContain}>
        {wishlists.length < 1 && (
          <View style={styles.eventDetail}>
            <Text style={styles.eventTitle}>No wishlist found</Text>
            <Text style={styles.eventSubtitle}>
              It appears you haven’t found any wishlists yet. Maybe try
              searching these?
            </Text>
          </View>
        )}
        {wishlists.map(item => {
          return (
            <EventList
              key={`manage-wishlist-${item?.wishlistId}`}
              contentDate={item?.date}
              contentDay={item?.date}
              title={item?.title}
              location={item?.location}
              date={item?.date}
              day={item?.date}
              forWishlist
              addRemoveWishlist={() => addRemoveWishlist(`${item.wishlistId}`)}
            />
          );
        })}
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
    flexDirection: 'column',
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
    textAlign: 'center',
    lineHeight: 36,
    letterSpacing: 2,
  },
  eventSubtitle: {
    color: '#373A42BF',
    fontSize: 12,
    textAlign: 'center',
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
