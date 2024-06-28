import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useFetchPizzas } from '../services/api';

const HomeScreen: React.FC = ({ navigation }) => {
  const { pizzas, loading, error } = useFetchPizzas();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { pizza: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.img }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
<FlatList
  data={pizzas}
  renderItem={renderItem}
  keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
/>

  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e91e63',
  },
});

export default HomeScreen;
