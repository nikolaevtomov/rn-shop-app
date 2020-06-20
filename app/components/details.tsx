import React from 'react';
import {View, ScrollView, StyleSheet, Text, Image, Button} from 'react-native';
import {connect} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import Fonts from '../../app/utils/fonts';
import {RootStackParamList} from './navigation/types';
import {addToCard, removeFromCard} from '../actions';
import {StoreState} from '../types';

interface OwnProps {
  route: RouteProp<RootStackParamList, 'Details'>;
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
}

interface DispatchProps {
  addItemToCard: typeof addToCard;
  removeItemFromCard: typeof removeFromCard;
}

interface StateProps {
  isInCard: boolean;
}

type Props = OwnProps & DispatchProps & StateProps;

const Details: React.FunctionComponent<Props> = ({
  route,
  addItemToCard,
  removeItemFromCard,
  isInCard,
}) => {
  const {item} = route.params;

  const handleAddToCard = () => addItemToCard(item);
  const handleRemoveFromCard = () => removeItemFromCard(item);

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: item.imageUrl}} />

      <View style={styles.details}>
        <View style={styles.buttonsWrapper}>
          <Button
            title={isInCard ? 'Remove from card' : 'Add to card'}
            onPress={isInCard ? handleRemoveFromCard : handleAddToCard}
          />
        </View>

        <Text style={{...Fonts.jack, ...styles.price}}>
          £{item.price.toFixed(2)}
        </Text>

        <Text style={{...Fonts.jack, ...styles.description}}>
          {item.description}
        </Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: StoreState, props: Props): StateProps => ({
  isInCard: state.card.some((item) => item.id === props.route.params.item.id),
});

export default connect(mapStateToProps, {
  addItemToCard: addToCard,
  removeItemFromCard: removeFromCard,
})(Details);

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  buttonsWrapper: {},
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
  },
});
