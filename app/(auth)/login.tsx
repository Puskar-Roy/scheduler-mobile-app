import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,

} from "react-native";

import { Link } from "expo-router";

export default function HomeScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="text-center bg-white min-h-[105vh] flex items-center justify-center">
            <Image
              className="h-[83px] w-[80px] bg-blend-normal"
              source={require("@/assets/images/bu1.png")}
              alt="Login Page"
            />
            <Text className="text-[40px]  font-semibold mb-[8rem]">
              Welcome User
            </Text>
            <Image
              className="h-[170px] w-[280px] mb-[5rem]"
              source={require("@/assets/images/login.png")}
              alt="Login Page"
            />
            <View className="w-[90%] flex flex-col gap-5">
              <TextInput
                className="w-[90%] text-xl mx-auto px-5 py-3 rounded-lg bg-slate-300"
                placeholder="Enter Your Email"
                onChangeText={onChangeEmail}
                value={email}
              />
              <TextInput
                className="w-[90%] text-xl mx-auto px-5 py-3 rounded-lg bg-slate-300"
                placeholder="Enter Your Password"
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry
              />
              <Pressable>
                <Text className="w-[90%] mx-auto py-3 bg-blue-500 text-center rounded-lg text-white text-xl font-semibold">
                  Login
                </Text>
              </Pressable>
            </View>
            <Text className="cursor-pointer w-[80%] mt-4 mx-auto bg-white">
              <Link href={"/"}>Forgot Password?</Link>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
