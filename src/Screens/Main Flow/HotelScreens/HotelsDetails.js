import React, { useState, useContext } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import DatePicker from '../../../Components/DatePicker';
import wandererAPI from '../../../api/Wanderer';
import { Context as AuthContext } from '../../../Context/AuthContext';
import StripeCheckout from 'react-native-simple-stripe';
import { Overlay } from '@rneui/themed';

const HotelDetails = ({ route, navigation }) => {
  const { hoteldetails } = route.params;
  const publicKey =
    'pk_test_51M2qZEJdqzfSzjlZrwNofnmcIZtUP3D9f8JRh3mCzj4f2kmBcXaHarx6pCr7D4dLBVWaHidXsY7MctqwxUwD0BQe00dGUcMYUU';
  const { state } = useContext(AuthContext);
  const user = JSON.parse(state.token);
  const [startDate, onChangeStartDate] = useState(new Date());
  const [endDate, onChangeEndDate] = useState(new Date());
  const [totalDays, setTotalDays] = useState(0);
  const [totalAmount, setTotalAmount] = useState();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const calTotals = () => {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    setTotalDays(diffInDays);
    setTotalAmount(diffInDays * hoteldetails.rentperday);
  };

  const onToken = async (token) => {
    try {
      const response = await wandererAPI.post('/api/bookings/bookroom', {
        room: hoteldetails,
        userid: user._id,
        fromdate: startDate,
        todate: endDate,
        totalAmount: totalAmount,
        totaldays: totalDays,
        token: token,
      });
      {
        response.data
          ? (alert('Payment Successful, Your Room is booked'),
            navigation.goBack('Hotel'))
          : alert('Something went wrong. Try Again!');
      }
    } catch (error) {
      console.log('BOOKERROR', error);
    }
  };

  return (
    <LinearGradient colors={['white', 'white']} style={styles.container}>
      <View style={styles.header}>
        <FlatList
          data={hoteldetails.imageurls}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <Image
                style={{ height: '100%', width: 500 }}
                source={{ uri: item }}
              />
            );
          }}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
          {hoteldetails.name}
        </Text>
        <Text style={styles.price}>Rs. {hoteldetails.rentperday}/day</Text>
        <Text style={styles.text}> Reviews:</Text>

        <Text style={styles.reviewValue}>{'  '}4.8</Text>
        <Text style={styles.description}>Description:</Text>
        <Text style={styles.text}>{hoteldetails.discription}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <DatePicker
            title={'Select Start Date'}
            onChangeDate={onChangeStartDate}
            value={new Date()}
            minimumDate={new Date()}
          />
          <DatePicker
            title={'Select End Date'}
            onChangeDate={onChangeEndDate}
            value={startDate}
            minimumDate={startDate}
          />
        </View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={{ backgroundColor: 'transparent', elevation: -2 }}
        >
          <StripeCheckout token={onToken} stripeKey={publicKey} />
        </Overlay>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              calTotals();
              toggleOverlay();
            }}
          >
            <LinearGradient
              colors={['#606A6D', '#14FC9B']}
              style={styles.SignIn}
            >
              <Text style={styles.textSign}>Book Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default HotelDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: '-150%',
    left: '5%',
  },
  footer: {
    height: 400,
    backgroundColor: '#6B3940',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: -25,
  },

  logo: {
    width: 230,
    height: 290,
  },

  title: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    maxWidth: '55%',
  },

  text: {
    color: 'grey',
    marginTop: 10,
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 10,
  },

  SignIn: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold',
  },
  price: {
    color: 'gold',
    marginLeft: 300,
    fontSize: 20,
    marginTop: -28,
  },
  reviewValue: {
    color: 'gold',
    marginLeft: 60,
    marginTop: -19,
  },
  description: {
    marginTop: 10,
    marginLeft: 3,
    color: 'white',
  },
});
