import { LogBox } from "react-native";
LogBox.ignoreLogs(["Remote debugger"]);

import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./router";

export default function App() {
  const routing = useRoute({});

  return <NavigationContainer>{routing}</NavigationContainer>;
}
