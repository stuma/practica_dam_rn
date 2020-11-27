import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {screens} from '../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Listar = ({productos, ...props}) => {
  const navigator = useNavigation();

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
