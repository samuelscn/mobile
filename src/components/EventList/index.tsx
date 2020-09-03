import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

import hej from '../../assets/images/henejul.jpg';
import Favicon from '../../assets/icons/favicon.png';

interface EventListProps {

}

const EventList: React.FC<EventListProps> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={hej} />
                <Text style={styles.eventName}>Henrique & Juliano</Text>
                <View style={styles.profileInfo}>
                    <Text style={styles.data}>Data: 06/09/2020 </Text>
                    <Text style={styles.local}>Local: Mineirão </Text>
                </View>
                <View style={styles.favbutton}>
                    <TouchableOpacity style={styles.favoriteButton}>
                        <Ionicons name="ios-heart" size={44} color='#c1bccc'/>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.vamowButton}>
                        <Image style={styles.icon} source={Favicon} />
                        <Text style={styles.vamowText}>VAMOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EventList;