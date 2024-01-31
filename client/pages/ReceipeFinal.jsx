import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ReceipeFinal() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Here's your receipe</Text>

            <Text style={styles.texttitle}>TITLE</Text>

            <Text style={styles.texting}>Ingredients :</Text>
            <Text style={styles.textlong}>1 cup water</Text>
            <Text style={styles.textlong}>1 teaspoon salt</Text>
            <Text style={styles.textlong}>1 large ripe tomato, peeled, seeded, and cut into 1/2 inch cubes</Text>

            <Text style={styles.texting}>Directions :</Text>
            <Text style={styles.textlong}>1 cup water</Text>
            <Text style={styles.textlong}>1 teaspoon salt</Text>
            <Text style={styles.textlong}>1 large ripe tomato, peeled, seeded, and cut into 1/2 inch cubes</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,
        padding: 20,
        textDecorationLine:"underline"
    },
    texttitle: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,
        padding: 20,
    },
    texting: {
        fontSize: 10,
        fontWeight: 400,
        padding: 20,
    },
    textlong: {
        fontSize: 10,
        fontWeight: 400,
        paddingRight:20,
        paddingLeft:20,
        paddingTop:5,
        paddingBottom:5,
    }
});
