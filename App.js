import { StyleSheet, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './views/HomeScreen';
import ProfileScreen from './views/ProfileScreen';
import NotificationScreen from './views/NotificationScreen';
import SummaryScreen from './views/SummaryScreen';
import {FaPortrait, FaBell, FaCalendarAlt, FaCalendarDay} from 'react-icons/fa'
import { primaryColor, highlightColor } from './helpers/themes';

// todo: add a resources section to navigate users to beyondblue, headspace etc.

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: highlightColor
        },
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: <Image source={require('./assets/logo.png')} style={{width: 60, height: 60}}/>, tabBarLabel: 'Today', tabBarIcon: ({color}) => (
            <FaCalendarDay style={{color: color, fontSize: '24px'}}/>
          )}}
          
        />
        <Tab.Screen name="Summary" component={SummaryScreen} options={{
          tabBarIcon: ({color}) => (
            <FaCalendarAlt style={{color: color, fontSize: '24px'}}/>
          )
        }}/>
                  <Tab.Screen name="Notifications" component={NotificationScreen} options={{
            tabBarIcon: ({color}) => (
              <FaBell style={{color: color, fontSize: '24px'}}/>
            ),
            tabBarBadge: 3
          }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => {
            return (
            <FaPortrait style={{color: color, fontSize: '24px'}}/>
          )}
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
