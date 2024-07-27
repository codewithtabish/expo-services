import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { useUser } from "@clerk/clerk-expo";
import { dateFormattter } from "@/app/utils/dateFormater";

const Review = ({ business }: any) => {
  const [rating, setrating] = useState<any>(5);
  const [feedback, setfeedback] = useState<any>();
  const [feedbackLoader, setfeedbackLoader] = useState(false);
  const { user } = useUser();
  const handleSubmit = async () => {
    setfeedbackLoader(true);
    const docRef = doc(db, "businessList", business.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        feedback: feedback,
        user: user.fullName,
        userId: user.id,
        createdAt: Date.now(),
        imageUrl: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });
    ToastAndroid.show("feedback added 💞💞", ToastAndroid.LONG);
    setfeedback("");
    setfeedback("");
    setfeedbackLoader(false);
  };

  return (
    <View className="bg-white  p-4 mt-2">
      <Text className="text-2xl mb-2" style={{ fontFamily: "outfit-bold" }}>
        Review
      </Text>
      <Rating
        type="heart"
        ratingCount={5}
        imageSize={25}
        onFinishRating={(rating) => setrating(rating)}
      />
      <View className="relative">
        <TextInput
          placeholder="submit your feedback here "
          value={feedback}
          onChangeText={(a: any) => setfeedback(a)}
          numberOfLines={4}
          textAlignVertical="top"
          className="p-2 border-gray-300 my-3 rounded-md border-[1px]"
        />
        <View className="absolute top-[50%] bottom-[50%] left-[40%] right-[50%]">
          <ActivityIndicator size={feedbackLoader ? 30 : 0} />
        </View>
      </View>
      <TouchableOpacity
        className={`${
          feedback ? "bg-primary" : "bg-gray-300"
        } p-3 rounded-md flex justify-center items-center`}
        disabled={!feedback}
        onPress={handleSubmit}
      >
        <Text className="text-white">Submit</Text>
      </TouchableOpacity>
      <View className="my-3">
        {business?.reviews?.map((item: any, index: any) => {
          return (
            <View
              className="my-1 border-[1px] p-2 rounded-md border-gray-200 flex flex-col gap-1 items-start  "
              key={index}
            >
              <View className="flex flex-row items-center gap-2">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={item?.imageUrl}
                />
                <Text>{item?.user}</Text>
              </View>
              <View className="mx-5 mt-1 flex flex-col  justify-start items-start ">
                <View>
                  <Rating
                    type="heart"
                    ratingCount={item?.rating}
                    imageSize={20}
                  />
                  <Text className="text-gray-500 text-[12px] ">
                    {item?.feedback}
                  </Text>
                </View>
              </View>
              <View className="justify-end flex self-end mt-1 mr-4 ">
                <Text className="text-right text-[11px]">
                  {dateFormattter(item?.createdAt)}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
