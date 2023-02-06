import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TourCard = ({ tour }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('TourDetails', { tourdetails: tour });
      }}
    >
      <Image source={{ uri: tour.imageurls[0] }} style={styles.image} />
      <View style={styles.info}>
        <View style={{ flex: 3 }}>
          <Text style={styles.nameText} ellipsizeMode="tail" numberOfLines={2}>
            {tour.name}
          </Text>
          <Text style={{ color: 'grey', marginLeft: 3 }}>{tour.city}</Text>
        </View>

        <View style={styles.right}>
          <Text style={{ color: '#F4A40E', fontSize: 20 }}>
            Rs.{tour.rentperday}
          </Text>
          <Text style={{ color: 'grey', fontSize: 12 }}>Per Night </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TourCard;

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
  right: {
    flex: 1,
    marginTop: '1%',
  },
});
