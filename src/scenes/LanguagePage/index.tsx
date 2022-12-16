import * as React from 'react'
import {
    Text,
    View,
    BackHandler
} from 'react-native'
import { Button } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector, useDispatch } from 'react-redux'
import { userLoginPayload } from '@redux/loginReq/selectors'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { GenericNavigationProps } from '@routes/types'
import { removeAccessToken } from '@redux/loginReq/actions'

const LanguagePage = () => {
    const navigation = useNavigation<GenericNavigationProps>()
    const dispatch = useDispatch()
    // useFocusEffect(
    //     React.useCallback(() => {
    //         const onBackPress = () => {
    //             return true;
    //         };
        
    //         BackHandler.addEventListener('hardwareBackPress', onBackPress);
            
    //         return () =>
    //             BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    //     }, []),
    // );
    const delToken = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log(error);
        }
    }
    const handleLogout = () => {
        delToken();
        dispatch(removeAccessToken())
        navigation.navigate('Main', {screen: 'Login'})
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