import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';

const Detalle = () => {
  const navigator = useNavigation();
  return (
    <View>
      <Text>Home</Text>
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
