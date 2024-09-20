import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

import {icons} from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{color: color}}
      >
        {name}
      </Text>
    </View>
  );
};

const Tabslayout = () => {
  return (
    <>
      <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#DA291C',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,

        }

      }}
        
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="gallery"
          options={{
            title: "Gallery",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.gallery}
                color={color}
                name="Gallery"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="fixtures"
          options={{
            title: "Fixtures",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.fixtures}
                color={color}
                name="Fixtures"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="latest_News"
          options={{
            title: "Latest News",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.news}
                color={color}
                name="Latest News"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Tabslayout;
