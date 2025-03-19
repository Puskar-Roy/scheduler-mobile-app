import React, { useState, useRef } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { Image } from "react-native";
const Header = () => {
  const [toggleSide, setToggleSide] = useState(false);
  const slideAnim = useRef(new Animated.Value(-350)).current; // Sidebar starts hidden

  const toggleSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: toggleSide ? -350 : 0, // Slide in or out
      duration: 300,
      useNativeDriver: true,
    }).start();
    setToggleSide(!toggleSide);
  };

  return (
    <View className="relative">
      {/* Header */}
      <View className="flex flex-row w-[90%] mt-4 justify-between items-center py-5 ">
        <TouchableOpacity onPress={toggleSidebar}>
          {toggleSide ? (
            <Entypo name="cross" size={34} color="black" />
          ) : (
            <MaterialIcons name="menu" size={34} color="black" />
          )}
        </TouchableOpacity>
        <View className="text-3xl font-normal">
          <Image
            className="h-[60px] w-[60px] bg-blend-normal"
            source={require("@/assets/images/bu1.png")}
            alt="Login Page"
          />
        </View>
        <Entypo name="dots-three-horizontal" size={34} color="black" />
      </View>

      {/* Sidebar */}
      <Animated.View
        style={{
          transform: [{ translateX: slideAnim }],
        }}
        className="absolute top-[7rem] left-[-19px] h-screen w-[22rem]  p-7"
      >
        <Text className="text-3xl font-semibold">Prof. Sumit Gupta</Text>
        <Text className="text-base text-[#9ea8b8] font- mt-8">MENU</Text>
        <View className="px-5 mt-8">
          <View className="flex flex-row items-center gap-5">
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={23}
              color="#667085"
            />
            <Text className="text-xl font-semibold text-[#344054]">
              Dashboard
            </Text>
          </View>
          <View className="flex flex-row items-center mt-6 gap-5">
            <Feather name="calendar" size={23} color="#667085" />
            <Text className="text-xl font-semibold text-[#344054]">
              Calendar
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Header;
