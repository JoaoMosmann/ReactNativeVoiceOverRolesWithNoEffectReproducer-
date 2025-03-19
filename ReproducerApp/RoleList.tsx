import React from 'react';
import {
  Role,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const roles: Role[] = [
  'alert', 'alertdialog', 'application', 'article', 'banner', 'button', 'cell', 'checkbox', 'columnheader','combobox',
  'complementary', 'contentinfo', 'definition', 'dialog', 'directory', 'document', 'feed', 'figure', 'form', 'grid',
  'group','heading', 'img', 'link', 'list', 'listitem', 'log', 'main', 'marquee', 'math', 'menu', 'menubar', 'menuitem',
  'meter', 'navigation', 'none', 'note', 'option', 'presentation', 'progressbar', 'radio', 'radiogroup', 'region', 'row',
  'rowgroup', 'rowheader', 'scrollbar', 'searchbox', 'separator', 'slider', 'spinbutton', 'status', 'summary', 'switch',
  'tab', 'table', 'tablist', 'tabpanel', 'term', 'timer', 'toolbar', 'tooltip', 'tree', 'treegrid', 'treeitem',
];

const IOSRolesWithNoEffect: Role[] = [
  'alert', 'alertdialog', 'application', 'article', 'banner', 'cell', 'columnheader','combobox', 'complementary',
  'contentinfo', 'definition', 'dialog', 'directory', 'document', 'feed', 'figure', 'form', 'grid', 'group',
  'list', 'listitem', 'log', 'main', 'marquee', 'math', 'menu', 'menubar', 'menuitem', 'meter', 'navigation',
  'none', 'note', 'option', 'presentation', 'radiogroup', 'region', 'row', 'rowgroup', 'rowheader', 'scrollbar',
  'searchbox', 'separator', 'slider', 'spinbutton', 'status', 'tab', 'table', 'tablist', 'tabpanel', 'term', 'timer',
  'toolbar', 'tooltip', 'tree', 'treegrid', 'treeitem',
];

const IOSRolesWithQuestionableEffect: Role[] = [
  'radio', // Not questionable, but if the same value is provided on the `accessibilityRole` prop, no effect is taken.
];

const AndroidRolesWithNoEffect: Role[] = [
  'alertdialog', 'application', 'article', 'banner', 'cell', 'columnheader', 'complementary', 'contentinfo', 'definition', 'dialog',
  'directory', 'document', 'feed', 'figure', 'form', 'group', 'listitem', 'log', 'main', 'marquee', 'math', 'meter', 'navigation',
  'note', 'option', 'presentation', 'region', 'row', 'rowgroup', 'rowheader', 'searchbox', 'separator', 'status', 'table', 'tablist',
  'tabpanel', 'term', 'tooltip', 'tree', 'treegrid', 'treeitem',
];

const AndroidRolesWithQuestionableEffect: Role[] = [
];


function RoleList(): React.JSX.Element {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Role list:</Text>
      <View style={styles.list}>
        {roles.map(role =>
          <RoleItem key={role} role={role} />
        )}
      </View>
    </View>
  );
}

function RoleItem({ role }: { role: Role }): React.JSX.Element {
  return (
    <View
      style={styles.item}
      accessible
      role={role}
      accessibilityLabel="Item"
    >
      <View importantForAccessibility="no">
        <Text>{role}</Text>
        <View style={styles.itemOSs}>
          <View style={[
            styles.os,
            IOSRolesWithQuestionableEffect.includes(role) ? styles.roleWithQuestionableEffect : undefined,
            IOSRolesWithNoEffect.includes(role) ? styles.roleWithNoEffect : undefined,
          ]}>
            <Text>iOS</Text>
          </View>
          <View style={styles.osDivider} />
          <View style={[
            styles.os,
            AndroidRolesWithQuestionableEffect.includes(role) ? styles.roleWithQuestionableEffect : undefined,
            AndroidRolesWithNoEffect.includes(role) ? styles.roleWithNoEffect : undefined,
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
  osDivider: { width: 1, backgroundColor: 'black' },
  os: {
    backgroundColor: '#CCEEAA',
    alignItems: 'center',
    flexGrow: 1,
  },
  roleWithNoEffect: {
    backgroundColor: '#FFAACC',
  },
  roleWithQuestionableEffect: {
    backgroundColor: '#FFFFCC',
  }
});

export default RoleList;
