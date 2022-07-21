import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

const DatePicker = () => {
  const [date, setDate] = useState(new Date);

  return (
    <View style={styles.container}>
      <DateTimePicker
        value={date}
        mode='date'
        display='default'
        onChange={(e, d) => {
          setDate(d)
        }}
        style={{ backgoundColor: 'white' }}
      />
    </View>
  )
}

export { DatePicker };