
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native'

export const requestUserPermission = async () => {
    try {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        console.log('Authorization status:', enabled);
        getToken();

    }
    catch (error) {
        console.log('Authorization error:', error);
    }



}

const getToken = async () => {
    const devicesToken = await AsyncStorage.getItem('devicesToken');
    console.log("dd", devicesToken)
    if (!devicesToken)
        try {
            const devicesToken = await messaging().getToken();
            await AsyncStorage.setItem('devicesToken', devicesToken)
            console.log(devicesToken)
        } catch (e) {
            console.log("error:", e)
        }

}

export const NotificationListner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
    });

    messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    // messaging().onMe
}




