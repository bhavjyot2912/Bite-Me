import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";


export default function Header() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <HeaderButton
        text="TakeAway"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 20,
      backgroundColor: props.btnColor,
    }}
  >
    <Text
      style={{
        color: props.textColor,
        fontSize: 13,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
