import React, { useState, useCallback, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {} from "react-native";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";

import LoginScreen from "./Screens/auth/LoginScreen";

export default function App() {
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen/> */}
    </>
  );
}
