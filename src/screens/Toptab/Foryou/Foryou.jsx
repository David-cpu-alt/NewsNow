import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images, icons } from '../../../constants'

const Foryou = () => {
    const data = [
        {
            id: 1,
            name: "jane Cooper",
            time: "3 hours ago",
            title: "FTX stops sales of $500M",
            text: "stake in Ai start-up",
            section: "Business",
            image: images.bitcoin,
            favourite: icons.bookmark
        },
        {
            id: 2,
            name: "Wade Warren",
            title: "Google to block Canadian",
            text: "news following meta tread",
            section: "Technology",
            image: images.goggle,
            favourite: icons.bookmark,
        },
        {
            id: 3,
            name: "Jerome Bell",
            title: "The Gop Must Get in the",
            text: "Swing (State) of Things",
            section: "Politics",
            image: images.american,
            favourite: icons.bookmark
        }
    ]
    return (
        <View style={styles.page}>
            <View style={{ marginTop: SIZES.h3 }}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ backgroundColor: COLORS.white, padding: SIZES.h3, marginVertical: SIZES.h5, flexDirection: "row", alignItems: "center" }}>
                                <Image source={item.image} style={{ resizeMode: "contain", height: SIZES.height * 0.15, width: SIZES.width, marginRight: "auto", right: SIZES.h1 * 5 }} />


                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text>{item.name}</Text>
                                        <Text> {item.time}</Text>
                                    </View>
                                    <View style={{ marginTop: SIZES.h5 }}>
                                        <Text> {item.title}</Text>
                                        <Text>{item.text}</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: SIZES.h5 }}>
                                        <Text>{item.section}</Text>
                                        <Image source={item.favourite} style={{ height: SIZES.h4, width: SIZES.h4 }} />
                                    </View>
                                </View>



                            </View>

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