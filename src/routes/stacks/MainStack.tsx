import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { setLanguages } from '@redux/languages/actions';
import HomePreCall from '@scenes/HomePreCall';
import LoginPage from '@scenes/LoginPage';
import InterpreterLogin from '@scenes/LoginPage/InterpreterLogin';
// import { userLoginPayload } from '@redux/loginReq/selectors';
import TabBar from '@scenes/TabBar';
import VideoCallScreen from '@scenes/VideoCallScreen';
import { FC } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getLanguages } from '../../commons/exportFunction';

const MainStack = createStackNavigator();

export const MainStackScreen: FC = () => {
  const dispatch = useDispatch();
  // const user = useSelector(userLoginPayload)
  // const storeToken = async() => {
  //     try{
  //         await AsyncStorage.setItem('@access-token', user.accessToken)
  //     } catch(err){
  //         console.log('err storage token')
  //     }
  // }
  // React.useEffect(() => {
  //     storeToken()
  // })
  const [token, setToken] = React.useState<string | null>(null);
  const getToken = async () => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem('@access-token');

      if (data !== null) {
        setToken(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getToken();
  }, [token]);
  console.log('token:', token);
  React.useEffect(() => {
    getLanguages()
      .then(data => {
        dispatch(setLanguages(data));
        // console.log(data);
      })
      .catch(error => console.log(error));
  });
  return (
    <MainStack.Navigator initialRouteName="TabBar">
      {token === null ? (
        <MainStack.Screen
          name="Login"
          component={VideoCallScreen}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      ) : (
        <MainStack.Screen
          name="TabBar"
          component={TabBar}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
      )}
      <MainStack.Screen
        name="InterpreterLogin"
        component={InterpreterLogin}
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
          headerTitleAlign: 'center',
        }}
      />
      <MainStack.Screen
        name="VideoCallScreen"
        component={VideoCallScreen}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
    </MainStack.Navigator>
  );
};
