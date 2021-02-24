import React, {useContext, useState} from 'react';
import {Button, Card, Icon, Text} from '@ui-kitten/components';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';
import {StoreContext} from '../context/storeContext';
import {ColorPicker} from 'react-native-color-picker';
import useOrientation, {SCREEN} from '../hooks/useOrientation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomSheetModal from './bottomSheetModal';

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
  modalView: {
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: '50%',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  textInput: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  modalButton: {
    marginVertical: 10,
  },
  cardText: {textAlign: 'center', fontWeight: 'bold'},
});

export const ListaCompradores = () => {
  const {compradores, setCompradores} = useContext(StoreContext);
  const [nombreComprador, setNombreComprador] = useState('');
  const [emailComprador, setEmailComprador] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [primeraPantalla, setPrimeraPantalla] = useState(true);
  const screenDirection = useOrientation();

  const altaComprador = () => {
    setCompradores([
      ...compradores,
      {
        nombre: nombreComprador,
        email: emailComprador,
        id: Math.random(),
      },
    ]);
    setNombreComprador('');
    setEmailComprador('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BottomSheetModal
        visible={modalVisible}
        onClosePressed={() => setModalVisible(false)}
        title='Alta de Comprador'>
        <>
        {primeraPantalla && (
          <PrimeraPantalla
            nombreComprador={nombreComprador}
            setNombreComprador={setNombreComprador}
            emailComprador={emailComprador}
            setEmailComprador={setEmailComprador}
            altaComprador={altaComprador}
            setPrimeraPantalla={setPrimeraPantalla}
          />)}
        </>
      </BottomSheetModal>
      <Button
        style={styles.button}
        accessoryLeft={PlusIcon}
        onPress={() => setModalVisible(true)}
      />
      <FlatList
        data={compradores}
        key={screenDirection}
        numColumns={screenDirection === SCREEN.LANDSCAPE ? 4 : 2}
        renderItem={({item}) => {
          return (
            <Card
              style={{...styles.card}}
              key={item.id}>
              <Text style={styles.cardText}>{item.nombre}</Text>
            </Card>
          );
        }}
      />
    </View>
  );
};

const PrimeraPantalla = ({
  nombreComprador,
  setNombreComprador,
  emailComprador,
  setEmailComprador,
  altaComprador,
}) => {
  return (
    <>
      <TextInput
        placeholder="Nombre del Comprador"
        style={styles.textInput}
        value={nombreComprador}
        onChangeText={(nuevoTexto) => {
          setNombreComprador(nuevoTexto);
        }}
      />
      <TextInput
        placeholder="Email del Comprador"
        style={styles.textInput}
        value={emailComprador}
        onChangeText={(nuevoTexto) => {
          setEmailComprador(nuevoTexto);
        }}
      />
      <Button style={styles.modalButton} onPress={() => altaComprador()}>
        Alta Nuevo Comprador
      </Button>
    </>
  );
};

const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;
