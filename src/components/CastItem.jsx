import { StyleSheet, Image,Text, View } from 'react-native'
import React from 'react'

export default function CastItem({ actor }) {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;


    return (
        <View style={styles.container}>
            {actor.profile_path && <Image source={{ uri }} style={styles.image} />}
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{actor.name}</Text>

                <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10,
        marginLeft: 10,
        paddingRight: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    actorInfo: {
        marginTop: 2,
        marginLeft: 10,
    }
})