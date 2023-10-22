import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { users } from "./users";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./src/DetailsScreen";
import HomeScreen from "./src/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App


