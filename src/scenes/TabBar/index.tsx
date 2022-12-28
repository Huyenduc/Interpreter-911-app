import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import HomePreCall from '@scenes/HomePreCall';
import LanguagePage from '@scenes/LanguagePage';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAcceptStatus, isReject } from '../../commons/exportFunction';

export default function TabBar() {
  const navigation = useNavigation<GenericNavigationProps>();
  const Tab = createBottomTabNavigator();
  const [accepted, setAccepted] = React.useState(false);
  React.useEffect(() => {
    getAcceptStatus()
      .then(json => {
        console.log('isAccepted: ', json.isAccepted);
        if (json.isAccepted === 'accepted') {
          setAccepted(true);
        }
      })
      .catch(error => console.log(error));
    isReject();
  }, []);
  return (
    <Tab.Navigator
      initialRouteName={accepted ? 'LanguagePage' : 'HomePreCall'}
      screenOptions={{
        tabBarActiveTintColor: 'coral',
      }}>
      <Tab.Screen
        name="Languages"
        component={LanguagePage}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons size={18} name="earth" />,
          tabBarActiveTintColor: 'coral',
        }}
      />
      <Tab.Screen
        name="Call"
        component={HomePreCall}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons size={18} name="call" />,
        }}
      />
    </Tab.Navigator>
  );
}
