import React, { useEffect } from "react";

import Card from "../components/Card/Card";
import { FlatList } from "react-native";
import Layout from "../components/Layout/Layout";

const HomeScreen = () => {
  const [news, setNews] = React.useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=99904d0c023e4f6ba27b4e7165672ea0"
    )
      .then((response) => response.json())
      .then((response) => {
        setNews(response.articles);
      });
  }, []);

  return (
    <Layout>
      <FlatList data={news} renderItem={({ item }) => <Card data={item} />} />
    </Layout>
  );
};

export default HomeScreen;
