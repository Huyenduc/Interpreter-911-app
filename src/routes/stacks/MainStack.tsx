import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginPage from '@scenes/LoginPage'
import RegisterPage from '@scenes/RegisterPage';
import HomePreCall from '@scenes/HomePreCall';
import VideoCallScreen from '@scenes/VideoCallScreen';
import CallWaiting from '@scenes/CallWaiting';
import { FC } from 'react';
import * as React from 'react';

const MainStack = createStackNavigator();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Register"
        component={RegisterPage}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="HomePreCall"
        component={HomePreCall}
        options={{
          headerShown: false,
          headerTitleAlign: 'center'
        }}
      />
      <MainStack.Screen
        name="VideoCallScreen"
        component={VideoCallScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center'
        }}
      />
       <MainStack.Screen
        name="CallWaiting"
        component={CallWaiting}
        options={{
          headerShown: false,
          headerTitleAlign: 'center'
        }}
      />
    </MainStack.Navigator>
  );
};
