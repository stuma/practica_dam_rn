import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Button, Image, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 90,
    height: 160,
  },
});

const Detalle = ({route: {params}, ...props}) => {
  const navigator = useNavigation();
  const {producto} = params;
  return (
    <View style={styles.container}>
      <Text category="h4">{producto.title}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: producto.thumbnail,
        }}
      />
      <Button
        title="Volver"
        onPress={() => {
          navigator.goBack();
        }}
      />
    </View>
  );
};

export default Detalle;
