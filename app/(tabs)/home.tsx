import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppWrapper from "@/components/AppWrapper";
import Header from "@/components/Header";
import Slider from "@/components/home/Slider";
import CategoryList from "@/components/home/CategoryList";
import BusinessList from "@/components/home/BusinessList";

const home = () => {
  return (
    <AppWrapper>
      <ScrollView>
        <Header />
        <Slider />
        <CategoryList explore={true} />
        <BusinessList showName={true} repeat={false} />
      </ScrollView>
    </AppWrapper>
  );
};

export default home;

const styles = StyleSheet.create({});
