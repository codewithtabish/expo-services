import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from "react-native-responsive-dimensions";
import { Link, useRouter } from "expo-router";

const BusinessList = ({ showName, repeat }) => {
  const [business, setbusiness] = useState<any>([]);
  const [businessRepeat, setbusinessRepeat] = useState<any>([]);
  const router = useRouter();

  // Define an interface for slider data

  useEffect(() => {
    getAllbusiness();
  }, []); // Empty dependency array ensures it runs only once

  const getAllbusiness = async () => {
    const q = await query(collection(db, "businessList"));
    const querySnapshot = await getDocs(q);

    const docs: any = []; // Use the defined interface type
    querySnapshot.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });

    setbusiness(docs);

    setbusinessRepeat(docs.reverse());

    console.log(business); // Now contains the array of slider data objects
  };

  const Item = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => router.push(`/businessDetail/${item.id}`)}
        className=" px-1 shadow-md"
        style={{ maxWidth: responsiveScreenWidth(45) }}
      >
        <Image
          className="rounded-lg"
          style={{
            width: responsiveScreenWidth(45),
            height: responsiveScreenHeight(15),
            resizeMode: "cover",
          }}
          src={item.imageUrl}
        />
        <Text
          className="text-black mt-2 mb-1"
          style={{ fontFamily: "outfit-bold" }}
        >
          {item.name}
        </Text>
        <Text
          className=" text-gray-600 text-[11px]"
          style={{ fontFamily: "outfit-regular" }}
        >
          {item.address}
        </Text>
        <View className="my-1 flex flex-row justify-between items-center">
          <View className="flex flex-row gap-2 items-center">
            <Text
              className="text-gray-500"
              style={{ fontFamily: "outfit-bold" }}
            >
              4.5
            </Text>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/263/263417.png"
              className="w-5 h-5"
            />
          </View>
          <TouchableOpacity className="bg-primary text-white p-1 rounded-full">
            <Text className="text-[10px] text-white">{item?.category}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="mx-4">
      {showName ? (
        <View className="flex-row justify-between items-center mb-2 ">
          <Text
            className="text-2xl font-semibold"
            style={{ fontFamily: "outfit-bold" }}
          >
            Business
          </Text>
          <Text className="text-gray-600 italic text-sm font-bold">
            View All
          </Text>
        </View>
      ) : (
        <View className="flex-row justify-between items-center mb-2 ">
          <Text
            className="text-2xl font-semibold"
            style={{ fontFamily: "outfit-bold" }}
          >
            Popular
          </Text>
          <Text className="text-gray-600 italic text-sm font-bold">
            View All
          </Text>
        </View>
      )}
      {repeat ? (
        <FlatList
          contentContainerStyle={{
            gap: responsiveScreenWidth(3),
            alignItems: "center",
            paddingBottom: 50,
          }}
          data={businessRepeat}
          renderItem={Item}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          contentContainerStyle={{
            gap: responsiveScreenWidth(3),
            alignItems: "center",
            paddingBottom: 50,
          }}
          data={business}
          renderItem={Item}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default BusinessList;

const styles = StyleSheet.create({});
