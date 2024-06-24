import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const LoginLottie = () => {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <View className="bg-gray-200 flex-1">
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
          margin: "auto",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/anim/loginanimone.json")}
      />
    </View>
  );
};

export default LoginLottie;

const styles = StyleSheet.create({});
