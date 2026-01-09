import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';

const { width, height } = Dimensions.get('window');

interface OnboardingScreen1Props {
  onNext: () => void;
  onSkip: () => void;
}

export const OnboardingScreen1: React.FC<OnboardingScreen1Props> = ({
  onNext,
  onSkip,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity
        style={[styles.skipButton, { top: insets.top + spacing[3] }]}
        onPress={onSkip}
        activeOpacity={0.7}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Hero Image Section */}
      <View style={styles.heroSection}>
        <ImageBackground
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdAKw6KHID9ZPg2gWOOjMk-_mkL1N4OhfPq48D3l7tQkxV7jLemZ6ycKv8z8iomdlgfVJGa_25aZeVOXl45AH2v7aucqsrGamgwYyWWc6lNdmuExJrqPYB_NDTWoAwOSusBWPL1Z_OIvxg0OZtXD7j1vtCyMKUgD6A7nj4DtFx1wyUQ3v_KLn49RBB7Ul5sbICtGRGM521aPaMORRzJpfQEynZJNNTt2YvFh6ldokgN2QkrJikRSicbQOljPuPzA6a6_yP0DbJIF35',
          }}
          style={styles.heroImage}
          resizeMode="cover"
        >
          {/* Gradient Overlay */}
          <View style={styles.gradientTop} />
          <View style={styles.gradientBottom} />
        </ImageBackground>
      </View>

      {/* Content Bottom Sheet */}
      <View style={[styles.contentSheet, { paddingBottom: insets.bottom + spacing[8] }]}>
        {/* Headline */}
        <Text style={styles.headline}>Curated Group Adventures</Text>

        {/* Body Text */}
        <Text style={styles.bodyText}>
          Join like-minded travelers on expertly planned, fixed-date journeys
          through the heart of Scotland and Europe.
        </Text>

        {/* Navigation Footer */}
        <View style={styles.footer}>
          {/* Page Indicators */}
          <View style={styles.indicators}>
            <View style={[styles.indicator, styles.indicatorActive]} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={onNext}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>Next</Text>
            <Icon name="arrow-forward" size={20} color={colors.textWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  skipButton: {
    position: 'absolute',
    right: spacing[6],
    zIndex: 30,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[1.5],
    borderRadius: borderRadius.full,
    backgroundColor: colors.blackOverlay20,
  },
  skipText: {
    color: colors.textWhite,
    fontSize: 14,
    fontWeight: '700',
  },
  heroSection: {
    height: '65%',
    width: '100%',
  },
  heroImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '20%',
    backgroundColor: colors.blackOverlay40,
  },
  gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20%',
    backgroundColor: colors.blackOverlay10,
  },
  contentSheet: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -32,
    paddingHorizontal: spacing[6],
    paddingTop: spacing[10],
    ...shadows.lg,
  },
  headline: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
    lineHeight: 36,
    maxWidth: 280,
    alignSelf: 'center',
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.slate500,
    textAlign: 'center',
    lineHeight: 26,
    marginTop: spacing[4],
    maxWidth: 340,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: spacing[4],
  },
  indicators: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.slate300,
  },
  indicatorActive: {
    width: 32,
    backgroundColor: colors.primary,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    backgroundColor: colors.primary,
    paddingLeft: spacing[6],
    paddingRight: spacing[5],
    paddingVertical: spacing[3.5],
    borderRadius: borderRadius.full,
    ...shadows.primary,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textWhite,
  },
});

export default OnboardingScreen1;
