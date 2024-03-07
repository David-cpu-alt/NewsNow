import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants'

const Foryou = () => {
    return (
        <View style={styles.page}>
            <Text>Foryou</Text>
        </View>
    )
}

export default Foryou

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.white,
        flex: 1
    }
})