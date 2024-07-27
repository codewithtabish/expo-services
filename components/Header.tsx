import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <View
      className="  bg-primary p-"
      style={{
        borderBottomLeftRadius: 20,
        borderBottomEndRadius: 20,
      }}
    >
      <View className="flex flex-row items-center gap-4 mx-[1px] my-1 ">
        <Image
          style={{
            width: 45,
            height: 45,
          }}
          className="rounded-full"
          src={user?.imageUrl}
        />
        <View className="flex flex-col  ">
          <Text
            className="text-sm text-white italic"
            style={{
              fontFamily: "outfit-regular",
            }}
          >
            Welcome
          </Text>
          <Text
            className="text-xl text-white"
            style={{
              fontFamily: "outfit-bold",
            }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      <View className="mx-4 my-2 pb-4 rounded-full">
        <View className="bg-white p-2 rounded-md  flex flex-row  items-center shadow-lg">
          <AntDesign name="search1" size={24} color="gray" />
          <TextInput placeholder="search business " className="flex-1 mx-3" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
