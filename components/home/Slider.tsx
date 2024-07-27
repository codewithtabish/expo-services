import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "@/config/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";

const Slider = () => {
  const [sliders, setSliders] = useState<SliderData[]>([]); // Define an interface for slider data

  useEffect(() => {
    getAllSliders();
  }, []); // Empty dependency array ensures it runs only once

  const getAllSliders = async () => {
    const q = await query(collection(db, "slider"));
    const querySnapshot = await getDocs(q);

    const docs: SliderData[] = []; // Use the defined interface type
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });

    setSliders(docs);
    console.log(sliders); // Now contains the array of slider data objects
  };

  const Item = ({ item }: any) => {
    // Destructure item prop
    // Access data from item object using its properties (assuming your data structure)
    return (
      <View className="rounded-md my-1 mx-[2px]">
        <Image
          className=""
          src={item.image}
          style={{
            height: responsiveScreenHeight(22),
            width: responsiveScreenWidth(90),
            borderRadius: responsiveScreenHeight(3),
            resizeMode: "cover",
          }}
        />
        <LinearGradient
          className="absolute top-0 left-0 bottom-0 right-0 flex justify-end"
          colors={["rgba(0, 0, 0, 0.5)", "transparent"]}
          style={{
            borderRadius: responsiveScreenHeight(3),
          }}
        >
          <View className=" mb-6 mx-4">
            {/* <Text
              className="text-white text-xl italic "
              style={{ fontFamily: "outfit-bold" }}
            >
              {item.content.length > 45
                ? item.content.slice(0, 45) + "..."
                : item.content}
            </Text> */}
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View className="mx-2">
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sliders}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Slider;

interface SliderData {
  // Optional interface for type safety
  id: string;
  // Add properties for your slider data here (e.g., imageUrl, title, description)
}

const styles = StyleSheet.create({});
