import React, {useContext} from 'react';
import {Button, Card, Icon, Text} from '@ui-kitten/components';
import {StyleSheet, View, FlatList} from 'react-native';
import {StoreContext} from '../context/storeContext';
import {ColorPicker} from 'react-native-color-picker';

const styles = StyleSheet.create({
  container: {flex: 1},
  card: {flex: 1, margin: 5},
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 999,
    borderRadius: 60,
    width: 60,
    height: 60,
  },
});

export const ListaCategorias = () => {
  const {categorias, setCategorias} = useContext(StoreContext);

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        accessoryLeft={PlusIcon}
        onPress={() =>
          setCategorias([
            ...categorias,
            {nombre: 'Categoria X', color: 'red', id: Math.random()},
          ])
        }
      />
      <FlatList
        data={categorias}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Card
              style={{...styles.card, backgroundColor: item.color}}
              key={item.id}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                {item.nombre}
              </Text>
            </Card>
          );
        }}
      />
    </View>
  );
};

const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;