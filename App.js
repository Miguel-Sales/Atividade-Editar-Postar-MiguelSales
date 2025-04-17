// Miguel Francisco da Silva Sales
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RealizarLogin from './src/screens/realizarLogin';
import PaginaPrincipal from './src/screens/paginaPrincipal';
import ListarJogadores from './src/screens/listaJogadores';
import SobreNos from './src/screens/sobreNos';
import EditarPerfil from './src/screens/editarPerfil';
import CalcularImc from './src/screens/CalculoImc';
import Lampada from './src/screens/lampada';
import UsuarioAdd from './src/screens/AdicionarUsuario';
import UsuarioEdit from './src/screens/EditarUsuario';
import UpImagem from './src/screens/uploadImagem';
import ListarImagem from './src/screens/listarImagem';
import UpVideo from './src/screens/uploadVideo';
import ListarVideo from './src/screens/listarVideo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RealizarLogin">
        <Stack.Screen
          name="RealizarLogin"
          component={RealizarLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaginaPrincipal"
          component={PaginaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListarJogadores"
          component={ListarJogadores}
          options={{ title: "Listar Jogadores", headerShown: true }}
        />

        <Stack.Screen
          name="SobreNos"
          component={SobreNos}
          options={{ title: "Sobre Nos", headerShown: true }}
        />

        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={{ title: "Editar Perfil", headerShown: true }}
        />

        <Stack.Screen
          name="CalcularImc"
          component={CalcularImc}
          options={{ title: "Calcular IMC", headerShown: true }}
        />
        
        <Stack.Screen
          name="Lampada"
          component={Lampada}
          options={{ title: "Acender e Apagar Lampada", headerShown: true }}
        />

        <Stack.Screen
          name="UsuarioAdd"
          component={UsuarioAdd}
          options={{ title: "Adicionar Usuário", headerShown: true }}
        />

        <Stack.Screen
          name="UsuarioEdit"
          component={UsuarioEdit}
          options={{ title: "Editar Usuário", headerShown: true }}
        />

        <Stack.Screen
          name="UpImagem"
          component={UpImagem}
          options={{ title: "Inserir Imagem", headerShown: true }}
        />

        <Stack.Screen
          name="ListarImagem"
          component={ListarImagem}
          options={{ title: "Imagens Upadas", headerShown: true }}
        />

        <Stack.Screen
          name="UpVideo"
          component={UpVideo}
          options={{ title: "Inserir Vídeo", headerShown: true }}
        />

        <Stack.Screen
          name="ListarVideo"
          component={ListarVideo}
          options={{ title: "Vídeos Upados", headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
