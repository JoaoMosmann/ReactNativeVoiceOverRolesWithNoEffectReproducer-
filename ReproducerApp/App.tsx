/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import AccessibilityRoleList from './AccessibilityRoleList';
import RoleList from './RoleList';
import Legend from './Legend';

function App(): React.JSX.Element {
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={{paddingTop: safePadding}} />
        <Legend />
        <AccessibilityRoleList />
        <RoleList />
      </ScrollView>
    </View>
  );
}

export default App;
