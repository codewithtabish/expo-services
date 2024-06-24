import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppWrapper from "./AppWrapper";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import BottomSheetDesign from "./BottomSheetDesign";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  return (
    <AppWrapper>
      <View className="flex-1 bg-gray-300">
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero maxime
          fuga asperiores. Beatae architecto, eligendi ullam animi ipsam
          adipisci natus reiciendis? Accusantium alias distinctio vero sint
          repellat nesciunt necessitatibus culpa!
        </Text>
      </View>
      <BottomSheetDesign />
    </AppWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
