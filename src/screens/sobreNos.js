// Miguel Francisco da Silva Sales
import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';

export default function SobreNos() {
    return (
       <ImageBackground 
             source={require("../assets/img-fundo.jpg")} 
             style={styles.background}
             resizeMode="cover"
           >
             <ScrollView>
               <View style={styles.box}>
                 <Text style={styles.titulo}>Sobre o Maior do Mundo: </Text>
                     <View style={styles.card}>
                       <Text style={styles.texto}> O Real Madrid Club de Fútbol é um dos clubes mais icônicos e bem-sucedidos da história do futebol mundial. Fundado em 1902, o time espanhol construiu uma trajetória de conquistas impressionantes, tornando-se referência em qualidade técnica, títulos e prestígio internacional. Seu uniforme branco, que lhe rendeu o apelido de "Los Blancos", é reconhecido globalmente, e sua história é marcada por jogadores lendários que deixaram um legado inesquecível no esporte.</Text>
                       <Text style={styles.texto}> Ao longo de sua existência, o Real Madrid conquistou diversos títulos importantes, incluindo a LaLiga, a Copa do Rei e a Supercopa da Espanha. No cenário internacional, o clube é o maior vencedor da UEFA Champions League, consolidando-se como um dos times mais temidos da Europa. Sua filosofia de sempre buscar a vitória e contratar os melhores jogadores do mundo ajudou a manter sua hegemonia no futebol europeu ao longo das décadas.</Text>
                       <Text style={styles.texto}> O clube também é reconhecido pelo investimento em infraestrutura e categorias de base. O estádio Santiago Bernabéu, inaugurado em 1947, é um dos mais modernos e emblemáticos do mundo, sendo palco de momentos históricos do futebol. Além disso, a "La Fábrica", centro de formação do Real Madrid, revela jovens talentos que muitas vezes se tornam grandes estrelas do futebol mundial.</Text>
                       <Text style={styles.texto}> Fora dos campos, o Real Madrid é uma marca global, com milhões de torcedores espalhados por todos os continentes. O clube tem um grande impacto econômico e midiático, sendo um dos mais valiosos do mundo. Sua rivalidade com o Barcelona, conhecida como "El Clásico", é uma das mais emocionantes do futebol e atrai milhões de espectadores em cada confronto. Com um passado glorioso e um futuro promissor, o Real Madrid segue sendo uma potência do esporte, sempre em busca de novas conquistas.</Text>
                      <Image source={require("../assets/real-logo.jpg")} style={styles.imagem} />
                     </View>
                  
               </View>
             </ScrollView>
           </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  box: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fff", 
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: "#000",
  },
  imagem:{
    width: 300,
    height: 300,

  },
});