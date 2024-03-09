import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Toptab from '../../../navigators/Tab/Toptab/Toptab'
import { SIZES, images, icons } from '../../../constants'



const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Image source={images.news} style={{ height: SIZES.h2, width: SIZES.h2, }} />
                <Text style={{ marginRight: SIZES.h1 * 6, fontWeight: "bold" }}> Nows.co</Text>
                <Image source={icons.search} style={{ height: SIZES.h3, width: SIZES.h3, marginRight: SIZES.h6 }} />
                <Image source={images.circle} style={{ height: SIZES.h1 * 1.2, width: SIZES.h1 * 1.2 }} />
            </View>
            {/* carousel */}


            <Toptab />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: SIZES.h5
    }
})