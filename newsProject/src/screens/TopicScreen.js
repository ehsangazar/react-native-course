import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useEffect } from "react";

import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import styled from "styled-components/native";

const StyledTopicView = styled.View`
  padding: 10px 15px;
  height: 50px;
`;
const StyledTopicText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading2.fontSize};
`;

const TopicScreen = ({ route, navigation }) => {
  const [news, setNews] = React.useState([]);
  const { topic } = route.params;
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${topic}&apiKey=99904d0c023e4f6ba27b4e7165672ea0`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("debug response", response);
        setNews(response.articles);
      });
  }, []);

  return (
    <Layout navigation={navigation}>
      <StyledTopicView>
        <StyledTopicText>{topic}</StyledTopicText>
      </StyledTopicView>
      <FlatList
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Card data={item} />}
      />
    </Layout>
  );
};

export default TopicScreen;
