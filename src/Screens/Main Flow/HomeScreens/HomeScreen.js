import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import wandererAPI from '../../../api/Wanderer';
import CardTour from './CardTour';
import CardHotel from './CardHotel';
import { useIsFocused } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [tourData, setTourData] = useState();
  const [hotelData, setHotelData] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    apicall();
  }, [isFocused]);

  const apicall = async () => {
    try {
      const responseHotel = await wandererAPI.get('/api/rooms/getallrooms');
      setHotelData(responseHotel.data);

      const responseTour = await wandererAPI.get('/api/tours/getalltours');
      setTourData(responseTour.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container0}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText} numberOfLines={2}>
          Where do you want to go?
        </Text>
        <Image
          style={styles.logo}
          source={require('../../../../images/w2.jpg')}
        />
      </View>

      <View style={styles.container1}>
        {/* category header: Recommended Tours */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.categoryText}>Recommended Tour</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('TourScreens', { screen: 'Tour' })
            }
          >
            <Text style={styles.buttonText}>More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {tourData ? (
            <FlatList
              data={tourData}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return <CardTour tour={item} />;
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <ActivityIndicator animating={true} color={'teal'} size="large" />
          )}
        </View>

        {/* category header: Featured Hotels */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.categoryText}>Featured Hotels</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('HotelsScreens', { screen: 'Hotel' })
            }
          >
            <Text style={styles.buttonText}>More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {hotelData ? (
            <FlatList
              data={hotelData}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => {
                return <CardHotel hotel={item} />;
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <ActivityIndicator animating={true} color={'teal'} size="large" />
          )}
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    marginBottom: -18,
    paddingBottom: 5,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'teal',
    elevation: 5,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    width: '60%',
  },
  logo: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  container1: {
    flex: 4,
    justifyContent: 'flex-start',
    padding: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#211F1F',
  },
  button: {
    backgroundColor: 'teal',
    borderRadius: 20,
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
