import React, { useState, useCallback, useEffect } from "react";
import {} from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";

const AuthStack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen}  />
        <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
