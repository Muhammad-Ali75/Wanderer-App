import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ProductCard from './ProductCard';
import wandererApi from '../../../api/Wanderer';
import SearchBar from '../../../Components/SearchBar';
import { AntDesign } from '@expo/vector-icons';

const Products = ({ navigation }) => {
  const [productData, setProductData] = useState([]);
  const [productOriginal, setProductOriginal] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    apicall();
  }, []);

  const apicall = async () => {
    try {
      const response = await wandererApi.get('/api/products/getallproducts');
      setProductOriginal(response.data);
      setProductData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const datafilter = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = productOriginal.filter(function(item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setProductData(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setProductData(productOriginal);
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
            <Text style={styles.text}>Get items for your trip.</Text>
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
      {productData && (
        <FlatList
          data={productData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <ProductCard product={item} />;
          }}
        />
      )}
    </>
  );
};
export default Products;

const styles = StyleSheet.create({
  header: {
    height: '25%',
  },
  header2: {
    backgroundColor: '#5B2C6F',
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
    width: '43%',
    alignItems: 'flex-end',
    marginTop: 35,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
