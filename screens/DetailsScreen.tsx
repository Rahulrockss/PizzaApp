import React from 'react';
import { View, Text, Image, Button, StyleSheet ,TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen: React.FC = ({ route }) => {
  const { pizza } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    dispatch(addToCart(pizza));
    navigation.navigate('Cart'); // Change this to navigate to the Cart screen
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: pizza.img }} style={styles.image} />
      <Text style={styles.name}>{pizza.name}</Text>
      <Text style={styles.description}>{pizza.description}</Text>
      <Text style={styles.price}>${pizza.price}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
      <br />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e91e63',
    marginBottom: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007bff',
  },
});

export default DetailsScreen;
