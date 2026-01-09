import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { spacing, borderRadius } from '../theme/spacing';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDygXJa5mX2agxLynDtVHvQl4hzvGAl4H8XRb0ZWSFg05bDB1_0mNFX3BU8IhRcaEYXtx0ePehim3MD7gUi5pQYTB_IiF5rK7TR0p3sSrt4l5J_9PMW_9N0Cadk-CpU6J8RqVM95HBhsyIiSCfg-_Jtd7F0a-C8i5t9CDUTPZJF-XDN_VKxUBItrslOIvBRmcEl_NGz-hNxqC-XdcfOakUfcW51WnJZbjbbh4LW_IU4z8DJ9s-VJCVStjoTBWRX_GqDo3tfF2kao1mQ',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Gradient Overlay */}
        <View style={styles.gradientOverlay} />

        {/* Content */}
        <View style={styles.content}>
          {/* Top Section: Logo */}
          <View style={styles.topSection}>
            <View style={styles.logoContainer}>
              <Icon name="explore" size={36} color={colors.textWhite} />
            </View>
            <Text style={styles.brandName}>Highland Escapes</Text>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            {/* Headline */}
            <View style={styles.headlineContainer}>
              <Text style={styles.headline}>Explore Europe.</Text>
              <Text style={styles.subheadline}>Travel Together. Stress Free.</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <View style={styles.progressTrack}>
                <View style={styles.progressBar} />
              </View>
              <Text style={styles.loadingText}>Loading experiences...</Text>
            </View>

            {/* Version */}
            <Text style={styles.versionText}>Version 1.0</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    // Simulating gradient with multiple layers
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[12],
  },
  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: spacing[16],
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.whiteOverlay10,
    borderWidth: 1,
    borderColor: colors.whiteOverlay20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  brandName: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textWhite,
    textAlign: 'center',
    textShadowColor: colors.blackOverlay30,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  bottomSection: {
    gap: spacing[6],
    paddingBottom: spacing[8],
  },
  headlineContainer: {
    alignItems: 'center',
    gap: spacing[2],
  },
  headline: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.textWhite,
    textAlign: 'center',
  },
  subheadline: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.whiteOverlay90,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  progressContainer: {
    alignItems: 'center',
    gap: spacing[3],
    paddingHorizontal: spacing[4],
    marginTop: spacing[8],
  },
  progressTrack: {
    width: '100%',
    height: 6,
    borderRadius: borderRadius.full,
    backgroundColor: colors.whiteOverlay20,
  },
  progressBar: {
    width: '45%',
    height: '100%',
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  loadingText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.whiteOverlay50,
    textAlign: 'center',
  },
  versionText: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.whiteOverlay30,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: spacing[4],
  },
});

export default SplashScreen;
