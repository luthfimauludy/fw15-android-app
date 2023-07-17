import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import http from '../helpers/http';
import EventList from '../components/EventList';

const MyBooking = ({navigation}) => {
  const [histories, setHistories] = React.useState([]);
  const token = useSelector(state => state.auth.token);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const {data} = await http(token).get('/history');
        setHistories(data.results);
      };
      fetchData();
    }, [token]),
  );
  console.log(typeof histories);

  const handlePressDetail = id => {
    navigation.navigate('DetailTransaction', {id});
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.calendarContain}>
        <Icon name="calendar" size={25} color="#61764b" />
        <Text style={styles.textMonth}>March</Text>
      </View>
      <View style={styles.eventContain}>
        {histories.length < 1 && (
          <View style={styles.eventDetail}>
            <Text style={styles.eventTitle}>No tickets bought</Text>
            <Text style={styles.eventSubtitle}>
              It appears you haven’t bought any tickets yet. Maybe try searching
              these?
            </Text>
          </View>
        )}
        {histories.map(item => {
          return (
            <EventList
              key={`manage-booking-${item?.id}`}
              contentDate={item?.date}
              contentDay={item?.date}
              title={item?.title}
              location={item?.location}
              date={item?.date}
              day={item?.date}
              forMyBooking
              transactionDetail={() => handlePressDetail(item.id)}
            />
            // <View key={`manage-booking-${item.id}`}>
            //   <View style={styles.eventDate}>
            //     <Text style={styles.textOrange}>
            //       {moment(item?.date).format('DD')}
            //     </Text>
            //     <Text style={styles.textDay}>
            //       {moment(item?.date).format('LLLL').slice(0, 3)}
            //     </Text>
            //   </View>
            //   <View style={styles.eventDetail}>
            //     <Text style={styles.eventTitle}>{item?.title}</Text>
            //     <View>
            //       <View>
            //         <Text style={styles.eventSubtitle}>
            //           {item?.location}, Indonesia
            //         </Text>
            //       </View>
            //       <View>
            //         <Text style={styles.eventSubtitle}>
            //           {moment(item?.date).format('LLLL').slice(0, 3)}
            //           {', '}
            //           {moment(item?.date).format('LLL')}
            //         </Text>
            //       </View>
            //     </View>
            //     <TouchableOpacity to="/ManageEvent" style={styles.linkDetail}>
            //       Detail
            //     </TouchableOpacity>
            //   </View>
            // </View>
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
  calendarContain: {
    width: '40%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#98D698',
    borderRadius: 15,
    marginTop: 20,
  },
  textMonth: {
    color: '#61764b',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 1,
  },
  eventContain: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  eventDate: {
    alignItems: 'center',
    paddingVertical: 20,
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
});

export default MyBooking;
