import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Bottomtab from '../Tab/Bottomtab/Bottomtab';
import News from '../../screens/Newsscreen/News';

const Appstack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Bottomtab" component={Bottomtab} />
            <Stack.Screen name="newsscreen" component={News} />
        </Stack.Navigator>
    )
}

export default Appstack

const styles = StyleSheet.create({})