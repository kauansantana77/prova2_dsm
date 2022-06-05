import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import Stars from './Rating'

export default function Post({ data, select}) {

    return ( 
        <>
        <TouchableOpacity onPress={select} style={[styles.card]}>
        <Text style={styles.title} numberOfLines={1}>
          {data.title} 
        </Text>

        <Text style={styles.url} numberOfLines={5}>
          {data.url} 
        </Text>

        <Text style={styles.author} numberOfLines={6}>
          {data.author} 
        </Text>

        <Stars/>
      </TouchableOpacity>
      
        </>
    );
  }

  const styles = StyleSheet.create({
    card: {
      borderColor: '#000',
      borderWidth: 5,
      borderRadius: 5,
      padding: 30,
      marginHorizontal: 30,
      marginTop: 30,
    },
  
    title: {
      fontSize: 40,
      color: '#ff0',
      fontWeight: '700',
    },
  
  });