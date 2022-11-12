import { ActivityIndicator, Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'
import MovieDetails from '../components/MovieDetails'
import { useMovieDatails } from '../hooks/useMovieDetails'

const screenHeight = Dimensions.get("screen").height

export default function DetailScreen({ route }) {
  const movie = route.params
  const navigation = useNavigation()

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
   
  const {isLoading,cast,movieFull}=useMovieDatails(movie)

  return (
    <ScrollView>
      <View style={styles.imagenContainer}>
        <View style={styles.imageBoder}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>
          {movie.original_title}
        </Text>

        <Text style={styles.title}>
          {movie.title}
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator color="grey" size={60} />
      ) : (
        <MovieDetails movieFull={movieFull} cast={cast} />
      )}


      {/* boton para volver a home screen */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color="white" size={60} />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imagenContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBoder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: "hidden"
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 5
  }
})