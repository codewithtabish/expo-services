import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppWrapper from "./AppWrapper";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import BottomSheetDesign from "./BottomSheetDesign";
import LoginLottie from "./LoginLottie";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  return (
    <AppWrapper>
      <View className="flex-1 bg-gray-200">
        <LoginLottie />

        <BottomSheetDesign />
      </View>
    </AppWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
