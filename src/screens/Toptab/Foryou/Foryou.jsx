import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, SIZES, images, icons, FONTS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import { gettopheadlines } from '../../../api/auth'


const Foryou = () => {

    const [click, setClick] = useState(false)

    const [newsContent, setNewsContent] = useState([])


    const handleNews = async () => {
        try {
            const cool = await gettopheadlines(5)
            // promise returned 
            console.log('object', cool)
            // console.log('data fetced', cool?.articles)

            if (cool?.status === 'ok') {
                let data = cool?.articles
                setNewsContent(data)

            }

        } catch (error) {

            console.log("Error during  getting news", error)
        }
    }

    useEffect(() => {
        handleNews();
    }, [])


    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <View style={{ marginTop: SIZES.h3 }}>
                <FlatList
                    data={newsContent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("newsscreen", { item })}>
                                <View style={{ backgroundColor: COLORS.white, padding: SIZES.h3, marginVertical: SIZES.h5, flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ ...FONTS.body5 }}>{item.title}</Text>
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