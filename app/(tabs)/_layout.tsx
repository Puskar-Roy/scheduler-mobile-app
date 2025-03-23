import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/components/home/Header";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        header: () => <Header />, 
      }}
    >
      <Stack.Screen options={{ headerShown: true }} name="index" />
      <Stack.Screen options={{ headerShown: true }} name="profile" />
      <Stack.Screen options={{ headerShown: true }} name="calender" />
    </Stack>
  );
}
