import React from 'react';
import { View } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import styles from './styles';

const DatePicker = () => {
  const [date, setDate] = useState(new Date);

  return (
    <View style={styles.container}>
      <DateTimePickerAndroid
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