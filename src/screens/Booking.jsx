import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import {useSelector} from 'react-redux';
import http from '../helpers/http';

const booking = require('../assets/img/Booking.png');
const swap = require('../assets/img/swap.png');
const Booking = ({route, navigation}) => {
  const {id: eventId} = route.params;
  const [sections, setSections] = React.useState([]);
  const [filledSection, setFilledSection] = React.useState({
    id: 0,
    quantity: 0,
  });
  const token = useSelector(state => state.auth.token);

  const increment = id => {
    if (filledSection.quantity < 5) {
      setFilledSection({
        id,
        quantity: filledSection.quantity + 1,
      });
    }
  };

  const decrement = id => {
    if (filledSection.quantity > 0) {
      setFilledSection({
        id,
        quantity: filledSection.quantity - 1,
      });
    }
  };

  React.useEffect(() => {
    const getSections = async () => {
      const {data} = await http(token).get('/sections');
      setSections(data.results);
    };
    getSections();
  }, [token]);

  const doReservation = async () => {
    const form = new URLSearchParams({
      eventId,
      sectionId: filledSection.id,
      quantity: filledSection.quantity,
    }).toString();
    const {data} = await http(token).post('/reservations', form);

    navigation.navigate('Payment', {
      state: {
        eventId,
        eventName: data.results.events.title,
        reservationId: data.results.id,
        sectionName: data.results.sectionName,
        quantity: data.results.quantity,
        totalPayment: data.results.totalPayment,
      },
    });
  };

  const selectedSection =
    filledSection && sections.filter(item => item.id === filledSection.id)[0];

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.bookingImg}>
        <Image source={booking} />
      </View>
      <View>
        <View style={styles.spaceBetween}>
          <View>
            <Text style={styles.text20}>Tickets</Text>
          </View>
          <View style={styles.gap20}>
            <Text style={styles.textRed}>BY PRICE</Text>
            <Image source={swap} />
          </View>
        </View>
        <View style={styles.paddingTop30}>
          {sections.map(item => {
            return (
              <View key={`section-${item?.id}`}>
                <View style={styles.gap20}>
                  <Icon name="ticket" size={30} color="#61764b" />
                  <View style={styles.sectionTicket}>
                    <View>
                      <Text style={styles.text14}>
                        SECTION {item?.name}, ROW 1
                      </Text>
                      <Text style={styles.text12}>12 Seats available</Text>
                    </View>
                    <View style={styles.alignCenter}>
                      <Text style={styles.text14}>IDR {item?.price}</Text>
                      <Text style={styles.text12}>per person</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.quantityText}>
                  <Text style={styles.text14}>Quantity</Text>
                  <View style={styles.buttonQty}>
                    <TouchableOpacity onPress={() => decrement(item?.id)}>
                      <Icon name="minus-square-o" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.text14}>
                      {item?.id === filledSection.id
                        ? filledSection.quantity
                        : 0}
                    </Text>
                    <TouchableOpacity onPress={() => increment(item?.id)}>
                      <Icon name="plus-square-o" size={30} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.checkoutContent}>
          <View style={styles.directionColumn}>
            <View style={styles.directionRow}>
              <Text style={styles.textBlack}>
                {selectedSection?.name || '-'}
              </Text>
              <Text style={styles.textBlack}>{filledSection?.quantity}</Text>
              <Text style={styles.textBlack}>
                IDR {selectedSection?.price * filledSection?.quantity || '0'}
              </Text>
            </View>
            <Text style={styles.text12}>Get now on Urticket</Text>
          </View>
          <TouchableOpacity
            style={styles.btnCheckout}
            onPress={() => navigation.navigate('Payment')}>
            <Button onPress={doReservation}>Checkout</Button>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: 'white',
    gap: 20,
    paddingHorizontal: 30,
  },
  bookingImg: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  text20: {
    color: '#373A42',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
  },
  text14: {
    color: '#373A42',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  text12: {
    color: '#BDC0C4',
    fontSize: 12,
    lineHeight: 18,
  },
  textRed: {
    color: '#FC1055',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 1,
  },
  textBlack: {
    color: 'black',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gap20: {
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  sectionTicket: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paddingTop30: {
    paddingTop: 30,
    gap: 10,
  },
  quantityText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 45,
    paddingTop: 10,
  },
  buttonQty: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  checkoutContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    gap: 10,
  },
  btnCheckout: {
    width: '45%',
  },
  directionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  directionColumn: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
  },
});

export default Booking;
