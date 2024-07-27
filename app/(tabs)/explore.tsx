import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AppWrapper from "@/components/AppWrapper";
import { AntDesign } from "@expo/vector-icons";
import CategoryList from "@/components/home/CategoryList";
import BusinessList from "@/components/home/BusinessList";

const explore = () => {
  return (
    <AppWrapper>
      <ScrollView>
        <Text
          className="text-2xl mx-4 py-1"
          style={{ fontFamily: "outfit-bold" }}
        >
          Explore More
        </Text>
        <View className="mx-4 my-2 pb-4 rounded-full">
          <View className="bg-white p-2 rounded-md  flex flex-row  items-center shadow-lg">
            <AntDesign name="search1" size={24} color="gray" />
            <TextInput placeholder="search business " className="flex-1 mx-3" />
          </View>
        </View>
        <CategoryList explore={false} />
        <BusinessList showName={true} repeat={false} />
        <BusinessList showName={false} repeat={true} />
      </ScrollView>
    </AppWrapper>
  );
};

export default explore;

const styles = StyleSheet.create({});
