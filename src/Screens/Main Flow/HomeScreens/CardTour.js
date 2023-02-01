import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardTour = ({ tour }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('TourScreens', {
          screen: 'TourDetails',
          params: { tourdetails: tour },
        })
      }
      style={styles.card}
    >
      <Image style={styles.image} source={{ uri: tour.imageurls[0] }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {tour.name}
        </Text>
        <Text style={styles.price}>Rs.{tour.rentperday}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardTour;

const styles = StyleSheet.create({
  card: {
    height: '90%',
    elevation: 2,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 160,
  },
  image: {
    height: '70%',
    width: '100%',
    overflow: 'hidden',
  },
  titleContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    color: '#00a46c',
    fontSize: 14,
    textAlign: 'right',
  },
});
