import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppWrapper from "./AppWrapper";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookOAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: appleOAuth } = useOAuth({ strategy: "oauth_apple" });

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
  return (
    <AppWrapper>
      <Image />
      <TouchableOpacity
        onPress={googleLogin}
        className="bg-primary right-4 left-4 p-3 rounded-md
      absolute bottom-10"
      >
        <Text className="text-white">Google login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={facebookLogin}
        className="bg-primary right-4 left-4 p-3 rounded-md
      absolute bottom-32 my-3"
      >
        <Text className="text-white">Facebook login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={AppleLogin}
        className="bg-primary right-4 left-4 p-3 rounded-md
      absolute bottom-20 my-3"
      >
        <Text className="text-white">Apple login</Text>
      </TouchableOpacity>
    </AppWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
