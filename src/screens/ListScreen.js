import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age:'25'},
        {name: 'Friend #3', age:'15'},
        {name: 'Friend #2', age:'45'},
        {name: 'Friend #4', age:'22'},
        {name: 'Friend #5', age:'26'},
        {name: 'Friend #6', age:'35'},
        {name: 'Friend #7', age:'73'},
        {name: 'Friend #8', age:'18'},
        {name: 'Friend #9', age:'27'},
        

    ];


    return (
        <FlatList 
            keyExtractor={(friends)=> friends.name }
            data={friends} 
            renderItem= {({item}) => {
                return<Text style={styles.textStyle}>{item.name} -Age {item.age}</Text>;
            }} 
        />
        
    );
};


const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});


export default ListScreen;
