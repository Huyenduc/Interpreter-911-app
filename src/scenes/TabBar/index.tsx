import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePreCall from '@scenes/HomePreCall';
import LanguageScreen from '../LanguageScreen/LanguageScreen';
import SettingPage from '@scenes/SettingPage'
import { 
    getAcceptStatus,
    isReject
} from '../../commons/exportFunction';
import { useSelector } from 'react-redux';
import { userLoginPayload } from '@redux/loginReq/selectors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

export default function TabBar(){
    const Tab = createBottomTabNavigator()
    const [accepted, setAccepted] = React.useState(false)
    const userInfor = useSelector(userLoginPayload)
    const saveToken = async () => {
        // set Data to Storage
        try {
            if(userInfor.accessToken !== ""){
                await AsyncStorage.setItem('@access-token', userInfor.accessToken);
            }
        } catch (error) {
            console.log(error);
        } 
      };

    React.useEffect(() =>{
        getAcceptStatus().then(json => {
            console.log('isAccepted: ', json.isAccepted)
            if(json.isAccepted === "accepted"){
                setAccepted(true)
            }
        })
        .catch(error => console.log(error))
        isReject()
    },[])
    React.useEffect(() => {
        saveToken();
    })
    return (
        <Tab.Navigator 
            initialRouteName={accepted ? 'LanguagePage' : 'HomePreCall'}
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#c5c5c5',
                tabBarStyle: {
                    backgroundColor: '#da0000'
                },
                
            }}
        >
                <Tab.Screen 
                    name="Languages" 
                    component={LanguageScreen} 
                    options={{
                        tabBarIcon: ({focused}:any) => (
                            <Ionicons size={18} name='earth' color={focused ? 'white' : '#c5c5c5'}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name="Call" 
                    component={HomePreCall} 
                    options={{
                        tabBarIcon: ({focused}:any) => (
                            <Ionicons size={18} name='call' color={focused ? 'white' : '#c5c5c5'}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={SettingPage} 
                    options={{
                        tabBarIcon: ({focused}:any) => (
                            <Ionicons size={18} name='settings-sharp' color={focused ? 'white' : '#c5c5c5'}/>
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        )
    
}