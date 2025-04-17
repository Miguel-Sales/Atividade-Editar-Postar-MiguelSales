// Miguel Francisco da Silva Sales
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Image, ImageBackground } from "react-native";

export default function Profile() {
  const [nome, setNome] = useState("Miguel");
  const [email, setEmail] = useState("miguel@123");
  const [senha, setSenha] = useState("12345");
  const [imgAvatar, setImgAvatar] = useState("https://media.istockphoto.com/id/1201143861/pt/foto/celebes-crested-macaque-with-open-mouth-close-up-portrait.jpg?s=612x612&w=0&k=20&c=isJkSJepGBAOT2-RKifNotrVNfpARIFpQTpJfpxFsuI=");

  const trocarImagem = () => {
    setImgAvatar(imgAvatar === "https://apublica.org/wp-content/uploads/2025/02/Capa_Governo-Lula-nao-faz-politica-para-ambiente-de-comunicacao-de-hoje-diz-Miguel-Lago.jpg"
      ? "https://media.istockphoto.com/id/1201143861/pt/foto/celebes-crested-macaque-with-open-mouth-close-up-portrait.jpg?s=612x612&w=0&k=20&c=isJkSJepGBAOT2-RKifNotrVNfpARIFpQTpJfpxFsuI="
      : "https://apublica.org/wp-content/uploads/2025/02/Capa_Governo-Lula-nao-faz-politica-para-ambiente-de-comunicacao-de-hoje-diz-Miguel-Lago.jpg");
  };

  return (
    <ImageBackground source={require("../assets/img-fundo.jpg")} style={styles.background}>
      <View style={styles.container}>

        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <View style={styles.inputText}>
              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputText}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
              
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputText}>
              <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />
            </View>
          </View>
          <Image source={{ uri: imgAvatar }} style={styles.avatar} />
        <Pressable style={styles.botao} onPress={trocarImagem}>
          <Text style={styles.botaoTexto}>Trocar Imagem</Text>
        </Pressable>
        </View>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#6FA6C5",
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#6FA6C5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00796B",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#F9F9F9",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#555",
  },
});

