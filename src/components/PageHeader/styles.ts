import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },

    backImage: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    buttonArrow: {
        width: '40%',
        marginLeft: 20
    },

    iconArrow: {
        width: '20%',
        height: '70%'
    },

    logoContainer: {
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginRight: 10
    },

    iconFavicon: {
        width: '30%',
        height: 30
    },

    logo: {
        color: '#FFF',
        fontFamily: 'JosefinSans_500Medium',
    },

    title: {
        marginTop: -40,
        marginLeft: 30,
        color: '#FFF',
        fontFamily: 'Archivo_400Regular',
        maxWidth: 160,
        marginVertical: 40
    },

});

export default styles;