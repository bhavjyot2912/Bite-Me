import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import BottomTabs from "../components/BottomTabs";
import MenuBar from "../components/MenuBar";
import Items, { localRestaurants } from "../components/Items";
import { Divider } from "react-native-elements/dist/divider/Divider";

const YELP_API_KEY =
  "MzPVpPPBASRmuz-W1IrHPGJjoqHsP9IJyL8lxE2rqYIzTnDLv46h11ECJg9ik6D9V-WDcYPH7eKMM6IFGaEwb4OVJt51AQe-L3Zq4NU9T9JnEgqtqwgIx_goJbkHYnYx";

const Homenew = () => {
  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Programming Languages</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
    </SafeAreaView>
  );
};

export default function Home(navigation) {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("LasVegas");

  const getRetaurantsfrmYELP = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const APIoptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpurl, APIoptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRetaurantsfrmYELP();
  }, [city]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "#006491", padding: 43.5 }}>
        <Header />
        <SearchBar />
      </View>
      <ScrollView>
        <MenuBar />
        <Items restaurantData={restaurantData} cityHandler={setCity} />
      </ScrollView>
      <View>
        <BottomTabs />
      </View>
      <Divider width={1} />
    </SafeAreaView>
  );
}
