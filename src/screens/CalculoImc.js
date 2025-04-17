// Miguel Francisco da Silva Sales
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from "react-native";

export default function Profile() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100; 
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);

      setIMC(imcCalculado);

      if (imcCalculado < 18.5) setClassificacao("Abaixo do peso");
      else if (imcCalculado < 24.9) setClassificacao("Peso normal");
      else if (imcCalculado < 29.9) setClassificacao("Sobrepeso");
      else if (imcCalculado < 34.9) setClassificacao("Obesidade Grau I");
      else if (imcCalculado < 39.9) setClassificacao("Obesidade Grau II");
      else setClassificacao("Obesidade Grau III (mórbida)");
    } else {
      setIMC(null);
      setClassificacao("Preencha os campos corretamente.");
    }
  };

  return (
    <ImageBackground source={require("../assets/img-fundo.jpg")} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Calculadora de IMC</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso (kg)</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
                placeholder="Ex: 70"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Altura (cm)</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
                placeholder="Ex: 175"
              />
            </View>
          </View>

          <Pressable style={styles.botao} onPress={calcularIMC}>
            <Text style={styles.botaoTexto}>Calcular IMC</Text>
          </Pressable>

          {imc !== null && (
            <View style={styles.resultadoContainer}>
              <Text style={styles.resultadoTexto}>Seu IMC: {imc}</Text>
              <Text style={styles.resultadoClassificacao}>{classificacao}</Text>
            </View>
          )}
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
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
    
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    
  },
  inputText: {
    backgroundColor: "#F9F9F9",
    borderColor: "#6FA6C5",
    borderRadius: 7,
    borderWidth: 2,
    padding: 5,
    color: "#d3d3d3",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#555",
  },
  botao: {
    backgroundColor: "#6FA6C5",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 7,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultadoContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  resultadoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  resultadoClassificacao: {
    fontSize: 16,
    color: "#6FA6C5",
    fontWeight: "bold",
  },
});

