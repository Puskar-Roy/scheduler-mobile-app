import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import Header from "@/components/home/Header";
import ProfileIcon from "@/components/ui/ProfileIcon";
import Feather from "@expo/vector-icons/Feather";
export default function ProfileScreen() {
  return (
    <View className="text-center min-h-screen flex py-5 items-center z-1 ">
   

      <ScrollView
        className=" w-[100%] rounded-2xl  p-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-[30px] mt-[-20px] font-bold">Profile</Text>
        {/* start */}
        <View className="mx-auto mt-[2.3rem] h-[21rem] w-[100%] rounded-[2rem]  border-[0.3px] border-slate-600 p-6 flex flex-col items-center justify-center gap-5">
          <ProfileIcon size={100} name="Sumit Gupta" />
          <View className="flex justify-center items-center gap-1">
            <Text className="text-3xl font-semibold">Prof. Sumit Gupta</Text>

            <Text className="text-xl font-normal">Kolkata, Westbengal</Text>
          </View>
          <TouchableOpacity className="flex flex-row gap-3 justify-center items-center border-[0.3px] border-slate-600 w-full h-[3rem] rounded-3xl">
            <Feather name="edit-2" size={18} color="black" />
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
        {/* gap */}
        <View className="mx-auto mt-[2.3rem] h-auto w-[100%] rounded-[2rem]  border-[0.3px] border-slate-600 p-6 flex flex-col gap-5 mb-[10rem]">
          <Text className="text-2xl text-center font-bold ml-1">
            Academic Overview (CSE)
          </Text>
          <View className="flex gap-3">
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800 ">Semester</Text>
              <Text className="text-2xl text-slate-800 font-bold">3rd</Text>
            </View>
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800 ">Primary Subject</Text>
              <Text className="text-2xl text-slate-800 font-bold">DSA</Text>
            </View>
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800 ">Secondary Subject</Text>
              <Text className="text-2xl text-slate-800 font-bold">None</Text>
            </View>
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800">
                Weekly Availability
              </Text>
              <Text className="text-2xl text-slate-800 font-bold">
                Mon, Wed, Fri
              </Text>
            </View>

            {/* Daily Class Limit */}
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800">Daily Class Limit</Text>
              <Text className="text-2xl text-slate-800 font-bold">4</Text>
            </View>

            {/* Consecutive Class Limit */}
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800">
                Consecutive Class Limit
              </Text>
              <Text className="text-2xl text-slate-800 font-bold">3</Text>
            </View>

            {/* Preferred Teaching Slots */}
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800">
                Preferred Teaching Slots
              </Text>
              <Text className="text-2xl text-slate-800 font-bold">
                9:00 AM - 12:00 PM
              </Text>
            </View>

            {/* Leave Days */}
            <View className="flex gap-2">
              <Text className="text-sm text-slate-800">Leave Days</Text>
              <Text className="text-2xl text-slate-800 font-bold">Sunday</Text>
            </View>
          </View>
          <TouchableOpacity className="flex flex-row gap-3 justify-center items-center border-[0.3px] border-slate-600 w-full h-[3rem] rounded-3xl">
            <Feather name="edit-2" size={18} color="black" />
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
