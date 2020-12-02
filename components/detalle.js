import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Button,
  Image,
  StyleSheet,
  Text as TextNative,
} from 'react-native';
import {Text} from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    height: 160,
  },
  contenedorImgPrecio: {
    flexDirection: 'row',
  },
  infoProducto: {
    flexDirection: 'column',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnVolver: {
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

const Detalle = ({route: {params}, ...props}) => {
  const navigator = useNavigation();
  const {producto} = params;
  return (
    <View style={styles.container}>
      <Text category="h4">{producto.title}</Text>
      <View style={styles.contenedorImgPrecio}>
        <Image
          style={styles.logo}
          source={{
            uri: producto.thumbnail,
          }}
        />
        <View style={styles.infoProducto}>
          <TextNative style={styles.text}>Precio: {producto.price}</TextNative>
          <TextNative style={styles.text}>
            Estado: {producto.condition}
          </TextNative>
          <TextNative style={styles.text}>
            Forma de pago: {producto.installments.quantity} cuotas de{' '}
            {producto.installments.amount}
          </TextNative>
        </View>
      </View>
      <Button
        title="Volver"
        style={styles.btnVolver}
        onPress={() => {
          navigator.goBack();
        }}
      />
    </View>
  );
};

export default Detalle;
