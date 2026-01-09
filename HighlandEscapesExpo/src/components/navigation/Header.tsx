import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBackPress?: () => void;
  rightIcon?: string;
  onRightPress?: () => void;
  transparent?: boolean;
  light?: boolean;
  centerTitle?: boolean;
  style?: ViewStyle;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  onBackPress,
  rightIcon,
  onRightPress,
  transparent = false,
  light = false,
  centerTitle = true,
  style,
}) => {
  const insets = useSafeAreaInsets();

  const textColor = light ? colors.textWhite : colors.textPrimary;
  const iconColor = light ? colors.textWhite : colors.textPrimary;

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + spacing[2] },
        transparent && styles.transparent,
        !transparent && styles.solid,
        style,
      ]}
    >
      <View style={styles.content}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          {showBack && (
            <TouchableOpacity
              style={[
                styles.iconButton,
                light && styles.iconButtonLight,
              ]}
              onPress={onBackPress}
              activeOpacity={0.7}
            >
              <MaterialIcons name="arrow-back-ios" size={20} color={iconColor} />
            </TouchableOpacity>
          )}
        </View>

        {/* Center Section - Title */}
        {title && centerTitle && (
          <View style={styles.centerSection}>
            <Text
              style={[styles.title, { color: textColor }]}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
        )}

        {/* Title Left aligned */}
        {title && !centerTitle && (
          <Text
            style={[styles.titleLeft, { color: textColor }]}
            numberOfLines={1}
          >
            {title}
          </Text>
        )}

        {/* Right Section */}
        <View style={styles.rightSection}>
          {rightIcon && (
            <TouchableOpacity
              style={[
                styles.iconButton,
                light && styles.iconButtonLight,
              ]}
              onPress={onRightPress}
              activeOpacity={0.7}
            >
              <MaterialIcons name={rightIcon} size={24} color={iconColor} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[2],
    zIndex: 50,
  },
  transparent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  solid: {
    backgroundColor: colors.backgroundLight,
    borderBottomWidth: 1,
    borderBottomColor: colors.slate200,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
  },
  leftSection: {
    width: 40,
    alignItems: 'flex-start',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing[2],
  },
  rightSection: {
    width: 40,
    alignItems: 'flex-end',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonLight: {
    backgroundColor: colors.blackOverlay20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  titleLeft: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: spacing[2],
  },
});

export default Header;
