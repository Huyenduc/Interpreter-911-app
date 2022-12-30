import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginPage from '@scenes/LoginPage'
import RegisterPage from '@scenes/RegisterPage';
import HomePreCall from '@scenes/HomePreCall';
import RateScreen from '@scenes/RateScreen';
import InterpreterLogin from '@scenes/LoginPage/InterpreterLogin';
// import { userLoginPayload } from '@redux/loginReq/selectors';
import VideoCallScreen from '@scenes/VideoCallScreen';
import CallWaiting from '@scenes/CallWaiting';
import IncomingCall from '@scenes/IncomingCall';
import React from 'react';
import TabBar from '@scenes/TabBar';
const MainStack = createStackNavigator();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName='Login'>
        <MainStack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="TabBar"
        component={TabBar}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Register"
        component={RegisterPage}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="IncomingCall"
        component={IncomingCall}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="HomePreCall"
        component={HomePreCall}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="InterpreterLogin"
        component={InterpreterLogin}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="VideoCallScreen"
        component={VideoCallScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="RateScreen"
        component={RateScreen}
        options={{
          headerShown: false,
        }}
      />
       <MainStack.Screen
        name="CallWaiting"
        component={CallWaiting}
        options={{
          headerShown: false
        }}
      />
    </MainStack.Navigator>
  );
};
