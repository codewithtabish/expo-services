import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

const BusinessByCategory = () => {
  const { category } = useLocalSearchParams();
  const [businessListData, setbusinessListData] = useState<any>([]);
  const [loader, setloader] = useState(true);
  const navi = useNavigation();
  useEffect(() => {
    navi.setOptions({ title: category });
    getAllBusinessByCategory();
    console.log("The last business is ", businessListData);
  }, []);
  const getAllBusinessByCategory = async () => {
    const q = query(
      collection(db, "businessList"),
      where("category", "==", category)
    );

    const allDocs = await getDocs(q);
    const businessList: any = [];
    allDocs.forEach((doc) => {
      businessList.push({ docId: doc.id, ...doc.data() });
    });
    setbusinessListData(businessList);
    setloader(false);
  };
  const SingleBusinessInList = ({ item, index }) => {
    return (
      <Link
        href={`/businessDetail/${item.docId}`}
        key={index}
        className="my-1 mx-1 bg-white rounded-lg p-[1px]"
      >
        <View
          key={index}
          className="m-1 bg-white  rounded-lg flex flex-row justify-between "
        >
          <Image
            src={item?.imageUrl}
            className="w"
            style={{ width: 100, height: 100, borderRadius: 15 }}
          />
          <View className="flex-1 mx-4">
            <Text
              className="text-black mt-2 mb-1"
              style={{ fontFamily: "outfit-bold" }}
            >
              {item.name}
            </Text>
            <Text
              className=" text-gray-600 text-[13px] max-w-[70%]"
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
                {/* <Text className="text-[10px] text-white">{item?.category}</Text> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Link>
    );
  };

  return (
    <View className="flex-1">
      {!loader ? (
        <FlatList
          data={businessListData}
          renderItem={SingleBusinessInList}
          onRefresh={getAllBusinessByCategory}
          refreshing={loader}
        />
      ) : (
        <View className="flex justify-center items-center flex-1">
          <ActivityIndicator size={40} color={"blue"} />
        </View>
      )}
    </View>
  );
};

export default BusinessByCategory;

const styles = StyleSheet.create({});
