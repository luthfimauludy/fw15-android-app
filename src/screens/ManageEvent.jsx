import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import http from '../helpers/http';
import Feather from 'react-native-vector-icons/Feather';
import EventList from '../components/EventList';

const ManageEvent = () => {
  const [event, setEvent] = React.useState([]);
  const token = useSelector(state => state.auth.token);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const {data} = await http(token).get('/events/manage');
        setEvent(data.results);
      };
      fetchData();
    }, [token]),
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.createContain}>
        <Feather name="plus-circle" size={30} />
        <Text style={styles.textCreate}>Create</Text>
      </View>
      <View style={styles.eventContain}>
        {event.length < 1 && (
          <View style={styles.eventDetail}>
            <Text style={styles.eventTitle}>No tickets bought</Text>
            <Text style={styles.eventSubtitle}>
              It appears you haven’t bought any tickets yet. Maybe try searching
              these?
            </Text>
          </View>
        )}
        <View>
          {event.map(item => {
            return (
              <EventList
                key={`manage-event-${item?.id}`}
                contentDate={item?.date}
                contentDay={item?.date}
                eventSpecId={item.eventId}
                title={item?.title}
                location={item?.location}
                date={item?.date}
                day={item?.date}
                forManageEvent
              />
            );
          })}
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
  createContain: {
    width: '30%',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#98D698',
    borderRadius: 15,
    marginTop: 20,
  },
  textCreate: {
    color: '#61764b',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 1,
  },
  eventContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  eventDetail: {
    width: '90%',
    flexDirection: 'column',
    gap: 10,
  },
  eventTitle: {
    color: '#373A42',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 36,
    letterSpacing: 1,
  },
  eventSubtitle: {
    color: '#B3B8B8',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
});

export default ManageEvent;
