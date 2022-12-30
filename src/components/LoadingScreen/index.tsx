import * as React from 'react';
import {
    View,
    Text
} from 'react-native'
import { StyleSheet} from 'react-native';
import {Spinner, HStack, Heading} from 'native-base'
export default function LoadingScreen(){
    return (
        <View style={styles.container}>
                <Spinner color="red.400" size={20} fontWeight='bold'/>
                {/* <Heading color="primary.500" fontSize="md">
                    
                </Heading> */}
                <Text style={styles.text}>Checking 
                    Auth</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#da0000',
        marginLeft: 10
    }
})