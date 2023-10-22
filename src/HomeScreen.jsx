import React, { useState} from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, TextInput, Button } from "react-native";

const HomeScreen = ({navigation}) => {
    const [title, setTitle] = useState();
    const [memory, setMemory] = useState();

    const navigateToDetailsScreen = () => {
        navigation.navigate("DetailsScreen");
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput style={styles.title}>
                    Title For This Particular
                
                </TextInput>
            </View>
            <View style = {styles.memorystyle}>
                <TextInput>
                    Write your memory
                </TextInput>
            </View>
            <View style = {styles.btnplace} >
                <TouchableOpacity  style={styles.btnplace}
                onPress={() => {
                }}
                
                >
                    <Text style = {styles.btnTxt1}> See My Memories </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
            navigation.navigate('DetailsScreen')
          }}
        >
                    <Text style = {styles.btnTxt2}> Save </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
    
   

}
const styles = StyleSheet.create({
container: {
    marginTop: 40,
    marginLeft:24,
    color: "#3E4C59"
},
memorystyle:{
    marginTop:8 
},
title: {
    fontWeight: 600,
    fontSize:  24,
},
btnTxt1: {
    backgroundColor: "yellow",
    flexDirection: "row",
    textAlign: 'center',
    marginTop: 700,
    

},
btnTxt2: {
    backgroundColor: "yellow",
    flexDirection: "row",
    textAlign: 'center',
    marginTop: 700,
},

btnplace: {
    flexDirection: "row",
    justifyContent: "space-around",
    
    

    

}

})
export default HomeScreen