import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}/>
            <View style={styles.textTwoStyle}/>
            <View style={styles.textThreeStyle}/>

        </View>
    )
};


const styles = StyleSheet.create({

    viewStyle:{
        borderColor:'black', 
        borderWidth:3,
        height:200,
        alignItems:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
       
        
    },
    textOneStyle:{
        backgroundColor:"red",
        width:50,
        height:50,
        // borderWidth:3,
        // padding:5,
        // flex:20,
        alignSelf:'flex-start'
    },
    textTwoStyle:{
        backgroundColor:'green',
        // borderWidth:3,
        // padding:5,
        // marginTop:50,
        width:50,
        height:50,
        top:50,
        // flex:20,
        // alignSelf:'flex-end',
        // ...StyleSheet.absoluteFillObject,
        // position:'relative',

    },
    textThreeStyle:{
        backgroundColor:'blue',
        // borderColor:'red', 
        // borderWidth:3,
        // paddingTop:5,
        width:50,
        height:50,
        // flex:60,
        alignSelf:'flex-start',
        // position:'absolute',
    }

});

export default BoxScreen;