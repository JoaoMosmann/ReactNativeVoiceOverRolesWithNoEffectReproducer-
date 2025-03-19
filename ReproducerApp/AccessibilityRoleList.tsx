import React from 'react';
import {
  AccessibilityRole,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const accessibilityRoles: AccessibilityRole[] = [
  'none', 'button', 'togglebutton', 'link', 'search', 'image', 'keyboardkey', 'text', 'adjustable', 'imagebutton',
  'header', 'summary', 'alert', 'checkbox', 'combobox', 'menu', 'menubar', 'menuitem', 'progressbar', 'radio',
  'radiogroup', 'scrollbar', 'spinbutton', 'switch', 'tab', 'tabbar', 'tablist', 'timer', 'list', 'toolbar',
];


const IOSAccessibilityRolesWithNoEffect: AccessibilityRole[] = [
  'alert', 'combobox', 'menu', 'menubar', 'menuitem', 'radio', 'radiogroup', 'scrollbar', 'spinbutton', 'tab',
  'tabbar', 'tablist', 'timer', 'list', 'toolbar',
];

const IOSAccessibilityRolesWithQuestionableEffect: AccessibilityRole[] = [
  'togglebutton', // Gets the Traits value: `Button`, while the 'switch` role gets 2 traits `Button` and `Toggle`. Shouldn't the role togglebutton have the same traits as the 'switch' role?
];

const AndroidAccessibilityRolesWithNoEffect: AccessibilityRole[] = [
  'tabbar', // Throws error on Android
  'search', 'keyboardkey',
];

const AndroidAccessibilityRolesWithQuestionableEffect: AccessibilityRole[] = [
  'text' // Role is not announced on Android, but as it's just text I guess it is fine?
];

function AccessibilityRoleList(): React.JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>AccessibilityRole list:</Text>
      <View style={styles.list}>
        {accessibilityRoles.map(accessibilityRole =>
          <AccessibilityRoleItem key={accessibilityRole} accessibilityRole={accessibilityRole} />
        )}
      </View>
    </View>
  );
}


function AccessibilityRoleItem(props: { accessibilityRole: AccessibilityRole }): React.JSX.Element {
  const accessibilityRole = props.accessibilityRole === 'tabbar' && Platform.OS === 'android' ? 'none' : props.accessibilityRole;
  return (
    <View
      style={styles.item}
      accessible
      accessibilityRole={accessibilityRole}
      accessibilityLabel="Item"
    >
      <View importantForAccessibility="no">
        <Text>{props.accessibilityRole}</Text>
        <View style={styles.itemOSs}>
          <View style={[
            styles.os,
            IOSAccessibilityRolesWithQuestionableEffect.includes(props.accessibilityRole) ? styles.roleWithQuestionableEffect : undefined,
            IOSAccessibilityRolesWithNoEffect.includes(props.accessibilityRole) ? styles.roleWithNoEffect : undefined,
          ]}>
            <Text>iOS</Text>
          </View>
          <View style={styles.osDivider} />
          <View style={[
            styles.os,
            AndroidAccessibilityRolesWithQuestionableEffect.includes(props.accessibilityRole) ? styles.roleWithQuestionableEffect : undefined,
            AndroidAccessibilityRolesWithNoEffect.includes(props.accessibilityRole) ? styles.roleWithNoEffect : undefined,
          ]}>
            <Text>Android</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#CCC',
    margin: 4,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  itemOSs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 120,
    paddingTop: 4,
    marginHorizontal: -12,
  },
  os: {
    backgroundColor: '#CCEEAA',
    alignItems: 'center',
    flexGrow: 1,
  },
  osDivider: { width: 1, backgroundColor: 'black' },
  roleWithNoEffect: {
    backgroundColor: '#FFAACC',
  },
  roleWithQuestionableEffect: {
    backgroundColor: '#FFFFCC',
  }
});

export default AccessibilityRoleList;
