import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const { width } = Dimensions.get('window');

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate logo
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate progress bar
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    }).start(() => {
      onComplete?.();
    });
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{
          uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDygXJa5mX2agxLynDtVHvQl4hzvGAl4H8XRb0ZWSFg05bDB1_0mNFX3BU8IhRcaEYXtx0ePehim3MD7gUi5pQYTB_IiF5rK7TR0p3sSrt4l5J_9PMW_9N0Cadk-CpU6J8RqVM95HBhsyIiSCfg-_Jtd7F0a-C8i5t9CDUTPZJF-XDN_VKxUBItrslOIvBRmcEl_NGz-hNxqC-XdcfOakUfcW51WnJZbjbbh4LW_IU4z8DJ9s-VJCVStjoTBWRX_GqDo3tfF2kao1mQ',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Gradient Overlay for Readability */}
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'transparent', 'rgba(16,21,34,0.95)']}
          style={styles.gradientOverlay}
        />

        {/* Content Container */}
        <View style={styles.contentContainer}>
          {/* Top Section: Logo */}
          <Animated.View
            style={[
              styles.topSection,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <View style={styles.logoContainer}>
              <MaterialIcons name="explore" size={36} color={colors.textWhite} />
            </View>
            <Text style={styles.brandName}>Highland Escapes</Text>
          </Animated.View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            {/* Headline & Subheadline */}
            <Animated.View style={{ opacity: fadeAnim }}>
              <Text style={styles.headline}>Explore Europe.</Text>
              <Text style={styles.subheadline}>Travel Together. Stress Free.</Text>
            </Animated.View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <View style={styles.progressTrack}>
                <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
              </View>
              <Text style={styles.loadingText}>Loading experiences...</Text>
            </View>

            {/* Version */}
            <Text style={styles.versionText}>VERSION 1.0</Text>
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
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    paddingTop: 64,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  brandName: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textWhite,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  bottomSection: {
    gap: 24,
  },
  headline: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.textWhite,
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  subheadline: {
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginTop: 8,
  },
  progressContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
    gap: 12,
  },
  progressTrack: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  loadingText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
  },
  versionText: {
    fontSize: 10,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.3)',
    textAlign: 'center',
    letterSpacing: 2,
    marginTop: 16,
  },
});

export default SplashScreen;
