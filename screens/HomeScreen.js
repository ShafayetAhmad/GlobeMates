import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setUserName("shafayet");
  }, []);

  const [userName, setUserName] = useState("");

  const handleFacebookPress = () => {
    const facebookUrl = "https://www.facebook.com/ShafayetAhmadK";
    Linking.openURL(facebookUrl);
  };

  return (
    <View className="h-full bg-slate-800">
      <View>
        <Image
          source={{ uri: "https://shafayetahmad.com/img/profile-pic.jpg" }}
          className="mt-20 mx-auto h-20 w-20 rounded-full"
        />
        <View className="mx-auto">
          <Text className="text-white text-center my-3 text-2xl">
            @{userName}
          </Text>
          <Text className="text-center text-gray-300">
            Brand, Product & System Design
          </Text>
        </View>
        <View className="social-links h-screen space-y-8 my-8 mx-auto">
          <TouchableOpacity
            onPress={handleFacebookPress}
            className="px-4 py-2 my-2 rounded-3xl items-center bg-gray-200 flex-row mx-auto space-x-4"
          >
            <FontAwesomeIcon icon={faFacebook} />
            <Text className="text-gray-700">ShafayetAhmadK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Handle Twitter press
            }}
            className="px-4 py-2 my-2 rounded-3xl items-center bg-gray-200 flex-row mx-auto space-x-4"
          >
            <FontAwesomeIcon icon={faTwitter} />
            <Text className="text-gray-700">@ShafayetAhmadK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Handle Instagram press
            }}
            className="px-4 py-2 my-2 rounded-3xl items-center bg-gray-200 flex-row mx-auto space-x-4"
          >
            <FontAwesomeIcon icon={faInstagram} />
            <Text className="text-gray-700">@ShafayetAhmadK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Handle Github press
            }}
            className="px-4 py-2 my-2 rounded-3xl items-center bg-gray-200 flex-row mx-auto space-x-4"
          >
            <FontAwesomeIcon icon={faGithub} />
            <Text className="text-gray-700">@ShafayetAhmad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Handle LinkedIn press
            }}
            className="px-4 py-2 my-2 rounded-3xl items-center bg-gray-200 flex-row mx-auto space-x-4"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <Text className="text-gray-700">@ShafayetAhmadK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
