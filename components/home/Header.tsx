import React, { useState, useRef } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Image } from "react-native";
import ProfileIcon from "../ui/ProfileIcon";
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
      <View className="flex  flex-row w-[90%] mx-auto mt-4 justify-between items-center pt-8 ">
        <TouchableOpacity onPress={toggleSidebar}>
          {toggleSide ? (
            <Entypo name="cross" size={34} color="black" />
          ) : (
            <MaterialIcons name="menu" size={34} color="black" />
          )}
        </TouchableOpacity>
        <View className="text-3xl font-normal">
          <Link href={'/'}>
            <Image
              className="h-[55px] w-[55px] bg-blend-normal"
              source={require("@/assets/images/bu1.png")}
              alt="Login Page"
            />
          </Link>
        </View>
        <Entypo name="dots-three-horizontal" size={34} color="black" />
      </View>

      {/* Sidebar */}
      <Animated.View
        style={{
          transform: [{ translateX: slideAnim }],
          zIndex: 10,
        }}
        className="absolute bg-white rounded-xl  z-2 top-[8rem] left-[-19px] h-screen w-[24rem]  p-9"
      >
        <View className=" mt-[1rem] flex flex-col gap-4 pl-[1rem] justify-center items-center">
          <ProfileIcon size={80} name="Sumit Gupta" />
          <Text className="text-3xl font-semibold ml-4]">
            Prof. Sumit Gupta
          </Text>
        </View>
        <Text className="text-base text-[#9ea8b8] ml-4 mt-8">MENU</Text>
        <View className="px-5 mt-8">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-3">
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                size={23}
                color="#667085"
              />
              <Text className="text-xl font-normal text-[#344054]">
                Dashboard
              </Text>
            </View>
            <AntDesign name="down" size={18} color="black" />
          </View>
          <View className="flex flex-row items-center mt-9 gap-3">
            <Feather name="calendar" size={23} color="#667085" />
            <Text className="text-xl font-normal text-[#344054]">Calendar</Text>
          </View>
          <View className="flex flex-row items-center mt-9 gap-3">
            <FontAwesome6 name="user-circle" size={23} color="#667085" />
            <Text className="text-xl font-normal text-[#344054]">
              User Profile
            </Text>
          </View>

          <View className="flex flex-row items-center mt-9 justify-between">
            <View className="flex flex-row items-center gap-3">
              <FontAwesome6 name="wpforms" size={23} color="#667085" />
              <Text className="text-xl font-normal text-[#344054]">Forms</Text>
            </View>
            <AntDesign name="down" size={18} color="black" />
          </View>

          <View className="flex flex-row items-center mt-9 justify-between">
            <View className="flex flex-row items-center gap-3">
              <FontAwesome6 name="calculator" size={23} color="#667085" />
              <Text className="text-xl font-normal text-[#344054]">
                Routine
              </Text>
            </View>
            <AntDesign name="down" size={18} color="black" />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Header;
