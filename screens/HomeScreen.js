import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import BlogContext from '../context/BlogContext'
import { useContext } from 'react'
import { FlatList } from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'


export default function HomeScreen({ navigation }) {
    const {state , addBlogPost, deleteBlogPost ,getBlogPost} = useContext(Context)

    useEffect(() => {
        getBlogPost(); 
        const listener = navigation.addListener('focus', () => {
            getBlogPost();
        });
        return () => {
            listener.remove();
        };
    }, [])
  ;
      

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" style={styles.icon1}/>
            </TouchableOpacity>
          
           <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {

                    return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>
                    <View style={styles.row}>
                   
                    <Text style={styles.title}>{item.title} - {item.content}</Text>


                   <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather name="trash" style={styles.icon}/>
                    </TouchableOpacity>


                  

                    </View>
                    </TouchableOpacity>
                    )


                }}
            />

            </View>
    )
}



const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'

        
    },
    title:{
        fontSize:18
    },

    icon:{
        fontSize:24
    },  
    icon1:{
        fontSize:30,

        marginVertical:10,
        marginHorizontal:10,
        alignSelf:'flex-end'
        
      
        
    }


})

