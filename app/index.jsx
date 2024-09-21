import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.united_logo}
            className="w-[250px] h-[150px]"
            resizeMode="contain"
          />

          <Image
            source={images.mancard}
            className="max-w-[200px] w-full h-[250px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              East London Supporters Club Branch
              <Text className="text-secondary-200"> MUFC</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Join the Manchester United Supporters Club and become part of a
            passionate community of fans who live and breathe football. Stay
            updated with the latest news, and experience the thrill of
            supporting the greatest football team in the world. Sign up today
            and unite with the Red Army!"
          </Text>

          <CustomButton
            title="Continue with email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
