import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SIZES } from '../../constants'

const News = ({ route }) => {

    const title = route.params.item.title;
    const image = route.params.item.img
    return (
        <View style={styles.page}>
            <Image source={image} style={{ height: SIZES.h2, width: SIZES.h3 }} />
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