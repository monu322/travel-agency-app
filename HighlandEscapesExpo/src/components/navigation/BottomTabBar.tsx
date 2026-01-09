import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export type TabRoute = 'Explore' | 'MyTrips' | 'Updates' | 'Profile';

interface TabItem {
  name: TabRoute;
  label: string;
  icon: string;
  iconFilled: string;
  hasNotification?: boolean;
}

const tabs: TabItem[] = [
  {
    name: 'Explore',
    label: 'Explore',
    icon: 'explore',
    iconFilled: 'explore',
  },
  {
    name: 'MyTrips',
    label: 'My Trips',
    icon: 'airplane-ticket',
    iconFilled: 'airplane-ticket',
  },
  {
    name: 'Updates',
    label: 'Updates',
    icon: 'notifications-none',
    iconFilled: 'notifications',
    hasNotification: true,
  },
  {
    name: 'Profile',
    label: 'Profile',
    icon: 'person-outline',
    iconFilled: 'person',
  },
];

interface BottomTabBarProps {
  activeTab: TabRoute;
  onTabPress: (tab: TabRoute) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  onTabPress,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: Math.max(insets.bottom, spacing[2]) },
      ]}
    >
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tab}
              onPress={() => onTabPress(tab.name)}
              activeOpacity={0.7}
            >
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name={isActive ? tab.iconFilled : tab.icon}
                  size={26}
                  color={isActive ? colors.primary : colors.slate400}
                />
                {tab.hasNotification && (
                  <View style={styles.notificationDot} />
                )}
              </View>
              <Text
                style={[
                  styles.label,
                  isActive && styles.labelActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.surfaceLight,
    borderTopWidth: 1,
    borderTopColor: colors.slate200,
    paddingTop: spacing[2],
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing[1],
  },
  iconContainer: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.red500,
    borderWidth: 2,
    borderColor: colors.surfaceLight,
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.slate400,
    marginTop: spacing[1],
  },
  labelActive: {
    fontWeight: '700',
    color: colors.primary,
  },
});

export default BottomTabBar;
