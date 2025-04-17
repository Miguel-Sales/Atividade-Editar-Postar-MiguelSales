// Miguel Francisco da Silva Sales
import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";


const HomeBot = ({ navigation }) => {
  const sair = () => {
    alert('Você está saindo da conta');
    navigation.navigate("RealizarLogin")
  };
  return (
    <ImageBackground 
      source={require("../assets/img-fundo.jpg")} 
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>

          <Text style={styles.titulo}>Navegações</Text>

          <View style={styles.cartao}>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("EditarPerfil")}
            >
              <Text style={styles.botao}> Editar Perfil </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("SobreNos")}
            >
              <Text style={styles.botao}> Sobre Nós </Text>
            </Pressable>

            <Pressable 
              style={styles.botaoPress} 
              onPress={() => navigation.navigate("ListarJogadores")}
            >
              <Text style={styles.botao}> Listar Jogadores </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("Lampada")}
            >
              <Text style={styles.botao}> Lampada </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("CalcularImc")}
            >
              <Text style={styles.botao}> IMC </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("UsuarioEdit")}
            >
              <Text style={styles.botao}> Editar Perfil </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("UpImagem")}
            >
              <Text style={styles.botao}> Up Foto </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("LastarImagem")}
            >
              <Text style={styles.botao}> Listar Imagem </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("UpVideo")}
            >
              <Text style={styles.botao}> Up Video </Text>
            </Pressable>

            <Pressable 
            style={styles.botaoPress}
            onPress={() => navigation.navigate("ListarVideo")}
            >
              <Text style={styles.botao}> Listar Video </Text>
            </Pressable>


            <Pressable 
            style={styles.botaoPress}
            onPress={sair}
            >
              <Text style={styles.botao}> Sair </Text>
            </Pressable>

            
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    width: "100%",
    backgroundColor: "#fff", 
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  cartao: {
    backgroundColor: "#e3e3e3",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  botaoPress: {
    width: "100%",
    backgroundColor: "#6FA6C5",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  botao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomeBot;
