import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useContext } from 'react';

import { useState } from 'react';
import { useReducer } from 'react';
import  {Context} from '../context/BlogContext'
import { useRoute } from '@react-navigation/native';
import {EvilIcons} from '@expo/vector-icons'





export default function ShowScreen({ navigation }) {
    
    const {state} = useContext(Context)
    const route = useRoute();
    const { id } = route.params;
    const blogPost = state.find((blogPost) => blogPost.id === id)
    return (
        <View>

           

          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id:id})}>
            <EvilIcons style={styles.iconStyle} name="pencil" size={35} />
            </TouchableOpacity>



            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        alignSelf:'flex-end',
        marginVertical:10
    }

})
