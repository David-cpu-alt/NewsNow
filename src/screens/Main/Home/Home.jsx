import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toptab from '../../../navigators/Tab/Toptab/Toptab'



const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Toptab />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    }
})