import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './views/HomeScreen';
import ProfileScreen from './views/ProfileScreen';
import NotificationScreen from './views/NotificationScreen';
import SummaryScreen from './views/SummaryScreen';
import {FaPortrait, FaHome, FaBell, FaCalendarAlt, FaCalendarDay} from 'react-icons/fa'

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'BeeMindful', tabBarLabel: 'Today', tabBarIcon: () => (
            <FaCalendarDay />
          ), ...tabOptions}}
          
        />
        <Tab.Screen name="Summary" component={SummaryScreen} options={{
          tabBarIcon: () => (
            <FaCalendarAlt />
          ),
          ...tabOptions
        }}/>
                  <Tab.Screen name="Notifications" component={NotificationScreen} options={{
            tabBarIcon: () => (
              <FaBell />
            ),
            tabBarBadge: 3,
            ...tabOptions
          }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <FaPortrait />
          ),
          ...tabOptions
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emotionsContainer: {
    flexDirection: 'row',
  }
})
