import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {screens} from '../App';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6';
const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const Listar = () => {
  const navigator = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Listar</Text>
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
