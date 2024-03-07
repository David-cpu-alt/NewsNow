import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Appstack from './src/navigators/AppStack/Appstack'

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AppStack" component={Appstack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})