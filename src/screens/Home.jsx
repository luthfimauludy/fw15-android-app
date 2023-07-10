import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EventContent from '../components/EventContent';
import http from '../helpers/http';
import {useSelector} from 'react-redux';
import CategoryContent from '../components/CategoryContent';
import DateContent from '../components/DateContent';

// const galery = require('../assets/img/galery.jpg');
const Home = () => {
  const navigation = useNavigation();
  const [events, setEvent] = React.useState([]);
  const [text, onChangeText] = React.useState('');
  const deviceToken = useSelector(state => state.deviceToken.data);
  const token = useSelector(state => state.auth.token);

  const saveToken = useCallback(async () => {
    const form = new URLSearchParams({token: deviceToken.token}).toString();
    await http(token).post('/device-token', form);
  }, [deviceToken, token]);

  React.useEffect(() => {
    saveToken();
  }, [saveToken]);

  React.useEffect(() => {
    async function getEvent() {
      const {data} = await http().get('/events?sort=date&sortBy=asc&limit=10');
      setEvent(data.results);
    }
    getEvent();
  }, []);

  const uniqueDates = [...new Set(events.map(item => item?.date))];

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={25} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="message-square" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.flex1}>
        <View style={styles.ph10}>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Search Event..."
            placeholderTextColor="#C1C5D0"
          />
        </View>
        <View style={styles.date}>
          <View style={styles.flexRow}>
            <View style={styles.rowGap40}>
              <View style={styles.pv10}>
                <Text style={styles.whiteText}>13</Text>
                <Text style={styles.whiteText}>Mon</Text>
              </View>
              <View style={styles.pv10}>
                <Text style={styles.whiteText}>14</Text>
                <Text style={styles.whiteText}>Tue</Text>
              </View>
            </View>
            <View style={styles.dateBorder}>
              <View style={styles.orangeBorder}>
                <Text style={styles.orangeText}>15</Text>
                <Text style={styles.orangeText}>Wed</Text>
              </View>
            </View>
            <View style={styles.rowGap40}>
              <View style={styles.pv10}>
                <Text style={styles.whiteText}>16</Text>
                <Text style={styles.whiteText}>Thu</Text>
              </View>
              <View style={styles.pv10}>
                <Text style={styles.whiteText}>17</Text>
                <Text style={styles.whiteText}>Fri</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.mainHead}>
              <Text style={styles.headText}>Events For You</Text>
              <FontAwesome name="sliders" size={25} colot="#4c3f91" />
            </View>
            <ScrollView horizontal={true} style={styles.eventContain}>
              {events.map(item => {
                return (
                  <EventContent
                    key={`event-${item?.id}`}
                    dates={item?.date}
                    title={item?.title}
                    eventImage={item?.picture}
                    eventId={item?.id}
                  />
                );
              })}
            </ScrollView>
            <View>
              <Text style={styles.containerText}>Discover</Text>
            </View>
            <CategoryContent />
            <View style={styles.containerUpcoming}>
              <Text style={styles.containerTextUpcoming}>Upcoming</Text>
              <Text>See all</Text>
            </View>
            <View style={styles.monthTextCont}>
              <Text style={styles.monthText}>APR</Text>
            </View>
            <View>
              {uniqueDates.map(date => {
                const itemsByDate = events.filter(item => item?.date === date);
                const item = itemsByDate[0];
                return (
                  <View
                    key={`event-by-date-${item?.id}`}
                    style={styles.upcomingBox}>
                    <DateContent dates={item?.date} days={item?.date} />
                    <View style={styles.contentUpcoming}>
                      <EventContent
                        key={`event-${item?.id}`}
                        dates={item?.date}
                        title={item?.title}
                        eventImage={item?.picture}
                        eventId={item?.id}
                      />
                      <TouchableOpacity style={styles.buttonUpcoming}>
                        <Text style={styles.textButton}>
                          Show All {itemsByDate.length} Events
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#61764b',
  },
  relative: {
    position: 'relative',
  },
  ph10: {
    paddingHorizontal: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
  },
  orangeText: {
    color: 'orange',
    textAlign: 'center',
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#C1C5D0',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  date: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 30,
    paddingVertical: 40,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: '#222B45',
  },
  dateBorder: {
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  rowGap40: {
    flexDirection: 'row',
    gap: 40,
  },
  mainContent: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: 'white',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  mainHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    color: '#373A42',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 1,
  },
  eventContain: {
    flexDirection: 'row',
    gap: 10,
  },
  galeryImg: {
    width: '50%',
    height: '90%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  eventText: {
    position: 'absolute',
    width: '50%',
    bottom: 80,
    left: 10,
  },
  eventDate: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 27,
    color: 'white',
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: 'white',
  },
  dataEvent: {
    flexDirection: 'row',
    gap: 10,
  },
  orangeBorder: {
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
  },
  pv10: {
    paddingVertical: 10,
  },
  containerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  containerTextUpcoming: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  containerUpcoming: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upcomingBox: {
    flexDirection: 'row',
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3D72',
  },
  monthTextCont: {
    paddingHorizontal: 10,
  },
  buttonUpcoming: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 50,
    width: '80%',
    height: 50,
    borderTopColor: '#FF8900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
  contentUpcoming: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
