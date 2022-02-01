import Button from "../components/Button/Button";
import { Formik } from "formik";
import Layout from "../components/Layout/Layout";
import React from "react";
import styled from "styled-components/native";

const StyledElementView = styled.View`
  padding: 10px 15px;
`;
const StyledFormView = styled.View``;
const StyledTopicText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading2.fontSize};
`;
const StyledParagraphText = styled.Text`
  font-size: ${({ theme }) => theme.typography.heading3.fontSize};
`;
const StyledTextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.typography.heading2.fontSize};
  height: 40px;
  border-width: 1;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 3px;
`;
const StyledTextAreaInput = styled.TextInput`
  font-size: ${({ theme }) => theme.typography.heading2.fontSize};
  height: 100px;
  border-width: 1;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 3px;
`;
const ContactScreen = ({ navigation }) => {
  return (
    <Layout navigation={navigation}>
      <StyledElementView>
        <StyledTopicText>Contact Us</StyledTopicText>
      </StyledElementView>
      <StyledElementView>
        <StyledParagraphText>
          Culpa cupidatat consequat enim qui. Cillum velit quis exercitation
          pariatur. Laborum eiusmod voluptate eu nisi cillum ipsum labore culpa
          cillum labore do. Elit enim nostrud mollit dolor minim elit nulla.
        </StyledParagraphText>
      </StyledElementView>
      <Formik
        initialValues={{ subject: "", email: "", message: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <StyledFormView>
            <StyledElementView>
              <StyledTextInput
                onChangeText={handleChange("subject")}
                onBlur={handleBlur("subject")}
                value={values.subject}
                placeholder="Subject"
              />
              <StyledTextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
              />
              <StyledTextAreaInput
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                value={values.message}
                placeholder="Message"
                multiline
                numberOfLines={4}
              />
              <Button onPress={handleSubmit} buttonText="Submit" />
            </StyledElementView>
          </StyledFormView>
        )}
      </Formik>
    </Layout>
  );
};

export default ContactScreen;
