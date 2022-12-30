import { StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
    settingCont:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    headerCont:{
        width: '100%',
        height: '10%',
        shadowColor: '#000',
        backgroundColor: '#F0f0f0',
        shadowOffset: {
        width: 0,
        height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImage:{
        width: '25%',
        height: 50,
    },
    avatarCont:{
        width: '100%',
        height: '10%',
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'coral',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    userInformation:{
        width: '100%',
        height: '70%',
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 20
    },
    userInforText:{
        fontSize: 16,
        marginBottom: 8,
        color: '#404040'
    },
    logoutCont:{
        width: '100%',
        height: '10%',
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButton:{
        width: '80%',
        backgroundColor: 'coral',
        height: 45,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8
    },
    logoutText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1
    }
})