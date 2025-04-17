import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import s3 from "../../awsConfig"; 

const S3_BUCKET = "bucket-storage-senai-22";

const UploadFoto = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);

  const escolherImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos da permissão para acessar suas fotos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert("Erro", "Nenhuma imagem selecionada.");
      return;
    }

    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const filename = `imagens/${Date.now()}.jpg`;

      const params = {
        Bucket: S3_BUCKET,
        Key: filename,
        Body: blob,
        ContentType: "image/jpeg",
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error("Erro no upload:", err);
          Alert.alert("Erro", "Falha no envio da imagem.");
        } else {
          console.log("Imagem disponível em:", data.Location);
          Alert.alert("Sucesso", "Imagem salva com sucesso!");
          setImageUri(null);
        }
      });
    } catch (error) {
      console.error("Erro no upload:", error);
      Alert.alert("Erro", "Falha no envio da imagem.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Upload de Foto</Text>

      <Pressable style={styles.imagePicker} onPress={escolherImagem}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>Selecionar Imagem</Text>
        )}
      </Pressable>

      <Pressable style={styles.botao} onPress={uploadImage}>
        <Text style={styles.botaoTexto}>Enviar para o S3</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  imagePicker: {
    width: 200,
    height: 200,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  placeholder: {
    color: "#777",
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UploadFoto;
