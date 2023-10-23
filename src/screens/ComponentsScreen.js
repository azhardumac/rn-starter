import react from "react";
import{Text,StyleSheet, Button, View} from "react-native";

const ComponentsScreen = () => {
    return <View>
    <Text style={styles.textStyle}>THIS IS THE ComponentsScreen and its red!!!</Text>
    <Text style={styles.subHeaderStyle}>MY NAME IS SLIM SHADY</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:45,
        color:'red'
    },
    subHeaderStyle:{
        fontSize:20,

    }
});

export default ComponentsScreen;