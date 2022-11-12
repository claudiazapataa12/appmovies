import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import Carousel from "react-native-snap-carousel-v4"
import { Component } from 'react'
import Movie from '../components/Movie'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HorizontalSlider from '../components/HorizontalSlider'
import { useMovies } from '../hooks/useMovies'

const { width: whindowWidth } = Dimensions.get("window")

export default function HomeScreens() {
    const { top } = useSafeAreaInsets()
    const navigation = useNavigation()

    const {isLoading,peliculas}=useMovies()
   
    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center"
            }}>
                <ActivityIndicator color="red" size={80} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 10 }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={peliculas.nowPlaying}
                        renderItem={({ item }) => <Movie movie={item} />}
                        sliderWidth={whindowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>
                {/* populares */}

                <HorizontalSlider movies={peliculas.popular}
                    title="popular" />
                {/* top */}
                <HorizontalSlider movies={peliculas.topRated}
                    title="Top Rated" />
                {/* upcoming */}
                <HorizontalSlider movies={peliculas.upcoming}
                    title="Upcoming" />

                {/* <View style={{ height:260}}>
                    <Text style={{fontSize:30, fontWeight: "bold" , marginLeft:10}}>Popular
                    </Text>

                    <FlatList
                    data={peliculas.popular}
                    renderItem={({ item }) =>(<Movie movie={item} width={140} height={200} />
                    )}
                    keyExtractor={(item)=>item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    />
                    
                </View> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})