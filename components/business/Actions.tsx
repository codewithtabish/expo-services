import {
  FlatList,
  Image,
  Linking,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Actions = ({ business }) => {
  const actions = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/icons/call.png"), // Corrected the require statement
      url: "tel:" + business.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/icons/pin.png"), // Corrected the require statement
      url: `https://www.google.com/maps/search/?api=1&query=${business.location}`, // Example URL
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/icons/web.png"),
      url: business.contact,
      // Corrected the require statement
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/icons/share.png"),
      url: business.contact,
      // Corrected the require statement
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleUrl(item)}
        // className="flex flex-col gap-1 items-center "
        key={item.name}
      >
        <Image source={item.icon} style={styles.icon} />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const handleUrl = (item) => {
    if (item.name == "Share") {
      Share.share({
        url: "https://google.com",
        message:
          business?.name +
          "/n address:" +
          business?.address +
          "/n" +
          "find more detail by tabish services app",
      });
    } else {
      Linking.openURL(item?.url);
    }
  };

  return (
    <View className="mx-4 mt-7 bg-white p-2 rounded-lg">
      <FlatList
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={actions}
        renderItem={RenderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
  icon: {
    width: 42,
    height: 42,
  },
});
