import { AppState, Appearance } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/ubuntu";
import styled, { ThemeProvider } from "styled-components/native";

import AboutScreen from "./screens/AboutScreen";
import AppContext from "./contexts/AppContext";
import AppLoading from "expo-app-loading";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TopicScreen from "./screens/TopicScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "./config/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  const appState = useRef(AppState.currentState);
  const [appData, setAppData] = useState({
    isActive: true,
  });
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  });

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppData({
        ...appData,
        isActive: appState.current,
      });
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const colorScheme = Appearance.getColorScheme();

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      <ThemeProvider theme={colorScheme === "dark" ? theme.dark : theme.light}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Topic" component={TopicScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
