import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

export default function Movie({ movie, height = 420, width = 300 }) {
  const navigation = useNavigation();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailScreen", movie)}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7
      }}
    >
      <View style={styles.imgContainer}>
        <Image source={{ uri }} style={styles.image}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imgContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
  }

})