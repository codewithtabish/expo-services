import { StyleSheet, Text, View } from "react-native";
import React from "react";

const About = ({ business }: any) => {
  return (
    <View className="bg-white  p-4 mt-2">
      <Text className="text-2xl mb-2" style={{ fontFamily: "outfit-bold" }}>
        About
      </Text>
      <Text
        className="text-gray-600 text-justify "
        style={{ fontFamily: "outfit-regular", lineHeight: 34 }}
      >
        {business?.about}
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
