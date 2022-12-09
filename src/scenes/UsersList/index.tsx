import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect } from 'react';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

import { onDisplayNotification } from "../../notification/notiffe";



export default function TestIndex() {

  useEffect(() => {



    // messaging().onNotificationOpenedApp(remoteMessage => {
    //   console.log(
    //     'Notification caused a:'
    //   );
    // });

    // Check whether an initial notification is available
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:'
    //       );
    //     }
    //   });
    const channelId2 = notifee.createChannel({
      id: 'custom-sound',
      name: 'Important Notifica',
      importance: AndroidImportance.HIGH,
      // sound: 'hollow',
    });
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('d');
          break;
        case EventType.ACTION_PRESS:
          if (detail.pressAction?.id === "cry") {
            console.log("cry");
          } else if (detail.pressAction?.id === "dance") {
            console.log("dance")
          }
          break;
      }
    });

  }, [])
  function onMessageReceived(message: any) {
    console.log(message.data.notifee)
    notifee.displayNotification(JSON.parse(message.data.notifee));
  }

  messaging().onMessage(onMessageReceived);
  return (
    <View>
      <Button title="Display Notification" onPress={() => onDisplayNotification()} />
    </View>
  )
}