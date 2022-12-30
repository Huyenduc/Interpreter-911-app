import CToaster from '@components/CToaster';
import { messageHandlerReset } from '@redux/messageHandler/actions';
import { messageHandlerFullInfo } from '@redux/messageHandler/selectors';
import { RootStackScreen } from '@routes';
import { StatusBar, useToast } from 'native-base';
import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import { propsSetRoomname, propsSetToken } from '@redux/propsHandler/actions';
import { useNavigationBackAction } from '@hooks/useNavigationBack';
import { GenericNavigationProps } from '@routes/types';
import { useNavigation } from '@react-navigation/native';

const InnerApp: FC = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const toastIdRef = useRef();
  const hasGeneralMessage = useSelector(messageHandlerFullInfo);

  const navigate = useNavigation<GenericNavigationProps>();

  const onCloseToast = useCallback(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, []);

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage.data)
    if (remoteMessage.data) {
      dispatch(propsSetRoomname(remoteMessage.data.roomName))
      dispatch(propsSetToken(remoteMessage.data.tokenTwilio))
      navigate.navigate('Main', {screen: 'IncomingCall'})

    }
  });

  useEffect(() => {
    if (hasGeneralMessage?.message) {
      toastIdRef.current = toast.show({
        render: () => (
          <CToaster status={hasGeneralMessage?.status} title={hasGeneralMessage?.message} onClose={onCloseToast} />
        ),
        placement: 'top',
        onCloseComplete: () => dispatch(messageHandlerReset()),
        duration: 5000,
      });
    }
  }, [hasGeneralMessage, dispatch]);

  return (
    <>
      <StatusBar barStyle="light-content"  />

      <RootStackScreen />
    </>
  );
};

export default InnerApp;
