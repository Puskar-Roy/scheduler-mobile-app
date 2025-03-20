import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { Link } from "expo-router";
import Header from "@/components/home/Header";


export default function HomeScreen() {
  return (
    <View className="text-center min-h-screen flex py-5 items-center z-1">
      <Header />
      <Text className="mt-10">
        <Link href={"/login"}> Login</Link>
      </Text>
      
    </View>
  );
}
