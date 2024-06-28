// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import styled from 'styled-components/native';

// const Container = styled(View)`
//   padding: 16px;
//   background-color: ${(props) => props.theme.colors.card};
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 16px;
// `;

// const PizzaImage = styled(Image)`
//   width: 100%;
//   height: 200px;
//   border-radius: 8px;
//   margin-bottom: 16px;
// `;

// const PizzaName = styled(Text)`
//   font-size: 24px;
//   color: ${(props) => props.theme.colors.text};
//   margin-bottom: 8px;
// `;

// const PizzaDescription = styled(Text)`
//   font-size: 16px;
//   color: ${(props) => props.theme.colors.text};
// `;

// const PizzaItem = ({ item }) => (
//   <Container>
//     <PizzaImage source={require('../assets/images/pizza.jpg')} />
//     <PizzaName>{item.name}</PizzaName>
//     <PizzaDescription>{item.description}</PizzaDescription>
//   </Container>
// );

// export default PizzaItem;
import React from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Container = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #666;
`;

const AddButton = styled.Button`
  margin-top: 8px;
`;

const PizzaItem = ({ pizza }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...pizza, quantity: 1 }));
  };

  return (
    <Container>
      <Name>{pizza.name}</Name>
      <Description>{pizza.description}</Description>
      <AddButton title="Add to Cart" onPress={handleAddToCart} />
    </Container>
  );
};

export default PizzaItem;
