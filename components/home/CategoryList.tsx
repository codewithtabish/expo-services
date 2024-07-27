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
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Link } from "expo-router";

const CategoryList = ({ explore }) => {
  const [categories, setcategories] = useState<any>([]);
  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const q = query(collection(db, "category"));
    const querySnapshot = await getDocs(q);
    const cats: any = [];
    querySnapshot.forEach((doc) => {
      cats.push({ docId: doc.id, ...doc.data() });
    });

    setcategories(cats);
    console.log(categories);
  };
  const Item = ({ item }: any) => {
    return (
      <Link href={`/businessList/${item.name}`} asChild>
        <TouchableOpacity
          className="py-2 px-1 flex-col gap-1 items-center shadow-lg bg-gray-50 rounded-md"
          onPress={() => console.log(item.name)}
        >
          <Image
            style={{
              width: responsiveScreenWidth(15),
              height: responsiveScreenHeight(5),
              resizeMode: "center",
            }}
            src={item.icon}
          />
          <Text className="text-black" style={{ fontFamily: "outfit-bold" }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View className="mx-4 ">
      {explore && (
        <View className="flex-row justify-between items-center mb-1 mt-2">
          <Text
            className="text-2xl font-semibold"
            style={{ fontFamily: "outfit-bold" }}
          >
            Categories
          </Text>
          <Text className="text-gray-600 italic text-sm font-bold">
            View All
          </Text>
        </View>
      )}

      <FlatList
        contentContainerStyle={{
          padding: explore ? 20 : 0,
          gap: responsiveScreenWidth(5),
        }}
        data={categories}
        renderItem={Item}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});

// AdMob app ID
// ca-app-pub-2101779718159669~3288484958

// AdMob ad unit ID
// ca - app - pub - 2101779718159669 / 7036158272;
