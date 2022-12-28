import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePreCall from '@scenes/HomePreCall';
import LanguagePage from '@scenes/LanguagePage';
import { 
    getAcceptStatus,
    isReject
} from '../../commons/exportFunction';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabBar(){
    const Tab = createBottomTabNavigator()
    const [accepted, setAccepted] = React.useState(false)
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
    return (
        <Tab.Navigator 
            initialRouteName={accepted ? 'LanguagePage' : 'HomePreCall'}
            screenOptions={{
                tabBarActiveTintColor: 'coral',
            }}

        >
                <Tab.Screen 
                    name="Languages" 
                    component={LanguagePage} 
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Ionicons size={18} name='earth'/>
                        ),
                        tabBarActiveTintColor: 'coral'
                    }}
                />
                <Tab.Screen 
                    name="Call" 
                    component={HomePreCall} 
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Ionicons size={18} name='call'/>
                        )
                    }}
                />
            </Tab.Navigator>
        )
    
}