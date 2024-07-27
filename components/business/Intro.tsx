import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
const Intro = ({ business }: any) => {
  const { height, width } = Dimensions.get("window");
  const navi = useNavigation();
  return (
    <View>
      <View>
        <Image
          source={{ uri: business?.imageUrl }}
          className="w-full object-cover my-5"
          style={{ height: height / 4 }}
        />
        <TouchableOpacity
          onPress={() => navi.goBack()}
          className="w-8 h-8 bg-gray-700 rounded-full absolute left-3 top-10
          flex justify-center items-center
        "
        >
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <View
          className="absolute w-full flex justify-end items-center"
          style={{ height: height / 3 }}
        >
          <View
            className=" bg-white w-[90%] flex justify-center items-center p-3 mx-2 rounded-lg"
            style={{}}
          >
            <Text className="text-2xl" style={{ fontFamily: "outfit-bold" }}>
              {business?.name}
            </Text>
            <Text className="text-gray-700 font-semibold text-[13px] text-center max-w-[80%]">
              {business?.address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({});
