import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

const DatePicker = ({ title, onChangeDate, value, minimumDate }) => {
  const [date, changedate] = useState();
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type == 'dismissed') {
      changedate(null);
      setShow(false);
    } else {
      const currentDate = selectedDate;
      let tempDate = new Date(currentDate);
      let fDate =
        tempDate.getDate() +
        '-' +
        (tempDate.getMonth() + 1) +
        '-' +
        tempDate.getFullYear();

      changedate(fDate);
      onChangeDate(new Date(currentDate));
      setShow(false);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
      {date == null ? (
        <Text type="date" style={styles.text}>
          {title}
        </Text>
      ) : (
        <Text style={styles.text}>{date}</Text>
      )}
      <AntDesign name="calendar" size={30} color="gold" />
      {show && (
        <DateTimePicker
          value={value}
          minimumDate={minimumDate}
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: 'gold',
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    paddingTop: 9,
    height: 50,
    width: 220,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginRight: 20,
    fontWeight: 'bold',
  },
});
