import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import landingImg from '../../assets/images/teste.png';
import Signin from '../../assets/icons/escrita.png';
import Login from '../../assets/icons/sair.png';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToMenu() {
        navigate('Menu');
    }

    function handleNavigateToLogin() {
        navigate('Login');
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={landingImg} style={styles.backImage} >
                <Text style={styles.logo}> VAMOW </Text>
                <Text style={styles.slogan}>O SEU APLICATIVO DE EVENTO</Text>
                <Text style={styles.title}>
                    Seja bem-vindo{'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>
                <View  style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={handleNavigateToLogin} style={[styles.button, styles.buttonPrimary]}>
                        <Image style={styles.signinIcon} source={Signin} />
                        <Text style={styles.buttonText}>Iniciar com cadastro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleNavigateToMenu} style={[styles.button, styles.buttonSecondary]}>
                        <Image style={styles.loginIcon} source={Login} />
                        <Text style={styles.buttonText}>Iniciar sem cadastro</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Landing;