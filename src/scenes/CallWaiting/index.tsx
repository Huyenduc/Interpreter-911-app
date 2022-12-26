import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles';

 const CallWaiting =()=> {
    return (
        <View>
            <Text>911</Text>
            <View>
                <Image source={require('../../assets/images/image.png')} />
            </View>
            <View>
                <Text>
                    Connecting...
                </Text>
            </View>
        </View>
    )
}
export default CallWaiting;