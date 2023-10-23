import React from "react";
import { Text, StyleSheet,View ,Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation})=> {
  return <View>
      <Text style={styles.text}>HomererScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components Demo"
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to Lists Demo"
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Images Demo"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle:{

  },
});

export default HomeScreen;
 


