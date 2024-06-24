import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AppWrapper = ({ children }: any) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex-1">{children}</View>
      </SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaProvider>
  );
};

export default AppWrapper;
