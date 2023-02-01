import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const BookingCard = ({ bookingData, onCancelPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        {/* LEFT container */}
        <View style={styles.leftContainer}>
          <Text style={styles.name}>{bookingData.tour}</Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ margin: 10 }}>
              <Text style={styles.textLeft}> Status:</Text>
              <Text style={styles.textLeft}> Start Date:</Text>
              <Text style={styles.textLeft}> End Date:</Text>
              <Text style={styles.textLeft}> Total Amount:</Text>
            </View>

            <View style={{ margin: 10 }}>
              <Text style={{ color: 'green', fontWeight: 'bold' }}>Booked</Text>
              <Text style={{ color: 'white' }}> {bookingData.fromdate}</Text>
              <Text style={{ color: 'white' }}> {bookingData.todate}</Text>
              <Text style={{ color: 'yellow' }}>
                {' Rs.  '}
                {bookingData.totalamount}
              </Text>
            </View>
          </View>
        </View>
        {/* RIGHT container */}
        <View style={styles.rightContainer}>
          <Text style={{ color: 'gold', marginLeft: 7, fontSize: 18 }}>
            Total Days:
          </Text>
          <Text style={{ color: 'green', marginLeft: 7, fontSize: 18 }}>
            {bookingData.totaldays}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onCancelPress(bookingData._id, bookingData.tourid)}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    elevation: 5,
    margin: 8,
    backgroundColor: '#292929',
    borderRadius: 15,
  },
  dataContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 3,
  },
  textLeft: {
    color: 'gold',
    fontSize: 14,
  },
  textRight: {
    fontSize: 16,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 12,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'teal',
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'red',
    height: 50,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF',
    marginTop: -2,
  },
});
