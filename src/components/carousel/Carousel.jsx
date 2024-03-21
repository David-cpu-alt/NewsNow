import { StyleSheet, Text, View, Flat, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SIZES, images } from '../../constants'
import { SCREEN_WIDTH } from '../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { FONTS } from '../../constants/theme'
const Carousel = () => {
    const carouselData = [
        {
            id: "1",
            img: images.stella,
            topic: "Us stops scientific co-",
            topic2: "operation with Israel in west Bank"
        },
        {
            id: 2,
            img: images.oke
        },
        {
            id: 3,
            img: images.tunde
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    const _handleScroll = (event) => {
        // get the scroll position
        const scrollPosition = event.nativeEvent.contentOffset.x;
        console.log({ scrollPosition })
        // get  the index position of  current active element
        const index = Math.round(scrollPosition / SCREEN_WIDTH);
        console.log({ index })
        // update the index
        setActiveIndex(index)
    }
    // Render dot indicator 
    const _renderDotIndicator = () => {
        return carouselData.map((dot, index) => (
            // if the  active index === index
            <View key={index} style={{ backgroundColor: activeIndex === index ? "green" : "red", height: 10, width: 10, borderRadius: 5, marginHorizontal: SIZES.h5 }} />
        )


        )
    }
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
                data={carouselData}
                horizontal={true}
                // pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onScroll={_handleScroll}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("newsscreen", { item })}>
                            <View style={{ alignItems: "center", marginTop: SIZES.h5 }}>
                                <ImageBackground source={item.img}
                                    style={{ height: SIZES.height * 0.28, width: SIZES.width, resizeMode: "contain", paddingHorizontal: SIZES.h2 }} >
                                    <View style={{ marginTop: SIZES.h3 * 3.8 }}>
                                        <Text style={{ ...FONTS.body2 }}>{item.topic} </Text>
                                        <Text style={{ ...FONTS.body2, }}>{item.topic2}</Text>
                                    </View>

                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    )
                }} />

            <View style={{ flexDirection: "row", justifyContent: "center", bottom: SIZES.h3 }}>
                {_renderDotIndicator()}
            </View>

        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})