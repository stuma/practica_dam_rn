import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button, StyleSheet} from 'react-native';
import {screens} from '../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Listar = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Listar</Text>
      <Button
        title={'Ir a segunda pantalla'}
        onPress={() => navigator.navigate(screens.detalle)}
      />
    </View>
  );
};

export default Listar;
