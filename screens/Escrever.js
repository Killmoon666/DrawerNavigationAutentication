import * as React from 'react';
import { View,  Text,  TextInput,  TouchableOpacity,  KeyboardAvoidingView } from 'react-native';
import MeuEstilo from '../meuestilo'
import { auth, firestore } from '../firebase'

const Escrever = () => {
  const [nome, setNome] = useState('')
  const [modelo, setModelo] = useState('')
  const [cor, setCor] = useState('')
  const [tipo, setTipo] = useState('')

  const myRef = firestore.collection('Helicoptero').doc();

  const enviarDados = () => {
    myRef
     .set({
       id: myRef.id,
       nome: nome,
       modelo: modelo, 
       cor: cor,
       tipo: tipo, 
     })
     .then(() => {
       alert('Helicoptero '+modelo+' Adicionado com Sucesso')
     });
    
  }

  const limparFormulario = () => {
  
  }

  return (
    <KeyboardAvoidingView
      style={MeuEstilo.containerlistar}
      behavior="padding"
    >
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Modelo"
          value={modelo}
          onChangeText={text => setModelo(text)}
          style={MeuEstilo.input}
        />
          <TextInput
          placeholder="Cor"
          value={cor}
          onChangeText={text => setCor(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Tipo"
          value={tipo}
          onChangeText={text => setTipo(text)}
          style={MeuEstilo.input}
        />
       
      </View>

      <View style={MeuEstilo.buttoncontainerlistar}>
        <TouchableOpacity
          onPress={enviarDados}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Limpar Formulario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Escrever

