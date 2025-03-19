import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



function Legend(): React.JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Legend:</Text>
      <View style={styles.list}>
        <View style={styles.item}>
          <View style={styles.badge} />
          <Text> - Ok</Text>
        </View>
        <View style={styles.item}>
          <View style={[styles.badge, styles.questionableEffect]} />
          <Text> - Questionable effect</Text>
        </View>
        <View style={styles.item}>
          <View style={[styles.badge, styles.noEffect]} />
          <Text> - Has no effect</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  list: {
    paddingLeft: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 12,
    height: 12,
    borderRadius: '100%',
    backgroundColor: '#CCEEAA',
  },
  noEffect: {
    backgroundColor: '#FFAACC',
  },
  questionableEffect: {
    backgroundColor: '#FFFFCC',
  },
});

export default Legend;
