import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../components/Button';
import {useSelector} from 'react-redux';
import http from '../helpers/http';
import {RadioButton} from 'react-native-paper';

const card = require('../assets/img/card.png');
const Payment = ({route, navigation}) => {
  const token = useSelector(state => state.auth.token);
  const {state} = route.params;
  const [paymentMethod, setPaymentMethod] = React.useState('1');

  const handleRadioPress = value => {
    setPaymentMethod(value);
  };

  const doPayment = async () => {
    const {reservationId} = state;
    const form = new URLSearchParams({
      reservationId,
      paymentMethodId: paymentMethod,
    }).toString();
    const {data} = await http(token).post('/payments', form);
    if (data) {
      navigation.navigate('MyBooking', {replace: true});
    }
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.gap10}>
        <View>
          <Text style={styles.text20}>Payment Method</Text>
        </View>
        <View style={styles.spaceBetween}>
          <RadioButton.Group
            onValueChange={handleRadioPress}
            value={paymentMethod}>
            <View style={styles.radioInput}>
              <View>
                <View style={styles.gap20}>
                  <RadioButton.Android name="paymentMethod" value="1" />
                  <Icon name="payment" size={30} color="#884DFF" />
                  <View style={styles.flexRow}>
                    <View>
                      <Text style={styles.text14}>Card</Text>
                    </View>
                    <Icon name="keyboard-arrow-up" size={25} />
                  </View>
                </View>
                <View style={styles.cardContains}>
                  <View style={styles.cardOutput}>
                    <Image source={card} />
                  </View>
                  <View style={styles.plusIcon}>
                    <Text>+</Text>
                  </View>
                </View>
              </View>
              <View style={styles.gap20}>
                <RadioButton.Android name="paymentMethod" value="2" />
                <FontAwesome name="bank" size={30} color="#FC1055" />
                <View style={styles.flexRow}>
                  <View>
                    <Text style={styles.text14}>Bank Transfer</Text>
                  </View>
                  <Icon name="keyboard-arrow-down" size={25} />
                </View>
              </View>
              <View style={styles.gap20}>
                <RadioButton.Android name="paymentMethod" value="3" />
                <Entypo name="shop" size={30} color="#FF8900" />
                <View style={styles.flexRow}>
                  <View>
                    <Text style={styles.text14}>Retail</Text>
                  </View>
                  <Icon name="keyboard-arrow-down" size={25} />
                </View>
              </View>
              <View style={styles.gap20}>
                <RadioButton.Android name="paymentMethod" value="4" />
                <FontAwesome name="dollar" size={30} color="#3366FF" />
                <View style={styles.flexRow}>
                  <View>
                    <Text style={styles.text14}>E-Money</Text>
                  </View>
                  <Icon name="keyboard-arrow-down" size={25} />
                </View>
              </View>
            </View>
          </RadioButton.Group>
          <View style={styles.paymentContent}>
            <View>
              <Text style={styles.textBlack}>Total Payment</Text>
              <Text style={styles.totalPrice}>IDR {state.totalPayment}</Text>
            </View>
            <View style={styles.btnPayment}>
              <Button onPress={doPayment}>Payment</Button>
            </View>
          </View>
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
    paddingTop: 20,
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
  textBlack: {
    color: 'black',
  },
  spaceBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 20,
    gap: 70,
  },
  gap20: {
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  gap10: {
    flexDirection: 'column',
    gap: 10,
  },
  radioInput: {
    flexDirection: 'column',
    gap: 10,
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    elevation: 0.3,
  },
  totalPrice: {
    color: '#61764b',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnPayment: {
    width: '50%',
  },
  cardOutput: {
    width: 260,
  },
  cardContains: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: '#61764b',
    borderStyle: 'dashed',
    borderRadius: 10,
    marginLeft: 30,
  },
});

export default Payment;
