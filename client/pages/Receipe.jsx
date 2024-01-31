import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Receipe() {
    const [in1, setIn1] = useState("")
    const [in2, setIn2] = useState("")
    const [in3, setIn3] = useState("")
    const [in4, setIn4] = useState("")
    const [in5, setIn5] = useState("")

    const combinedString = [in1, in2, in3, in4, in5].filter(Boolean).join(', ')

    const submit = async () => {

        // const apiUrl = 'http://localhost:3001/login';

        const postData = {
            ingredients:combinedString
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            navigation.navigate('ReceipeFinal');
            
        } catch (error) {
            console.error('Fetch error:', error);
        }

    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter the Ingredients</Text>

            <View>
                <Text style={styles.textSmall}>Ingredient 1:</Text>
                <TextInput
                    placeholder="Enter Ingredient 1"
                    value={in1}
                    onChangeText={(text) => setIn1(text)}
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textSmall}>Ingredient 2:</Text>
                <TextInput
                    placeholder="Enter Ingredient 2"
                    value={in2}
                    onChangeText={(text) => setIn2(text)}
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textSmall}>Ingredient 3:</Text>
                <TextInput
                    placeholder="Enter Ingredient 3"
                    value={in3}
                    onChangeText={(text) => setIn3(text)}
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textSmall}>Ingredient 4:</Text>
                <TextInput
                    placeholder="Enter Ingredient 4"
                    value={in4}
                    onChangeText={(text) => setIn4(text)}
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text style={styles.textSmall}>Ingredient 5:</Text>
                <TextInput
                    placeholder="Enter Ingredient 5"
                    value={in5}
                    onChangeText={(text) => setIn5(text)}
                    style={styles.textInput}
                />
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Add More + </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={submit}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    radiocontainer: {
        flex: 1,
        padding: 20,
    },
    textSmall: {
        fontSize: 16,
        fontWeight: 600,
        paddingHorizontal: 20,
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 600,
        padding: 20,
    },
    progreeBar: {
        marginTop: 20,
        padding: 20,
    },
    titleCont: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#3f3f3f",
        padding: 10,
        margin: 10,
        width: 300,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: "#0484ac",
        paddingHorizontal: 50,
        paddingVertical: 8,
        borderRadius: 5,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10
    },
    btnText: {
        fontWeight: 600,
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    radioGroup: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    radioText: {
        marginLeft: 8,
    },
    radioDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#0484ac",
        marginLeft: 8,
    },
});
