import React, { useState, useCallback, useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const AuthStack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen  name="Posts" component={PostsScreen}  />
        <Tabs.Screen name="Create" component={CreatePostsScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

// auth
// <NavigationContainer>
//       <AuthStack.Navigator initialRouteName="Registration">
//         <AuthStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen}  />
//         <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
//       </AuthStack.Navigator>
//     </NavigationContainer>