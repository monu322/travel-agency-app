import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

interface OnboardingScreen2Props {
  onContinue: () => void;
  onSkip: () => void;
}

export const OnboardingScreen2: React.FC<OnboardingScreen2Props> = ({
  onContinue,
  onSkip,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGDNlg5ojYXfBLeLxGvBt1P5kTuJS_Zvu6vtD_bleCy0VgFxaQNsjV5KpHFaSxfTz5Os-cYmJxU1e9TD-HQ9mN0tYJjZY1OUq8zaFZKyrkqTAe9nCg-mbhoFfTUyZ9R6LShwwguOWZySquu-o4oNIyjgnvrfd0s4op4SM01381lN1udU6TRJfH3-ga9DmITOT-OXEU6VHC0SEGthYuSZJ3AkaSqlfRdm40SUpTcL3NeFezg-73afceXtz64wqHabEhnl2ow5ncM51g',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Gradient Overlay */}
        <View style={styles.gradientOverlay} />

        {/* Skip Button */}
        <TouchableOpacity
          style={[styles.skipButton, { top: insets.top + spacing[6] }]}
          onPress={onSkip}
          activeOpacity={0.7}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Content Card */}
      <View style={[styles.contentCard, { paddingBottom: insets.bottom + spacing[6] }]}>
        {/* Drag Handle */}
        <View style={styles.dragHandle} />

        {/* Icon */}
        <View style={styles.iconWrapper}>
          <Icon name="map" size={28} color={colors.emerald600} />
        </View>

        {/* Headline */}
        <Text style={styles.headline}>Expertly Planned Adventures</Text>

        {/* Body Text */}
        <Text style={styles.bodyText}>
          Forget the logistics. Join our fixed-date group trips and focus purely
          on making memories with like-minded travelers.
        </Text>

        {/* Page Indicators */}
        <View style={styles.indicators}>
          <View style={styles.indicator} />
          <View style={[styles.indicator, styles.indicatorActive]} />
          <View style={styles.indicator} />
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={onContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
          <Icon name="arrow-forward" size={20} color={colors.textWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blackOverlay40,
  },
  skipButton: {
    position: 'absolute',
    right: spacing[6],
    zIndex: 20,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    backgroundColor: colors.blackOverlay20,
    borderWidth: 1,
    borderColor: colors.whiteOverlay10,
  },
  skipText: {
    color: colors.whiteOverlay90,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  contentCard: {
    backgroundColor: colors.backgroundLight,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: spacing[6],
    paddingTop: spacing[2],
    alignItems: 'center',
    ...shadows.lg,
  },
  dragHandle: {
    width: 48,
    height: 6,
    borderRadius: borderRadius.full,
    backgroundColor: colors.gray300,
    marginVertical: spacing[4],
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: borderRadius['2xl'],
    backgroundColor: colors.emerald50,
    borderWidth: 1,
    borderColor: colors.emerald100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[5],
  },
  headline: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: spacing[3],
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray500,
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: spacing[2],
    marginBottom: spacing[8],
    maxWidth: 340,
  },
  indicators: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[8],
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray300,
  },
  indicatorActive: {
    width: 32,
    backgroundColor: colors.primary,
  },
  continueButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: borderRadius.xl,
    ...shadows.primary,
  },
  continueButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textWhite,
  },
});

export default OnboardingScreen2;
