import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';

export default function IncomingCall(){
    const navigation = useNavigation<GenericNavigationProps>()
    return(
        <View style={styles.container}>
            <View style={styles.topCont}>
                <Text style={styles.titleName}>
                    Incoming Call
                </Text>
                <Icon name="person-circle-outline" color='blue' size={130}/>
                <Text style={styles.username}>
                    John Terry
                </Text>
                {/* <Text style={styles.phoneNumber}>
                    +1232468795
                </Text> */}
            </View>
            <View style={styles.botCont}>
                <View style={styles.buttonCont}>
                    <Text>Accept</Text>
                    <TouchableOpacity style={styles.acceptButton}
                        onPress={() => navigation.navigate('Main', {screen: 'VideoCallScreen'})}
                    >
                        <Icon name="call" size={40} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonCont}>
                    <Text>Reject</Text>
                    <TouchableOpacity style={styles.rejectButton} 
                        onPress={() => navigation.goBack()}
                    >
                        <Icon name="call" size={40} 
                        style={[styles.iconReject,{transform: [{rotate: "135deg"}]}]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}