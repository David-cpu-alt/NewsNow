import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Bottomtab from '../Tab/Bottomtab/Bottomtab';

const Appstack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Bottomtab" component={Bottomtab} />
        </Stack.Navigator>
    )
}

export default Appstack

const styles = StyleSheet.create({})