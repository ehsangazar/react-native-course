import { FlatList, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import AppContext from "../contexts/AppContext";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import styled from "styled-components/native";

const StyledButtonView = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  height: 60px;
`;

const newsTopics = [
  "Bitcoin",
  "Covid",
  "USA",
  "Iran",
  "Australia",
  "Politic",
  "Iraq",
  "Oil",
  "Tesla",
];

const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const { appData } = useContext(AppContext);

  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=99904d0c023e4f6ba27b4e7165672ea0"
    )
      .then((response) => response.json())
      .then((response) => {
        setNews(response.articles);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (appData.isActive === "active") {
      getNews();
    }
  }, [appData.isActive]);

  const handleClickButton = (buttonText) => {
    navigation.navigate("Topic", { topic: buttonText });
  };

  return (
    <Layout navigation={navigation}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StyledButtonView>
          {newsTopics.map((topic) => (
            <Button
              buttonText={topic}
              onPress={() => handleClickButton(topic)}
            />
          ))}
        </StyledButtonView>
      </ScrollView>
      <FlatList
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Layout>
  );
};

export default HomeScreen;
