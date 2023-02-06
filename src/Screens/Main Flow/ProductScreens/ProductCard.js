import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProdutDetails', { productdetails: product })
      }
      style={styles.card}
    >
      <Image
        style={styles.image}
        source={require('../../../../images/no-image.png')}
      />

      <View style={styles.info}>
        <View style={{ flex: 2 }}>
          <Text style={styles.nameText} ellipsizeMode="tail" numberOfLines={2}>
            {product.name}
          </Text>
        </View>

        <View style={{ flex: 1, marginTop: '1%' }}>
          <Text style={{ color: '#F4A40E', fontSize: 20 }}>
            Rs.{product.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 10,
    height: '100%',
    maxHeight: 380,
    elevation: 2,
    flex: 1,
  },
  image: {
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: '100%',
    maxHeight: 270,
    width: '100%',
    alignSelf: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  nameText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginTop: 13,
    fontWeight: 'bold',
  },
});

export default ProductCard;
