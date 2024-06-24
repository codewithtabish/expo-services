import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppWrapper from "@/components/AppWrapper";

const home = () => {
  return (
    <AppWrapper>
      <Text
        className="text-primary"
        style={{
          fontFamily: "outfit-bold",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima,
        explicabo molestias quasi aspernatur molestiae quas animi beatae placeat
        iste iure culpa tempora rem. Vitae alias obcaecati mollitia culpa
        distinctio.
      </Text>
    </AppWrapper>
  );
};

export default home;

const styles = StyleSheet.create({});
