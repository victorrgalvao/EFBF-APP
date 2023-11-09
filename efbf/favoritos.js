import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FavoritosScreen = ({ navigation, route }) => {
  const { mostrarFavoritos } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={mostrarFavoritos}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { item })}>
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.imgUrl }} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.titulo}</Text>
              {/* Adicione mais campos aqui conforme necessário */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FavoritosScreen;
