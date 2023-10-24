import React, {useState} from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'


const TextScreen = () => {
    const[name,setName] = useState('')

    return(
        <View>
            <Text>ENTER PASSWORD :</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=> setName(newValue)}
            />
            {/* <Text>My name is {name}</Text> */}
            {name.length < 4 ? <Text>PASSWORD MUST BE 4 CHARACTERS</Text> :null }
        </View>
    )

};

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderCOlor:'black',
        borderWidth:1,
        // marginTop:10,
    }

});

export default TextScreen;