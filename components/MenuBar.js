import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const items = [
  {
    image: require("/home/bhavjyot/Desktop/Bite-Me/front/images/images/shopping-bag.png"),
    text: "Takeaway",
  },
  {
    image: require("/home/bhavjyot/Desktop/Bite-Me/front/images/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("/home/bhavjyot/Desktop/Bite-Me/front/images/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("/home/bhavjyot/Desktop/Bite-Me/front/images/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("/home/bhavjyot/Desktop/Bite-Me/front/images/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("/home/bhavjyot/Desktop/Bite-Me/front/images/images/desserts.png"),
    text: "Desserts",
  },
];

export default function MenuBar() {
  return (
    <TouchableOpacity>
      <View style={{ marginTop: 7, backgroundColor: "#ADD8E6" }}>
        <ScrollView horizontal>
          {items.map((item, index) => (
            <View
              key={index}
              style={{
                marginLeft: 10,
                marginTop: 10,
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 12, fontWeight: "700" }}>
                {items[index].text}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}
