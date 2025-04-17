import React, {
  useEffect,
  useState,
} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const TelaJogadores = () => {
  const [jogadores, setJogadores] = useState([]);
  const [nome, setNome] = useState("");
  const [camisa, setCamisa] = useState("");
  const [altura, setAltura] = useState("");
  const [nascimento, setNascimento] =
    useState("");
  const [idEdicao, setIdEdicao] = useState(null); // controla se está editando

  const buscarJogadores = async () => {
    const snapshot = await getDocs(
      collection(db, "real-madrid")
    );
    const lista = snapshot.docs.map((doc) => {
      const dados = doc.data();
      return {
        id: doc.id,
        ...dados,
        nascimento: dados.nascimento
          ? new Date(
              dados.nascimento.seconds * 1000
            ).toLocaleDateString("pt-BR")
          : "Data não disponível",
      };
    });
    setJogadores(lista);
  };

  useEffect(() => {
    buscarJogadores();
  }, []);

  const salvar = async () => {
    if (
      !nome ||
      !camisa ||
      !altura ||
      !nascimento
    ) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    const [dia, mes, ano] = nascimento.split("/");
    const nascimentoConvertido =
      Timestamp.fromDate(
        new Date(`${ano}-${mes}-${dia}`)
      );

    const dados = {
      nome,
      camisa,
      altura: parseFloat(altura),
      nascimento: nascimentoConvertido,
    };

    try {
      if (idEdicao) {
        await updateDoc(
          doc(db, "real-madrid", idEdicao),
          dados
        );
        Alert.alert(
          "Jogador atualizado com sucesso"
        );
      } else {
        await addDoc(
          collection(db, "real-madrid"),
          dados
        );
        Alert.alert(
          "Jogador adicionado com sucesso"
        );
      }

      limparCampos();
      buscarJogadores();
    } catch (erro) {
      console.error("Erro:", erro);
    }
  };

  const editar = (jogador) => {
    setNome(jogador.nome);
    setCamisa(jogador.camisa);
    setAltura(String(jogador.altura));
    setNascimento(jogador.nascimento);
    setIdEdicao(jogador.id);
  };

  const excluir = async (id) => {
    console.log("Tentando excluir:", id);
    try {
      await deleteDoc(
        doc(db, "real-madrid", id)
      );
      buscarJogadores();
      alert(
        "Jogador excluído com sucesso"
      );
    } catch (erro) {
      console.error(
        "Erro ao excluir:",
        erro
      );
      };
  };

  const limparCampos = () => {
    setNome("");
    setCamisa("");
    setAltura("");
    setNascimento("");
    setIdEdicao(null);
  };

  return (
    <ImageBackground
      source={require("../assets/img-fundo.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <Text style={styles.titulo}>
          Cadastro de Jogadores
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Camisa"
          value={camisa}
          onChangeText={setCamisa}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (ex: 1.80)"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Nascimento (DD/MM/AAAA)"
          value={nascimento}
          onChangeText={setNascimento}
        />

        {idEdicao ? (
          <View>
            <TouchableOpacity
              style={styles.botaoAtualizar}
              onPress={salvar}
            >
              <Text style={styles.textoBotao}>
                Atualizar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={limparCampos}
            >
              <Text style={styles.textoBotao}>
                Cancelar Edição
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.botaoSalvar}
            onPress={salvar}
          >
            <Text style={styles.textoBotao}>
              Adicionar
            </Text>
          </TouchableOpacity>
        )}

        {jogadores.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>
            <Text style={styles.texto}>
              Camisa: {item.camisa}
            </Text>
            <Text style={styles.texto}>
              Altura: {item.altura}
            </Text>
            <Text style={styles.texto}>
              Nascimento: {item.nascimento}
            </Text>

            <View style={styles.botoes}>
              <TouchableOpacity
                style={styles.botaoEditar}
                onPress={() => editar(item)}
              >
                <Text style={styles.textoBotao}>
                  Editar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botaoExcluir}
                onPress={() => excluir(item.id)}
              >
                <Text style={styles.textoBotao}>
                  Excluir
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  botaoSalvar: {
    backgroundColor: "#6FA6C5",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  botaoAtualizar: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  botaoCancelar: {
    backgroundColor: "#A9A9A9",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  texto: {
    fontSize: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  botaoEditar: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 6,
    width: "48%",
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 6,
    width: "48%",
    alignItems: "center",
  },
});

export default TelaJogadores;