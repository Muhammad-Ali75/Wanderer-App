import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Context as AuthContext } from '../../../Context/AuthContext';
import WandererAPI from '../../../api/Wanderer';
import BookingCard from '../../../Components/ProductBookingCard';
import { AntDesign } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

const MyBookings = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const user = JSON.parse(state.token);
  const [bookings, setBookings] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    getBookings();
  }, [isFocused]);

  const getBookings = async () => {
    console.log('getBookings');
    try {
      const response = await WandererAPI.post(
        '/api/bookings/getbookingbyuserid',
        {
          userid: user._id,
        }
      );
      var filteredBookings = response.data.filter(
        (obj) => obj.status === 'booked'
      );
      console.log(
        'GETBOOKING:::::::',
        JSON.stringify(filteredBookings, null, 2)
      );
      setBookings(filteredBookings);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelBookings = async (bookingid, roomid) => {
    try {
      const response = await WandererAPI.post('/api/bookings/cancelbooking', {
        bookingid: bookingid,
        roomid: roomid,
      });
      setTimeout(getBookings, 1000);
    } catch (err) {
      console.log('CANCLE ERROR:::::::', JSON.stringify(err.response, null, 2));
      setTimeout(getBookings, 1000);
    }
  };

  return (
    <View style={styles.container0}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
          alignContent: 'center',
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: -50, paddingTop: 0, marginTop: 10 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>Product Bookings</Text>
      </View>
      {bookings ? (
        bookings.length == 0 ? (
          <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>
            No bookings to show.
          </Text>
        ) : null
      ) : (
        <ActivityIndicator size="large" />
      )}
      <FlatList
        data={bookings}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <BookingCard bookingData={item} onCancelPress={cancelBookings} />
          );
        }}
      />
      <View style={{ flex: 1 }} />
    </View>
  );
};

export default MyBookings;

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 70,
  },
});
