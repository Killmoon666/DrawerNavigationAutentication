import React ,{useState, useEffect} from 'react'
import {ActivityIndicator, SafeAreaView, View, FlatList, MeuEstiloheet, Text, StatusBar } from 'react-native';
import { auth,firestore } from '../firebase'
import MeuEstilo from '../meuestilo';

const Listar = () => {
  const [loading, setLoading] = useState(true); 
  const [capacetes, setcapacetes] = useState([]); 

  useEffect(() => {
    const subscriber = firestore.collection('Helicoptero')
      .onSnapshot(querySnapshot => {
        const capacetes = [];
        querySnapshot.forEach(documentSnapshot => {
          capacetes.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.nome,
          });
        });
        setcapacetes(capacetes);
        setLoading(false);
      });
   
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

const Item = ({ nome }) => (
  <View style={MeuEstilo.item}>
    <Text style={MeuEstilo.title}>{nome}</Text>
  </View>
);

 

  const renderItem = ({ item }) => <Item nome={item.nome} />;

  

  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList 
      data={capacetess} 
      renderItem={renderItem} 
      keyExtractor={item => item.nome} 
      
      />
    </SafeAreaView>
  );
};



export default Listar;
