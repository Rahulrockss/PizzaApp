// import React from 'react';
// import { FlatList, TouchableOpacity, Text, Image, View } from 'react-native';
// import styled from 'styled-components/native';

// const Container = styled.View`
//   padding: 16px;
// `;

// const PizzaItemContainer = styled(TouchableOpacity)`
//   flex-direction: row;
//   padding: 16px;
//   margin-bottom: 8px;
//   background-color: ${(props) => props.theme.colors.card};
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const PizzaImage = styled(Image)`
//   width: 80px;
//   height: 80px;
//   border-radius: 8px;
//   margin-right: 16px;
// `;

// const PizzaDetails = styled(View)`
//   flex: 1;
//   justify-content: center;
// `;

// const PizzaName = styled(Text)`
//   font-size: 18px;
//   color: ${(props) => props.theme.colors.text};
// `;

// const PizzaDescription = styled(Text)`
//   font-size: 14px;
//   color: ${(props) => props.theme.colors.text};
// `;

// const PizzaList = ({ pizzas, onPress }) => (
//   <Container>
//     <FlatList
//       data={pizzas}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <PizzaItemContainer onPress={() => onPress(item)}>
//           <PizzaImage source={require('../assets/images/pizza.jpg')} />
//           <PizzaDetails>
//             <PizzaName>{item.name}</PizzaName>
//             <PizzaDescription>{item.description}</PizzaDescription>
//           </PizzaDetails>
//         </PizzaItemContainer>
//       )}
//     />
//   </Container>
// );

// export default PizzaList;
import React from 'react';
import { FlatList } from 'react-native';
import PizzaItem from './PizzaItem';

const PizzaList = ({ pizzas, onPress }) => {
  return (
    <FlatList
      data={pizzas}
      renderItem={({ item }) => (
        <PizzaItem pizza={item} onPress={() => onPress(item)} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PizzaList;
