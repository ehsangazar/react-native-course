import { Share, Text } from "react-native";

import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import React from "react";

const AboutScreen = ({ navigation }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Layout navigation={navigation}>
      <Text>AboutScreen</Text>
      <Button onPress={onShare} buttonText="Share" />
    </Layout>
  );
};

export default AboutScreen;
