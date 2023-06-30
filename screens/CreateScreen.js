import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useReducer } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useContext } from "react";
import { Context } from "../context/BlogContext";

export default CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { addBlogPost } = useContext(Context);
    return (
        <View>
       
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} autoCorrect={false} />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} autoCorrect={false} />
       

        <Button title="Add Blog Post" onPress={() => {
            addBlogPost(title, content)
            navigation.navigate('Home')
            
        }} />

        



        </View>
    );
    }

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }


    
});

