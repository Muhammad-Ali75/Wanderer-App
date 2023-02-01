import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardHotel = ({ hotel }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('HotelsScreens', {
          screen: 'HotelDetails',
          params: { hoteldetails: hotel },
        })
      }
      style={styles.card}
    >
      <Image style={styles.image} source={{ uri: hotel.imageurls[0] }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
          {hotel.name}{' '}
        </Text>
        <Text style={styles.price}>Rs.{hotel.rentperday}</Text>
      </View>
      <Text style={styles.city}>{hotel.city}</Text>
    </TouchableOpacity>
  );
};

export default CardHotel;

const styles = StyleSheet.create({
  card: {
    height: '90%',
    width: 300,
    elevation: 2,
    backgroundColor: '#FFF',
    marginTop: 20,
    marginHorizontal: 5,
    borderRadius: 15,
    flex: 1,
  },
  image: {
    height: '70%',
    width: '100%',
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 4,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#00a46c',
    paddingRight: 10,
    flex: 1,
  },
  city: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: '#b1e5d3',
    paddingTop: 3,
  },
});
