import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <View>
          <Text style={styles.text20}>Payment Method</Text>
        </View>
        <View style={styles.spaceBetween}>
          <View style={styles.paddingTop30}>
            <View>
              <View style={styles.gap20}>
                <Icon name="payment" size={30} />
                <View style={styles.flexRow}>
                  <View>
                    <Text style={styles.text14}>Card</Text>
                  </View>
                  <Icon name="keyboard-arrow-up" size={25} />
                </View>
              </View>
              <View style={styles.cardContains}>
                <View style={styles.cardOutput}>
                  <Text>Card</Text>
                </View>
                <View style={styles.plusIcon}>
                  <Text>+</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.gap20}>
                <Icon name="payment" size={30} />
                <View style={styles.flexRow}>
                  <View>
                    <Text style={styles.text14}>Bank Transfer</Text>
                  </View>
                  <Icon name="keyboard-arrow-down" size={25} />
                </View>
              </View>
            </View>
            <View>
              <View style={styles.gap20}>
                <Icon name="payment" size={30} />
                <View style={styles.flexRow}>
                  <View>
                    <Text style={styles.text14}>Retail</Text>
                  </View>
                  <Icon name="keyboard-arrow-down" size={25} />
                </View>
              </View>
            </View>
            <View>
              <View style={styles.gap20}>
                <Icon name="payment" size={30} />
                <View style={styles.flexRow}>
                  <View>
                    <Text style={styles.text14}>E-Money</Text>
                  </View>
                  <Icon name="keyboard-arrow-down" size={25} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.paymentContent}>
            <View>
              <Text style={styles.textBlack}>Total Payment</Text>
              <Text style={styles.totalPrice}>$70</Text>
            </View>
            <TouchableOpacity
              style={styles.btnPayment}
              onPress={() => navigation.navigate('MyBooking')}>
              <Text>Payment</Text>
              {/* <Button>Payment</Button> */}
            </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  gap20: {
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
    flexDirection: 'row',
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
    width: 230,
    height: 130,
    backgroundColor: '#FFA000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: 'blue',
    borderStyle: 'dashed',
    borderRadius: 10,
    marginLeft: 30,
  },
});

export default Payment;
