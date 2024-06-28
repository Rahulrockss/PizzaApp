// // import React from 'react';
// // import styled from 'styled-components/native';
// // import { useDispatch } from 'react-redux';
// // import { removeItem, updateItem } from '../redux/cartSlice';

// // const Container = styled.View`
// //   padding: 16px;
// //   border-bottom-width: 1px;
// //   border-bottom-color: #ccc;
// //   flex-direction: row;
// //   justify-content: space-between;
// //   align-items: center;
// // `;

// // const Name = styled.Text`
// //   font-size: 18px;
// //   font-weight: bold;
// // `;

// // const Quantity = styled.TextInput`
// //   font-size: 16px;
// //   width: 50px;
// //   text-align: center;
// //   border-width: 1px;
// //   border-color: #ccc;
// //   margin: 0 8px;
// //   padding: 4px;
// // `;

// // const RemoveButton = styled.Button``;

// // const CartItem = ({ item }) => {
// //   const dispatch = useDispatch();

// //   const handleRemove = () => {
// //     dispatch(removeItem(item.id));
// //   };

// //   const handleQuantityChange = (quantity) => {
// //     const updatedQuantity = parseInt(quantity, 10);
// //     if (!isNaN(updatedQuantity)) {
// //       dispatch(updateItem({ ...item, quantity: updatedQuantity }));
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Name>{item.name}</Name>
// //       <Quantity
// //         value={String(item.quantity)}
// //         onChangeText={handleQuantityChange}
// //         keyboardType="numeric"
// //       />
// //       <RemoveButton title="Remove" onPress={handleRemove} />
// //     </Container>
// //   );
// // };

// // export default CartItem;
// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { removeItem } from '../redux/cartSlice';
// import { CartItem as CartItemType } from '../types';

// interface Props {
//   item: CartItemType;
// }

// const CartItem: React.FC<Props> = ({ item }) => {
//   const dispatch = useDispatch();

//   const handleRemove = () => {
//     dispatch(removeItem(item.id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
//       <Button title="Remove" onPress={handleRemove} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     marginVertical: 5,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//   },
//   quantity: {
//     fontSize: 14,
//     color: '#333',
//   },
// });

// export default CartItem;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartItem as CartItemType } from '../types';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  quantity: {
    fontSize: 14,
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default CartItem;
