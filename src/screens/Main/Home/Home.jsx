import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Toptab from '../../../navigators/Tab/Toptab/Toptab'
import { SIZES, images, icons, COLORS } from '../../../constants'
import { ImageSlider } from 'react-native-image-slider-banner'
import { gettopheadlines } from '../../../api/auth'
import { useNavigation } from '@react-navigation/native'
import Carousel from '../../../components/carousel/Carousel'







const Home = () => {

    const navigation = useNavigation();
    //API call 


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Image source={images.news} style={{ height: SIZES.h2, width: SIZES.h2, }} />
                <Text style={{ marginRight: SIZES.h1 * 6.8, fontWeight: "bold" }}> Nows.co</Text>
                <Image source={icons.search} style={{ height: SIZES.h3, width: SIZES.h3, marginRight: SIZES.h5 }} />
                <Image source={images.circle} style={{ height: SIZES.h1 * 1.2, width: SIZES.h1 * 1.2 }} />
            </View>
            <Carousel />


            {/* <View style={{ marginTop: SIZES.h3 * 0.9 }}> */}
            {/* <ImageSlider
                    data={[
                        { img: "https://media.istockphoto.com/id/1470927624/photo/long-exposure-of-the-business-bay-dubai-city-skyline-at-twilight-united-arab-emirates.webp?b=1&s=170667a&w=0&k=20&c=GGz2DLh5DJOiNdKrp0aXYN99imsif22IRhaOmgRpUrI=" },
                        { img: "https://media.istockphoto.com/id/1312550959/photo/the-city-of-london-skyline-at-night-united-kingdom.jpg?s=612x612&w=0&k=20&c=Ro-QI9Khk3I9ILVW4hBc26NEmIViFRGveaqVuvWeVJs=" },
                        { img: "https://www.istockphoto.com/photo/views-of-brisbane-river-and-cbd-from-kangaroo-point-cliff-gm1464306942-497034490" },
                    ]}
                    autoPlay={true}
                    // onItemChanged={(item) => console.log("item", item)}

                    closeIconColor="#fff"

                    caroselImageContainerStyle={{
                        height: SIZES.base * 15,
                        width: SIZES.base * 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: SIZES.base,
                        marginTop: SIZES.h1
                    }}
                    caroselImageStyle={{
                        borderRadius: SIZES.base,
                    }}
                    activeIndicatorStyle={{
                        backgroundColor: COLORS.white,
                        width: 7,
                        height: 7,
                    }}
                    inActiveIndicatorStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: SIZES.base,
                    }}
                    indicatorContainerStyle={{ top: SIZES.base }}

                />
            </View> */}

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