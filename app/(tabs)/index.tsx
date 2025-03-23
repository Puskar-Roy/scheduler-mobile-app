import { View, Text } from "react-native";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View className="flex justify-center min-h-screen items-center">
      <Text className="text-3xl ">
        <Link href={"/login"}>Login Page</Link>
      </Text>
      <Text className="text-3xl ">
        <Link href={"/profile"}>Profile Page</Link>
      </Text>
      <Text className="text-3xl ">
        <Link href={"/calender"}>Calender</Link>
      </Text>
    </View>
  );
}
