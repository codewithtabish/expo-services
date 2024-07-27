import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import AppWrapper from "@/components/AppWrapper";

const ProfileScreen = () => {
  const { signOut } = useAuth();
  const { width, height } = Dimensions.get("window");
  const userData = {
    name: "John Doe",
    username: "john_doe",
    avatar: "https://via.placeholder.com/150",
    bio: "Traveler | Photographer | Food Lover",
    posts: 120,
    followers: 1500,
    following: 300,
    highlights: [
      { id: 1, title: "Travel", image: "https://via.placeholder.com/80" },
      { id: 2, title: "Food", image: "https://via.placeholder.com/80" },
    ],
    postsImages: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
  };

  const logouts = async () => {
    await signOut();
  };

  return (
    <AppWrapper>
      <ScrollView>
        <View className="bg-white p-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-bold">{userData.username}</Text>
            <TouchableOpacity onPress={logouts}>
              <Text className="text-blue-500">Logout</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row my-4">
            <Image
              source={{ uri: userData.avatar }}
              className="w-20 h-20 rounded-full"
            />
            <View className="flex-1 flex-row justify-around items-center">
              <View className="items-center">
                <Text className="font-bold">{userData.posts}</Text>
                <Text>Posts</Text>
              </View>
              <View className="items-center">
                <Text className="font-bold">{userData.followers}</Text>
                <Text>Followers</Text>
              </View>
              <View className="items-center">
                <Text className="font-bold">{userData.following}</Text>
                <Text>Following</Text>
              </View>
            </View>
          </View>

          <Text className="font-bold">{userData.name}</Text>
          <Text>{userData.bio}</Text>

          <ScrollView horizontal className="my-4">
            {userData.highlights.map((highlight) => (
              <View key={highlight.id} className="mr-4 items-center">
                <Image
                  source={{ uri: highlight.image }}
                  className="w-16 h-16 rounded-full"
                />
                <Text>{highlight.title}</Text>
              </View>
            ))}
          </ScrollView>

          <View>
            {userData.postsImages.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width: width / 2 - 10 }}
                className=" h-32 mb-1"
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </AppWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
