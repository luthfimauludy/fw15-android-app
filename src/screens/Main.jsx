import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import Register from './auth/Register';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
// import SplashScreen from './SplashScreen';
import Home from './Home';
import Profile from './Profile';
import DetailEvent from './DetailEvent';
import Booking from './Booking';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Payment from './Payment';
import MyBooking from './MyBooking';
import MyWishlist from './MyWishlist';
import ManageEvent from './ManageEvent';
import CreateEvent from './CreateEvent';
import {logout} from '../redux/reducers/auth';
import UpdateEvent from './UpdateEvent';
import SearchResults from './SearchResults';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => dispatch(logout())}
        icon={({focused, color, size}) => (
          <FeatherIcon name="log-out" color={color} size={size} />
        )}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false,
        // headerStyle
        drawerStyle: {
          backgroundColor: '#EAEAEA',
          width: 240,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Drawer.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={({drawerLabel: () => null}, {drawerItemStyle: {height: 0}})}
      /> */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5Icon name="home" color={color} size={size} />
          ),
          drawerLabel: 'Home',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color, size}) => (
            <FeatherIcon name="user" color={color} size={size} />
          ),
          drawerLabel: 'Profile',
        }}
      />
      <Drawer.Screen
        name="ManageEvent"
        component={ManageEvent}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5Icon name="clipboard-list" color={color} size={size} />
          ),
          drawerLabel: 'Manage Event',
        }}
      />
      <Drawer.Screen
        name="MyBooking"
        component={MyBooking}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5Icon
              name="clipboard-check"
              color={color}
              size={size}
            />
          ),
          drawerLabel: 'My Booking',
        }}
      />
      <Drawer.Screen
        name="MyWishlist"
        component={MyWishlist}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5Icon name="heart" color={color} size={size} />
          ),
          drawerLabel: 'My Wishlist',
        }}
      />
      <Drawer.Screen
        name="DetailEvent"
        component={DetailEvent}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'DetailEvent',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Booking"
        component={Booking}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Booking',
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'Payment',
        }}
      />
      <Drawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'EditProfile',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'ChangePassword',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'CreateEvent',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="UpdateEvent"
        component={UpdateEvent}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'UpdateEvent',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="SearchResults"
        component={SearchResults}
        options={{
          drawerItemStyle: {display: 'none'},
          drawerLabel: 'SearchResults',
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

const Main = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      {!token && (
        <AuthStack.Navigator
          screenOptions={{headerShadowVisible: false, headerTitle: ''}}>
          {/* <Stack.Screen
            options={{headerShown: false}}
            name="SplashScreen"
            component={SplashScreen}
          /> */}
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </AuthStack.Navigator>
      )}
      {token && <MyDrawer />}
    </NavigationContainer>
  );
};

export default Main;
