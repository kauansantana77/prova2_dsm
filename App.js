import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import PesquisaLivros from './BookFlatList';

export default function ToList(){
  return (
    <View>
      <TextInput style={styles.input} placeholder={'Digite o título desejado...'}/>
      <PesquisaLivros />
    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: 2,
    height: 50,
  },
});