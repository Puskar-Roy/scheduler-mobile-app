import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { Link } from "expo-router";
import Header from "@/components/home/Header";
import Sidebar from "@/components/home/Sidebar";


export default function HomeScreen() {
  return (
    <View className='text-center min-h-screen flex py-5 items-center'>
      <Header/>
      <Text>
        <Link href={'/login'}> Login</Link>
      </Text>
    </View>
  );
}
