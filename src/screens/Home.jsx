import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.whiteText}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.whiteText}>Chat</Text>
      </View>
      <View style={styles.flex1}>
        <SafeAreaView style={styles.ph10}>
          <TextInput
            style={styles.input}
            onChange={onChangeText}
            value={text}
            placeholder="Search Event..."
            placeholderTextColor="#C1C5D0"
          />
        </SafeAreaView>
        <View style={styles.date}>
          <View style={styles.flexRow}>
            <View>
              <Text style={styles.whiteText}>13</Text>
              <Text style={styles.whiteText}>Mon</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>14</Text>
              <Text style={styles.whiteText}>Tue</Text>
            </View>
            <View style={styles.dateBorder}>
              <Text style={styles.orangeText}>15</Text>
              <Text style={styles.orangeText}>Wed</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>16</Text>
              <Text style={styles.whiteText}>Thu</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>17</Text>
              <Text style={styles.whiteText}>Fri</Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.mainHead}>
              <Text style={styles.headText}>Events For You</Text>
              <Text>Sort</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#61764b',
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
    flex: 2,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 30,
    paddingVertical: 40,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: '#222B45',
  },
  dateBorder: {
    height: 50,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    gap: 40,
  },
  mainContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  mainHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 110,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 1,
  },
});

export default Home;
