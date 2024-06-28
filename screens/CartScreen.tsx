// CartScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/cartSlice';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItemContainer} key={item.id}>
      <Image source={{ uri: item.img }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={cartItems}
      renderItem={renderCartItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  cartItemImage: {
    width: 100,
    height: 100,
  },
  cartItemDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  cartItemQuantity: {
    fontSize: 14,
    color: '#555',
  },
  removeButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CartScreen;
