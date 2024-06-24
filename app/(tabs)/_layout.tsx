import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <Entypo name="home" size={24} color={Colors.primary} />
                ) : (
                  <AntDesign name="home" size={24} color="black" />
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <FontAwesome
                    name="wpexplorer"
                    size={24}
                    color={Colors.primary}
                  />
                ) : (
                  <FontAwesome name="wpexplorer" size={24} color={"black"} />
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <MaterialIcons
                    name="person-3"
                    size={24}
                    color={Colors.primary}
                  />
                ) : (
                  <Ionicons name="person-outline" size={24} color="black" />
                )}
              </>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
