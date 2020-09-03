import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import SearchEvent from '../pages/SearchEvent';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing}/>
                <Screen name="Menu" component={Menu}/>
                <Screen name="Login" component={Login}/>
                <Screen name="SearchEvent" component={SearchEvent}/>
                <Screen name="Study" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;