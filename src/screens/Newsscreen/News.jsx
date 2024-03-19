import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SIZES } from '../../constants'

const News = ({ route }) => {

    const title = route.params.item.title
    return (
        <View style={styles.page}>

            <Text style={{ marginTop: SIZES.h5 }}>{title}</Text>
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: SIZES.h5
    }
})