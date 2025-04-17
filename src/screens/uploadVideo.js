import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  TextInput,
  Modal,
  ActivityIndicator,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import s3 from "../../awsConfig";

const S3_BUCKET = "bucket-storage-senai-22";

export default function UploadVideo({ navigation }) {
  const [video, setVideo] = useState(null);
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const pickVideo = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["video/*"],
        copyToCacheDirectory: true,
      });

      const asset =
        result.assets && result.assets.length > 0 ? result.assets[0] : result;

      if (asset && asset.uri) {
        setVideo({
          uri: asset.uri,
          name: asset.name,
          type: asset.mimeType || "video/mp4",
        });
        setModalVisible(true); 
      } else {
        alert("Erro", "Nenhum vídeo selecionado.");
      }
    } catch (error) {
      console.error("Erro ao selecionar vídeo: ", error);
      alert("Erro", "Não foi possível selecionar o vídeo.");
    }
  };

  const uploadVideo = async () => {
    if (!video) {
      Alert.alert("Erro", "Por favor, selecione um vídeo.");
      return;
    }

    if (!category.trim()) {
      Alert.alert("Erro", "Por favor, insira um nome de categoria.");
      return;
    }

    try {
      setUploading(true);
      console.log("Iniciando upload do vídeo...", video);

      const response = await fetch(video.uri);
      const blob = await response.blob();
      const filePath = `videos/${category}/${Date.now()}_${video.name}`;

      const uploadParams = {
        Bucket: S3_BUCKET,
        Key: filePath,
        Body: blob,
        ContentType: video.type,
      };

      s3.upload(uploadParams, (err, data) => {
        setUploading(false);
        if (err) {
          console.error("Erro no upload: ", err);
          Alert.alert("Erro", "Falha no envio do vídeo");
        } else {
          console.log("Vídeo enviado! URL: ", data.Location);
          Alert.alert("Sucesso", "Vídeo enviado com sucesso!");
          setVideo(null);
          setCategory("");
          setModalVisible(false);
          navigation.navigate("Home");
        }
      });
    } catch (error) {
      console.error("Erro no upload: ", error);
      Alert.alert("Erro", "Falha no envio do vídeo");
      setUploading(false);
    }
  };
}

