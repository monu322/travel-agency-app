import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { borderRadius, spacing, shadows } from '../../theme/spacing';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: string;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  disabled?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onPress,
  icon,
  iconPosition = 'right',
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected ? styles.selected : styles.unselected,
        selected && shadows.primary,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && iconPosition === 'left' && (
        <MaterialIcons
          name={icon}
          size={18}
          color={selected ? colors.textWhite : colors.textPrimary}
          style={{ marginRight: spacing[1] }}
        />
      )}
      <Text style={[styles.label, selected && styles.labelSelected]}>
        {label}
      </Text>
      {icon && iconPosition === 'right' && (
        <MaterialIcons
          name={icon}
          size={18}
          color={selected ? colors.textWhite : colors.textPrimary}
          style={{ marginLeft: spacing[1] }}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: spacing[4],
    borderRadius: borderRadius.full,
  },
  selected: {
    backgroundColor: colors.primary,
  },
  unselected: {
    backgroundColor: colors.slate200,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  labelSelected: {
    color: colors.textWhite,
  },
});

export default Chip;
