import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, images, icons, FONTS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { gettopheadlines } from '../../../api/auth'


const Foryou = () => {

    const [click, setClick] = useState(false)

    const data = [
        {
            id: 1,
            profilePics: images.lit,
            name: "jane Cooper",
            time: "3 hours ago",
            title: "FTX stops sales of $500M",
            text: "stake in Ai start-up",
            section: "Business",
            image: images.bitcoin,
            backgroundColor: "pink",
            textcolor: "yellow",
            favourite: icons.bookmark

        },
        {
            id: 2,
            profilePics: images.hema,
            name: "Wade Warren",
            time: "4 hours ago",
            title: "Google to block Canadian",
            text: "news following meta tread",
            section: "Technology",
            image: images.goggle,
            backgroundColor: "lightblue",
            textcolor: "blue",
            favourite: icons.bookmark2

        },
        {
            id: 3,
            profilePics: images.smile,
            name: "Jerome Bell",
            time: "3 hours ago",
            title: "The Gop Must Get in the",
            text: "Swing (State) of Things",
            section: "Politics",
            image: images.american,
            backgroundColor: "pink",
            textcolor: "red",
            favourite: icons.bookmark2

        }
    ]
    const handleNews = async () => {
        try {
            const cool = await gettopheadlines()
            // promise returned 
            console.log('data fetced', cool)


            navigation.navigate("newsscreen")

        } catch (error) {

            console.log("Error during  getting news", error)
        }
    }
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={{ marginTop: SIZES.h3 }}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={handleNews}>
                                <View style={{ backgroundColor: COLORS.white, padding: SIZES.h3, marginVertical: SIZES.h5, flexDirection: "row", alignItems: "center" }}>
                                    <Image source={item.image} style={{ resizeMode: "contain", height: SIZES.height * 0.15, width: SIZES.width, marginRight: "auto", right: SIZES.h1 * 5 }} />


                                    <View style={{ marginRight: SIZES.h3 }}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                            <Image source={item.profilePics} style={{ borderRadius: SIZES.base * 1.3, height: SIZES.h2, width: SIZES.h2, resizeMode: "contain" }} />
                                            <Text style={{ ...FONTS.body5, }}>{item.name}</Text>
                                            <Text style={{ ...FONTS.body5 }}> {item.time}</Text>
                                        </View>
                                        <View style={{ marginTop: SIZES.h5 }}>
                                            <Text style={{ ...FONTS.body4, color: COLORS.dark2 }} > {item.title}</Text>
                                            <Text style={{ ...FONTS.body4, color: COLORS.dark2 }}>{item.text}</Text>
                                        </View>

                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: SIZES.h5 }}>
                                            <View style={{ height: SIZES.h3 * 1.5, width: SIZES.h1 * 2.8, borderRadius: SIZES.base, alignItems: "center", backgroundColor: item.backgroundColor }}>
                                                <Text style={{ ...FONTS.body5, color: item.textcolor }}>{item.section}</Text>
                                            </View>


                                            <Image source={item.favourite} style={{ height: SIZES.h3, width: SIZES.h3 }} />




                                        </View>
                                    </View>

                                </View>
                                <View style={{ height: 0.5, backgroundColor: COLORS.black }} >

                                </View>
                            </TouchableOpacity>

                        )
                    }} />
            </View>
            <Text>Foryou</Text>
        </View>
    )
}

export default Foryou

const styles = StyleSheet.create({
    page: {
        backgroundColor: COLORS.white,
        flex: 1,
    }
})