import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        padding: 10,
    },

    avatar: {
        width: '100%', 
        borderRadius: 8
    },

    eventName: {
        marginTop: 5,
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180'
    },

    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },

    data: {
        marginRight: 30, 
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180'
    },

    local: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180'
    },

    favbutton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly', 
    },

    vamowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#C70039',
        width: '70%',
        height: 56,
        borderRadius: 8,
        padding: 8
    },

    icon: {
        width: 30,
        height: 30,
    },

    vamowText: {
        color: '#FFF',
        fontFamily: 'Archivo_400Regular',
        fontSize: 15,
        marginRight: 15
    },

});

export default styles;