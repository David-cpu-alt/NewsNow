import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Foryou from '../../../screens/Toptab/Foryou/Foryou';
import Technology from '../../../screens/Toptab/Technology/Technology';
import Politics from '../../../screens/Toptab/Politics/Politics';
import Business from '../../../screens/Toptab/Business/Business';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../../constants';

const Toptab = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarLabelStyle: { ...FONTS.body4b, textTransform: "none" },
            tabBarIndicatorStyle: { backgroundColor: COLORS.black, height: SIZES.height * 0.003, width: SIZES.width * 0.15 },
            tabBarStyle: { backgroundColor: COLORS.white, elevation: 0, marginTop: SIZES.h3 },



        })}>
            <Tab.Screen name="For you" component={Foryou} options={{}} />
            <Tab.Screen name="Technology" component={Technology} />
            <Tab.Screen name="Politics" component={Politics} />
            <Tab.Screen name="Business" component={Business} />
        </Tab.Navigator>




    )
}

export default Toptab

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})