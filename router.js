import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <Tabs.Navigator tabBarOptions={{showLabel: false}}>
      <Tabs.Screen options={{tabBarIcon: ({ focused, size, color }) => <AntDesign name="appstore-o" size={size} color={color} />}} name="Публікації" component={PostsScreen} />
      <Tabs.Screen options={{tabBarIcon: ({ focused, size, color }) => <Feather name="plus" size={size} color={color} />}} name="Створити публікацію" component={CreatePostsScreen} />
      <Tabs.Screen options={{headerShown: false, tabBarIcon: ({ focused, size, color }) => <SimpleLineIcons name="user" size={size} color={color} />}} name="Profile" 
      component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
