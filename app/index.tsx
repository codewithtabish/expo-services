import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"red"} />
      <Redirect href={"/home"} />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
