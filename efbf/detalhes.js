import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image ,FlatList,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Detalhes ({route}){
    const {item}=route.params
    const navigation = useNavigation();
    React.useLayoutEffect(() => {
    navigation.setOptions({
      title: item.titulo,
    });
  }, [navigation, item.titulo]);

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item.imgUrl }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.titulo}</Text>
    </View>
  );
};
    const styles = StyleSheet.create({
      cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,
        padding: 15,
        alignItems: 'center',
      },
      cardImage: {
        width: 150,
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    });

