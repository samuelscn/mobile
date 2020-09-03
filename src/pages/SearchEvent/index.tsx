import React from 'react';
import { View, ImageBackground, Text, Image, ScrollView, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import EventList from '../../components/EventList';

import styles from './styles';

function SearchEvent() {
    return (
        <View style={styles.container}>
            <PageHeader title="Eventos          Disponíveis" >
                <Text>Teste</Text>
            </PageHeader>
            <ScrollView 
                style={styles.eventList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <EventList/>
                <EventList/>
                <EventList/>
                <EventList/>
            </ScrollView>
        </View>
    )
}

export default SearchEvent;