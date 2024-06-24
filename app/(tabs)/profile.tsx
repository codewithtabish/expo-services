import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppWrapper from "@/components/AppWrapper";
import { useAuth } from "@clerk/clerk-expo";

const profile = () => {
  const { signOut, actor } = useAuth();
  const logouts = async () => {
    await signOut();
  };
  return (
    <AppWrapper>
      <Text className="text-red-500 p-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima,
        explicabo molestias quasi aspernatur molestiae quas animi beatae placeat
        iste iure culpa tempora rem. Vitae alias obcaecati mollitia culpa
        distinctio.
      </Text>
      <TouchableOpacity className="bg-primary p-3 m-8" onPress={logouts}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </AppWrapper>
  );
};

export default profile;

const styles = StyleSheet.create({});
