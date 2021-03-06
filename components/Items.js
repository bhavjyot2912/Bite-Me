import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { back } from "react-native/Libraries/Animated/Easing";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "₹₹",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "₹₹",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "₹₹",
    reviews: 700,
    rating: 4.9,
  },
];

export default function Items(props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={{marginBottom: 30}}>
      {props.restaurantData.map((restaurant, index) => (
      <View
        key={index}
        style={{
          marginTop: 5,
          padding: 10,
          backgroundColor: "#eee",
        }}
      >
        <Images image={restaurant.image_url}/>
        <Info name={restaurant.name} rating={restaurant.rating}/>
      </View>
      ))}
    </TouchableOpacity>
  );
}

const Images = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
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

const Info = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 12,
    }}
  >
    <View>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>{props.name}</Text>
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
      <Text>{props.rating} ✰</Text>
    </View>
  </View>
);
