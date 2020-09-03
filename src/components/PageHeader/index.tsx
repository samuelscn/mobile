import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import Arrow from '../../assets/icons/seta-esquerda.png';
import Favicon from '../../assets/icons/favicon.png';
import landingImg from '../../assets/images/teste.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Filter from '../Filter';

interface PageHeaderProps {
    title: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Menu');
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={landingImg} style={styles.backImage}>
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={handleGoBack} style={styles.buttonArrow}>
                        <Image style={styles.iconArrow} source={Arrow} resizeMode="contain"/>
                    </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image style={styles.iconFavicon} source={Favicon} resizeMode="contain"/>
                        <Text style={styles.logo}>VAMOW</Text>
                    </View>
                </View>
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>
            
        </View>
    )
}

export default PageHeader;