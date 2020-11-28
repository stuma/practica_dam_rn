import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from '@ui-kitten/components';
import {API_URL, screens} from '../App';
import axios from 'axios';
import Tarjeta from './tarjeta';

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
      {productos.length > 0 && (
        <ScrollView>
          {productos.map((producto) => (
            <Tarjeta
              titulo={producto.title}
              precio={producto.price}
              onPressVerDetalles={() => {
                navigator.navigate(screens.detalle, {producto});
              }}
              key={producto.id}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Listar;
