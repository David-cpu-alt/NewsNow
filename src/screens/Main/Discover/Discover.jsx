import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, icons } from '../../../constants'
import Toptab from '../../../navigators/Tab/Toptab/Toptab'

const Discover = () => {
    return (
        <SafeAreaView style={styles.page}>
            <Text style={{ ...FONTS.body2, color: COLORS.black }}>Discover</Text>
            <Text style={{ marginTop: SIZES.h6 }}>News from around the world </Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", padding: SIZES.h6, borderWidth: 1, marginTop: SIZES.h3, borderRadius: SIZES.base, borderColor: COLORS.gray4 }}>
                <Image source={icons.search} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                <TextInput
                    placeholder=' Search  items, collections, and accounts'
                    style={{ right: SIZES.h3 }} />
            </View>
            <Toptab />
        </SafeAreaView>
    )
}

export default Discover

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        padding: SIZES.h5
    }
})