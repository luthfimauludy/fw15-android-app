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
import {useNavigation} from '@react-navigation/native';

const booking = require('../assets/img/Booking.png');
const swap = require('../assets/img/swap.png');
const Booking = () => {
  const navigation = useNavigation();
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
          <View>
            <View style={styles.gap20}>
              <Icon name="ticket" size={30} />
              <View style={styles.sectionTicket}>
                <View>
                  <Text style={styles.text14}>SECTION REG, ROW 1</Text>
                  <Text style={styles.text12}>12 Seats available</Text>
                </View>
                <View style={styles.alignCenter}>
                  <Text style={styles.text14}>$15</Text>
                  <Text style={styles.text12}>per person</Text>
                </View>
              </View>
            </View>
            <View style={styles.quantityText}>
              <Text style={styles.text14}>Quantity</Text>
              <View>
                <View style={styles.buttonQty}>
                  <Icon name="minus-square-o" size={30} />
                  <Text style={styles.text14}>0</Text>
                  <Icon name="plus-square-o" size={30} />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.gap20}>
              <Icon name="ticket" size={30} />
              <View style={styles.sectionTicket}>
                <View>
                  <Text style={styles.text14}>SECTION VIP, ROW 2</Text>
                  <Text style={styles.text12}>9 Seats available</Text>
                </View>
                <View style={styles.alignCenter}>
                  <Text style={styles.text14}>$35</Text>
                  <Text style={styles.text12}>per person</Text>
                </View>
              </View>
            </View>
            <View style={styles.quantityText}>
              <Text style={styles.text14}>Quantity</Text>
              <View>
                <View style={styles.buttonQty}>
                  <Icon name="minus-square-o" size={30} />
                  <Text style={styles.text14}>2</Text>
                  <Icon name="plus-square-o" size={30} />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.gap20}>
              <Icon name="ticket" size={30} />
              <View style={styles.sectionTicket}>
                <View>
                  <Text style={styles.text14}>SECTION VVIP, ROW 3</Text>
                  <Text style={styles.text12}>6 Seats available</Text>
                </View>
                <View style={styles.alignCenter}>
                  <Text style={styles.text14}>$50</Text>
                  <Text style={styles.text12}>per person</Text>
                </View>
              </View>
            </View>
            <View style={styles.quantityText}>
              <Text style={styles.text14}>Quantity</Text>
              <View>
                <View style={styles.buttonQty}>
                  <Icon name="minus-square-o" size={30} />
                  <Text style={styles.text14}>0</Text>
                  <Icon name="plus-square-o" size={30} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.checkoutContent}>
          <View style={styles.alignCenter}>
            <Text style={styles.textBlack}>VIP 2 $70</Text>
            <Text style={styles.text12}>Get now on Urticket</Text>
          </View>
          <TouchableOpacity
            style={styles.btnCheckout}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Checkout</Text>
            {/* <Button>Checkout</Button> */}
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
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  btnCheckout: {
    width: '50%',
  },
});

export default Booking;
