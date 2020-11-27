/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Listar from './components/listar';
import Detalle from './components/detalle';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import axios from 'axios';

const Stack = createStackNavigator();

export const screens = {
  listar: 'Listado de Productos',
  detalle: 'Detalle de Producto',
};
const API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6';

const App = () => {
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

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen
            name={screens.listar}
            component={Listar}
            initialParams={{productos}}
          />
          <Stack.Screen
            name={screens.detalle}
            component={Detalle}
            initialParams={{productos}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
