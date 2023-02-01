import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import TourCard from './TourCard';
import wandererApi from '../../../api/Wanderer';
import SearchBar from '../../../Components/SearchBar';
import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

const Tour = ({ navigation }) => {
  const [tour, setTourData] = useState([]);
  const [tourOriginal, setTourOriginal] = useState([]);
  const [search, setSearch] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    apicall();
  }, [isFocused]);

  const apicall = async () => {
    try {
      const response = await wandererApi.get('/api/tours/getalltours');
      setTourData(response.data);
      setTourOriginal(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const datafilter = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = tourOriginal.filter(function(item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setTourData(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setTourData(tourOriginal);
      setSearch(text);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.header2}>
          <TouchableOpacity
            style={{ marginTop: 35 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <View style={styles.container}>
            <Animatable.View
              animation="fadeIn"
              duration={3000}
              style={{ width: '50%' }}
            >
              <Text style={styles.text}>Where would you want to go ? </Text>
            </Animatable.View>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../../../images/w2.jpg')}
                style={styles.logo}
              />
            </View>
          </View>
        </View>
      </View>
      <SearchBar value={search} onChange={(text) => datafilter(text)} />
      {tour.length != 0 ? (
        <FlatList
          data={tour}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <TourCard tour={item} />;
          }}
        />
      ) : (
        <ActivityIndicator animating={true} color={'teal'} size="large" />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F6F5EF',
    height: '25%',
  },
  header2: {
    backgroundColor: '#292929',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  backArrow: {
    marginTop: 50,
    marginLeft: 5,
    tintColor: 'white',
    width: '5%',
    height: 13,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  text: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  logoContainer: {
    width: '50%',
    alignItems: 'flex-end',
    marginTop: 35,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
export default Tour;
