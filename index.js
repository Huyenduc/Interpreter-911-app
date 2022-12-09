/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import React from 'react';
import notifee, { EventType, AndroidImportance } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import {onDisplayNotification} from "./src/notification/notiffe";



messaging().setBackgroundMessageHandler(async () => {
  await onDisplayNotification();
});

function HeadlessCheck({ isHeadless }) {


  if (isHeadless) {
    console.log("Oooo", isHeadless)

    // App has been launched in the background by iOS, ignore
    return null;
  } 

  return <App />;
}

// Remove YellowBox on Debug application screen
LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => HeadlessCheck);
