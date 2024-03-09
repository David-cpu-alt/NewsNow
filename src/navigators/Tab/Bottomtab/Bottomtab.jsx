import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../../screens/Main/Home/Home';
import Discover from '../../../screens/Main/Discover/Discover';
import Saved from '../../../screens/Main/Saved/Saved';
import Profile from '../../../screens/Main/Profile/Profile';
import { COLORS, SIZES, icons } from '../../../constants';

const Bottomtab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, colour }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? icons.home : icons.home
                    colour = focused ? COLORS.primary : COLORS.black
                } else if (route.name === "Discover") {
                    iconName = focused ? icons.square : icons.square
                    colour = focused ? COLORS.primary : COLORS.black
                } else if (route.name === "Saved") {
                    iconName = focused ? icons.save : icons.save
                    colour = focused ? COLORS.primary : COLORS.black
                } else if (route.name === "Profile") {
                    iconName = focused ? icons.user : icons.user
                    colour = focused ? COLORS.primary : COLORS.black
                }
                return <Image source={iconName} style={{ height: SIZES.h2, width: SIZES.h2, tintColor: colour }} />
            },
            tabBarStyle: {
                backgroundColor: COLORS.white,
                height: SIZES.h4 * 3.5,
                marginBottom: SIZES.h5,
                padding: SIZES.h5 * 0.3,
                width: SIZES.width,
                elevation: 0, // Add this line to remove elevation
            },

            headerShown: false,




        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default Bottomtab

const styles = StyleSheet.create({})