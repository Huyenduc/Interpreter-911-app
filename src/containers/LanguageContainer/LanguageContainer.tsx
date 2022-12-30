import 'react-native-gesture-handler';
import { LangugeItem } from '@components/LanguageItem/LangugeItem';
import { ILanguageItem } from '@components/LanguageItem/interface';
import { FlatList } from 'native-base';
import React, { useState, useEffect} from 'react';
import {
  Alert,
  Platform,
} from 'react-native';
import {
  checkMultiple,
  request,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import { 
  propsSetToken
} from '@redux/propsHandler/actions';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { data } from './data';

const LanguageContainer = () => {
  const url = 'https://5153-113-160-172-8.ap.ngrok.io/'
  const navigation = useNavigation<GenericNavigationProps>();
  const dispatch = useDispatch()
  const datas = data;
  console.log(datas);
  const _checkPermissions = (callback?: any) => {
    const iosPermissions = [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE];
    const androidPermissions = [
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.RECORD_AUDIO,
    ];
    checkMultiple(
    Platform.OS === 'ios' ? iosPermissions : androidPermissions,
    ).then((statuses) => {
    const [CAMERA, AUDIO] =
        Platform.OS === 'ios' ? iosPermissions : androidPermissions;
    if (
        statuses[CAMERA] === RESULTS.UNAVAILABLE ||
        statuses[AUDIO] === RESULTS.UNAVAILABLE
    ) {
        Alert.alert(
        'Error',
        'Hardware to support video calls is not available',
        );
    } else if (
        statuses[CAMERA] === RESULTS.BLOCKED ||
        statuses[AUDIO] === RESULTS.BLOCKED
    ) {
        Alert.alert(
        'Error',
        'Permission to access hardware was blocked, please grant manually',
        );
    } else {
        if (
        statuses[CAMERA] === RESULTS.DENIED &&
        statuses[AUDIO] === RESULTS.DENIED
        ) {
        requestMultiple(
            Platform.OS === 'ios' ? iosPermissions : androidPermissions,
        ).then((newStatuses) => {
            if (
            newStatuses[CAMERA] === RESULTS.GRANTED &&
            newStatuses[AUDIO] === RESULTS.GRANTED
            ) {
            callback && callback();
            } else {
            Alert.alert('Error', 'One of the permissions was not granted');
            }
        });
        } else if (
        statuses[CAMERA] === RESULTS.DENIED ||
        statuses[AUDIO] === RESULTS.DENIED
        ) {
        request(statuses[CAMERA] === RESULTS.DENIED ? CAMERA : AUDIO).then(
            (result) => {
            if (result === RESULTS.GRANTED) {
                callback && callback();
            } else {
                Alert.alert('Error', 'Permission not granted');
            }
            },
        );
        } else if (
        statuses[CAMERA] === RESULTS.GRANTED ||
        statuses[AUDIO] === RESULTS.GRANTED
        ) {
        callback && callback();
        }
    }
    });
};

useEffect(() => {
    _checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  const onCall = React.useCallback(() => {
    
  }, []);

  const onCallVideo = React.useCallback(() => {
    _checkPermissions(() => {
      fetch(`${url}getToken?userName=duc`)
          .then((response) => {
          console.log("connect",response)

          if (response.ok) {
              response.text().then((jwt) => {
              dispatch(propsSetToken(jwt))
              // navigation.navigate('Main', {screen: 'VideoCallScreen'});
              navigation.navigate('VideoCallScreen');
              return true;
              });
          } else {
              response.text().then((error) => {
              Alert.alert(error);
              });
          }
          })
          .catch((error) => {
          console.log('error', error);
          Alert.alert('API not available');
          });
      });
  }, []);

  const renderItem = ({ item }: { item: ILanguageItem }) =>
    item && (
      <LangugeItem
        languageId={item.languageId}
        type={item.type}
        name={item.name}
        onCall={onCall}
        onCallVideo={onCallVideo}
      />
    );

  return <FlatList data={datas} renderItem={renderItem} />;
};

export default LanguageContainer;
