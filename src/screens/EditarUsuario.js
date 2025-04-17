const EditarUser = ({navigation}) => {
    const editarUsuario = async () => {
        try {
          const user = auth.currentUser;
      
          if (!senha) {
            Alert.alert('Erro', 'Para atualizar o usuário, a senha atual é necessária.');
            return;
          }
      
          const credential = EmailAuthProvider.credential(user.email, senha);
          await reauthenticateWithCredential(user, credential);
      
          const imageUrl = await uploadToAWS();
      
          if (email !== user.email) {
            await updateEmail(user, email);
          }
      
          await updatePassword(user, senha);
      
          const userRef = doc(db, 'users', user.uid);
          await updateDoc(userRef, {
            nome,
            email,
            foto: imageUrl,
          });
      
          Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
        } catch (error) {
          Alert.alert('Erro', error.message);
        }
      };
  
      const uploadToAWS = async () => {
        if (!imagem) return imagemUrl;
      
        try {
          const response = await fetch(imagem);
          const blob = await response.blob();
          const filename = `${uuid.v4()}.jpg`;
      
          const formData = new FormData();
          formData.append('file', {
            uri: imagem,
            name: filename,
            type: 'image/jpeg',
          });
      
          const uploadResponse = await fetch('https://SEU_BACKEND_URL/upload', {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          const result = await uploadResponse.json();
      
          if (!uploadResponse.ok) {
            throw new Error(result.message || 'Erro ao fazer upload para AWS');
          }
      
          return result.imageUrl;
        } catch (error) {
          Alert.alert('Erro no upload da imagem', error.message);
          return '';
        }
      }; 
  } 
  
  export default EditarUser;