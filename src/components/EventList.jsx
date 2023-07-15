import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateContent from './DateContent';

const EventList = ({
  keyMaps,
  contentDate,
  contentDay,
  title,
  location,
  date,
  day,
  addRemoveWishlist,
  forWishlist,
  forMyBooking,
  forManageEvent,
  transactionDetail,
  functionDetail,
  functionUpdate,
  functionDelete,
}) => {
  return (
    <View style={styles.wishlistContainer} key={keyMaps}>
      <View style={styles.sectionWishlistLeft}>
        <View>
          <DateContent dates={contentDate} days={contentDay} />
        </View>
        {forWishlist && (
          <View>
            <TouchableOpacity onPress={addRemoveWishlist}>
              <FontAwesome name="heart" size={30} color="red" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.sectionWishlistRight}>
        <View>
          <Text style={styles.eventTitle}>
            {title.length >= 16 ? title?.slice(0, 15) + '..' : title}
          </Text>
        </View>
        <View style={styles.subSecWishlistRight}>
          <View>
            <View>
              <Text style={styles.eventSubTitle}>{location}, Indonesia</Text>
            </View>
            <View>
              <Text style={styles.eventSubTitle}>
                {moment(date).format('LLLL').slice(0, 3)}
                {', '}
                {moment(day).format('LLL')}
              </Text>
            </View>
          </View>
          {forMyBooking && (
            <View>
              <TouchableOpacity onPress={transactionDetail}>
                <Text style={styles.textBtnDetail}>Detail</Text>
              </TouchableOpacity>
            </View>
          )}
          {forManageEvent && (
            <View style={styles.btnGroupEvent}>
              <TouchableOpacity onPress={functionDetail}>
                <Text style={styles.textBtnDetail}>Detail</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={functionUpdate}>
                <Text style={styles.textBtnDetail}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={functionDelete}>
                <Text style={styles.textBtnDetail}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#4c3f91',
    flex: 1,
  },
  textHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 1,
    color: 'white',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 50,
  },
  contentHeader: {
    flex: 1,
  },
  containerWishlist: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    gap: 35,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  wrapperWishlist: {
    marginTop: 20,
    gap: 30,
    marginBottom: 120,
  },
  wishlistContainer: {
    flexDirection: 'row',
    justifyContent: 'start',
    width: '100%',
    gap: 30,
  },

  sectionWishlistLeft: {
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionWishlistRight: {
    gap: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  subSecWishlistRight: {
    gap: 5,
  },
  textBtnDetail: {
    color: '#4c3f91',
    fontFamily: 'Poppins-Medium',
  },
  btnGroupEvent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  eventTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    textTransform: 'capitalize',
    color: 'black',
  },
  eventSubTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  noEventText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    textTransform: 'capitalize',
    color: 'black',
    textAlign: 'center',
  },
  noEventSubText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  noEventContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default EventList;
