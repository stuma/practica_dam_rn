import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {API_URL, screens} from '../App';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Listar = ({...props}) => {
  const [productos, setProductos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setProductos(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Listar</Text>
      <Text>{productos.length}</Text>
      <Button
        onPress={() =>
          navigator.navigate(screens.detalle, {
            itemId: 86,
            otherParam: 'Otro parámetro que queramos pasar',
          })
        }>
        Ir a segunda pantalla
      </Button>
    </View>
  );
};

export default Listar;
