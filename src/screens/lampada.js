import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";

export default function TelaAlternante() {
  const [temaClaro, setTemaClaro] = useState(false);

  return (
    <ImageBackground
      source={temaClaro ? require("../assets/img-fundo.jpg") : null}
      style={[styles.fundo, temaClaro ? styles.claro : styles.escuro]}
    >
      <View style={styles.container}>
        <Text style={[styles.titulo, temaClaro && styles.textoEscuro]}>
          {temaClaro ? "Tela Acesa" : "Tela Apagada"}
        </Text>
        <Pressable style={styles.botao} onPress={() => setTemaClaro(!temaClaro)}>
          <Text style={styles.botaoTexto}>Alternar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  claro: {
    backgroundColor: "#fff",
  },
  escuro: {
    backgroundColor: "#000",
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  textoEscuro: {
    color: "#000",
  },
  botao: {
    backgroundColor: "#6FA6C5",
    padding: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
