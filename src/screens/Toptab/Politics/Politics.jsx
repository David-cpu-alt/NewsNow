import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'


const Politics = () => {
    return (
        <View style={styles.page}>
            <Text>Politics</Text>
        </View>
    )
}

export default Politics

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})