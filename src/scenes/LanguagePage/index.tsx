import * as React from 'react'
import {
    Text,
    View,
    BackHandler
} from 'react-native'
import { Button } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'
import { userLoginPayload } from '@redux/loginReq/selectors'
import { useFocusEffect } from '@react-navigation/native'

const LanguagePage = () => {
    const user = useSelector(userLoginPayload)
    const storeToken = async() => {
        try{
            await AsyncStorage.setItem('@access-token', user.accessToken)
        } catch(err){
            console.log('err storage token')
        }
    }
    React.useEffect(() => {
        storeToken()
    })
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                return true;
            };
        
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),
    );
    const handleLogout = () => {
        AsyncStorage.removeItem('@access-token')
    }
    return(
        <View>
            <Text>Language Page</Text>
            <Button
                onPress={handleLogout}
                colorScheme='blue'
            >
                <Text>log out</Text>
            </Button>
        </View>
    )
}
export default LanguagePage