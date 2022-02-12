import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { back } from "react-native/Libraries/Animated/Easing";



export default function Items() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View
        style={{
          marginTop: 5,
          padding: 10,
          backgroundColor: "#eee",
        }}
      >
        <Images />
        <Info />
      </View>
    </TouchableOpacity>
  );
}

const Images = () => (
  <>
    <Image
      source={{
        uri: "https://www.thebalancesmb.com/thmb/zJQKwNdFpLeyymbQfttGDKvKiq8=/3467x3467/smart/filters:no_upscale()/modern-restaurant-in-hotel-460708501-5af71b57875db90036ccf611.jpg",
      }}
      style={{ width: "100%", height: 200, marginTop: 10 }}
    />
    <TouchableOpacity
      style={{
        position: "absolute",
        right: 25,
        top: 25,
      }}
    >
      <MaterialCommunityIcons item="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </>
);

const Info = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 12,
    }}
  >
    <View>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>
        IndieGrill Fine Dine
      </Text>

      <Text style={{ color: "#778899" }}>35-40 • min</Text>
    </View>

    <View
      style={{
        marginRight: 10,
        backgroundColor: "#eee",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>4.5 ✰</Text>
    </View>
  </View>
);
