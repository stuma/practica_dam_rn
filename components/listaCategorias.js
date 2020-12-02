import React, {useContext} from 'react';
import {Button, Card, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';
import {StoreContext} from '../context/storeContext';

const styles = StyleSheet.create({
  container: {flex: 1},
});

export const ListaCategorias = () => {
  const {categorias, setCategorias} = useContext(StoreContext);

  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          setCategorias([
            ...categorias,
            {nombre: 'Categoria X', color: 'red', id: Math.random()},
          ])
        }>
        Crear Categoria
      </Button>
      {categorias.map((cat) => (
        <Card key={cat.id}>
          <Text>{cat.nombre}</Text>
        </Card>
      ))}
    </View>
  );
};
