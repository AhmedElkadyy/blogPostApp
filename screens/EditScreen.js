import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { useReducer } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';

import { Context } from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

export default function EditScreen({ navigation }) {
    const route = useRoute();
    const { id } = route.params;
    
  

    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id)

    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)


    
    return (
        <View>
           
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} autoCorrect={false} />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} autoCorrect={false} />
            <Button title="Edit Blog Post" onPress={() => {
                editBlogPost(id, title, content)
                navigation.navigate('Home')
            }} />


        </View>
    )
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


})


