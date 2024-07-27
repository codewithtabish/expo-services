import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig"; // Adjust this import as per your project structure
import Intro from "@/components/business/Intro";
import Actions from "@/components/business/Actions";
import About from "@/components/business/About";
import Review from "@/components/business/Review";

const SingleBusiness = () => {
  const { businessID } = useLocalSearchParams();
  const navi = useNavigation();
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navi.setOptions({
      headerShown: false,
    });
    const fetchBusiness = async () => {
      try {
        // @ts-ignore
        const businessRef = doc(db, "businessList", businessID);
        const docSnap = await getDoc(businessRef);

        if (docSnap.exists()) {
          setBusinessData({ id: docSnap.id, ...docSnap.data() });

          //   navi.setOptions({ title: docSnap.data().name }); // Set navigation title based on business data
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [businessID]);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      {businessData ? (
        <>
          <Intro business={businessData} />
          <Actions business={businessData} />
          <About business={businessData} />
          <Review business={businessData} />
        </>
      ) : (
        <Text>No business data found for ID: {businessID}</Text>
      )}
    </ScrollView>
  );
};

export default SingleBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
