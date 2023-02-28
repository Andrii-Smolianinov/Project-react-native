import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from 'expo-location'; 

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { width } = useWindowDimensions();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      console.log("camera---->", cameraRef);
      const { uri } = await cameraRef.takePictureAsync();              
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
      
      const location = await Location.getCurrentPositionAsync();
      console.log("location---->", location);             
    }
  }

  const sendPhoto = () => {
    navigation.navigate("Публікації", { photo });   
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        {photo && (
          <View style={styles.photoContainer}>
            <Image
              style={{ height: 240, width: width }}
              source={{ uri: photo }}
            />
          </View>
        )}

        <TouchableOpacity
          style={styles.flipContainer}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={34}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={takePhoto}
        >
          <FontAwesome name="camera" size={24} color="white" />
        </TouchableOpacity>
      </Camera>
      <View>
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={sendPhoto}
          activeOpacity={0.7}
        >
          <Text style={styles.titleSendBtn}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    height: 240,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderColor: "#5cda13",
    borderWidth: 1,
    borderRadius: 8,
  },
  flipContainer: {
    position: "absolute",
    left: 10,
  },
  cameraButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF4D",
    backgroundColor: "#FFFFFF4D",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtn: {
    height: 51,
    marginTop: 43,
    marginBottom: 32,
    marginHorizontal: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  titleSendBtn: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
