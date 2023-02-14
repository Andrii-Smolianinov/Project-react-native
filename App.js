import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  Text,
  ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert(
      "Реєстрація успішна",
      `Користувач: - ${name}
      Емейл: - ${email}
      Пароль: - ${password}`
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../myProject/src/images/BG.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <View style={styles.containerForm}> */}
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.containerInput}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Логін"
                style={styles.input}
                textAlign={"left"}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адреса електронної пошти"
                style={styles.input}
                textAlign={"left"}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
                textAlign={"left"}
              />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
        <Button
          title={"Зареєструватися"}
          style={styles.button}
          onPress={onLogin}
        />

        {/* </View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  containerForm: {
    position: "absolute",
    top: 263,
    height: 549,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    // alignItems: "center"
  },
  title: {
    marginTop: 32,
    
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
  },
  input: {
    height: 50,

    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 15,

    marginBottom: 16,
    marginHorizontal: 16,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    // color: "#212121",
    color: "#E8E8E8",
    borderRadius: 8,
  },
  containerInput: {
    marginTop: 33,
    marginBottom: 43,
  },

  button: {
    padding: 16,
    color: "#ffffff",
    backgroundColor: "#FF6C00",
  },
});
