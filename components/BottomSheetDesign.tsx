import React, { useCallback, useMemo, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  useOAuth,
} from "@clerk/clerk-expo";
import Login from "@/components/Login";
import * as SecureStore from "expo-secure-store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const BottomSheetDesign = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookOAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: appleOAuth } = useOAuth({
    strategy: "oauth_apple",
  });
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // useEffect to present the modal automatically on mount
  useEffect(() => {
    handlePresentModalPress();
  }, [handlePresentModalPress]);

  useWarmUpBrowser();

  const googleLogin = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err: any) {
      console.error("OAuth error", err);
    }
  }, []);

  const facebookLogin = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await facebookOAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err: any) {
      console.error("OAuth error", err);
    }
  }, []);

  const AppleLogin = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await appleOAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err: any) {
      console.error("OAuth error", err);
    }
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={{ ...styles.container }}>
        <BottomSheetModal
          style={{
            borderRadius: 50,
            backgroundColor: "red",
          }}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={{ ...styles.contentContainer }}>
            <View className="flex flex-col   w-[90%] h-full justify-center  gap-3 ">
              <Text
                className="text-black text-2xl font-semibold text-center"
                style={{
                  fontFamily: "outfit-bold",
                }}
              >
                Welcome to Our Service
              </Text>
              <View className=" flex flex-row justify-center items-center ">
                <Text
                  className="text-gray-700 text-sm w-[70%]  italic mb-3 mx-auto text-center"
                  style={{
                    fontFamily: "outfit-medium",
                  }}
                >
                  Please choose an authentication method to continue
                </Text>
              </View>
              <TouchableOpacity
                onPress={googleLogin}
                className="flex flex-row items-center justify-center p-3  bg-primary
              rounded-md"
              >
                <MaterialCommunityIcons
                  name="google-plus"
                  size={24}
                  color="white"
                  className="mr-4"
                />
                <TouchableOpacity className="bg-primary  mx-4 rounded-md">
                  <Text
                    className="text-white"
                    style={{
                      fontFamily: "outfit-bold",
                    }}
                  >
                    Google login
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={facebookLogin}
                className="flex flex-row items-center justify-center p-3  bg-primary
              rounded-md"
              >
                <SimpleLineIcons
                  name="social-facebook"
                  size={24}
                  color="white"
                  className="mx-4"
                />
                <TouchableOpacity className="bg-primary mx-4 rounded-md">
                  <Text
                    className="text-white"
                    style={{
                      fontFamily: "outfit-bold",
                    }}
                  >
                    Facebook login
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={AppleLogin}
                className="flex flex-row items-center justify-center p-3  bg-primary
              rounded-md"
              >
                <AntDesign
                  name="apple-o"
                  size={24}
                  color="white"
                  className="mx-4"
                />
                <TouchableOpacity className="bg-primary mx-4   rounded-md">
                  <Text
                    className="text-white"
                    style={{
                      fontFamily: "outfit-bold",
                    }}
                  >
                    Apple login
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomSheetDesign;
