import { ActivityIndicator, View } from "react-native";
import React from "react";

const AppLoader = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size={30} color={"#FF9001"} />
    </View>
  );
};

export default AppLoader;
