import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Link, useFocusEffect} from '@react-navigation/native';
import Button from '../components/Button';
import {useSelector} from 'react-redux';
import http from '../helpers/http';
import moment from 'moment';

const maps = require('../assets/img/maps.png');
const DetailEvent = ({route, navigation}) => {
  const {id} = route.params;
  const token = useSelector(state => state.auth.token);
  const [eventDetail, setEventDetail] = React.useState({});
  const [wishlistBtn, setWishlistBtn] = React.useState(false);

  React.useEffect(() => {
    const getEventData = async () => {
      const {data} = await http().get(`/events/${id}`);
      setEventDetail(data.results);
    };
    if (id) {
      getEventData(id);
    }
  }, [id]);

  useFocusEffect(
    React.useCallback(() => {
      const eventId = {eventId: id};
      const qs = new URLSearchParams(eventId).toString();
      const fetchData = async () => {
        const {data} = await http(token).get(`/wishlist/check?${qs}`);
        const btnStatus = data.results;
        if (btnStatus) {
          setWishlistBtn(true);
        } else {
          setWishlistBtn(false);
        }
      };
      fetchData();
    }, [token, id]),
  );

  const addRemoveWishlist = async () => {
    try {
      const eventId = {eventId: id};
      const qs = new URLSearchParams(eventId).toString();
      const {data} = await http(token).post('/wishlists', qs);
      console.log(data);
      if (wishlistBtn) {
        setWishlistBtn(false);
      } else {
        setWishlistBtn(true);
      }
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  };

  const handlePressEvent = eventId => {
    navigation.navigate('Booking', {eventId});
  };

  return (
    <ScrollView style={styles.wrapper}>
      <ImageBackground src={eventDetail?.picture} style={styles.imgBackground}>
        <View style={styles.flexRow}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Feather name="arrow-left" size={25} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={addRemoveWishlist}>
              {wishlistBtn === true ? (
                <FontAwesome name="heart" size={25} color="red" />
              ) : (
                <FontAwesome name="heart-o" size={25} color="#FFF" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paddingTop50}>
          <View style={styles.eventBanner}>
            <View>
              <Link to="/Booking" style={styles.eventTitle}>
                {eventDetail?.title}
              </Link>
            </View>
            <View style={styles.eventInfo}>
              <Feather name="map-pin" size={25} color="#FC1055" />
              <Text style={styles.whiteText}>
                {eventDetail?.location}, Indonesia
              </Text>
            </View>
            <View style={styles.eventInfo}>
              <Feather name="clock" size={25} color="#FC1055" />
              <Text style={styles.whiteText}>
                {moment(eventDetail.date).format('LLLL').slice(0, 3)}
                {', '}
                {moment(eventDetail.date).format('LLL')}
              </Text>
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
              <Button onPress={() => handlePressEvent(eventDetail.id)}>
                Buy Tickets
              </Button>
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
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
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
  btnContain: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 30,
  },
  btnTouch: {
    backgroundColor: '#4c3f91',
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 4,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default DetailEvent;
