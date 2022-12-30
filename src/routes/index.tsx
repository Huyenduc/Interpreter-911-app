import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { FC } from 'react';
import { routeOverlayOption } from './routeOptions';
import { MainStackScreen } from './stacks/MainStack';
import LoginPage from '@scenes/LoginPage'
import RegisterPage from '@scenes/RegisterPage';
import HomePreCall from '@scenes/HomePreCall';
import VideoCallScreen from '@scenes/VideoCallScreen';
import CallWaiting from '@scenes/CallWaiting';
import TabBar from '@scenes/TabBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import { loadingGetStatus } from '@redux/loading/selectors';
import { getLanguages } from '../commons/exportFunction';
import { setLanguages } from '@redux/languages/actions';
import { loadingSet, loadingReset, isLoggedIn } from '@redux/loading/actions';
import { ILoading } from '@redux/loading/reducers';
const RootStack = createStackNavigator();

export const RootStackScreen: FC = () => {
  const dispatch = useDispatch()
  // const [token, setToken] = React.useState<string | null>(null)
  

  React.useEffect(() => {
    getLanguages().then((data) => {
        dispatch(setLanguages(data))
    }).catch(error => console.log(error));
  })
  return (
    <RootStack.Navigator screenOptions={{ presentation: 'modal', ...routeOverlayOption }}>
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
