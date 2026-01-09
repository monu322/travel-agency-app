import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { colors } from '../../theme/colors';

interface GradientConfig {
  colors: string[];
  locations?: number[];
}

interface ImageWithGradientProps {
  source: ImageSourcePropType | { uri: string };
  height?: number | string;
  width?: number | string;
  gradient?: 'bottom' | 'top' | 'full' | 'none';
  customGradient?: GradientConfig;
  children?: React.ReactNode;
  style?: ViewStyle;
  imageStyle?: ViewStyle;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
}

export const ImageWithGradient: React.FC<ImageWithGradientProps> = ({
  source,
  height = 200,
  width = '100%',
  gradient = 'bottom',
  customGradient,
  children,
  style,
  imageStyle,
  resizeMode = 'cover',
}) => {
  const getGradientStyle = (): ViewStyle => {
    switch (gradient) {
      case 'top':
        return {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          backgroundColor: 'transparent',
          // Using a simple overlay since LinearGradient needs expo-linear-gradient
        };
      case 'full':
        return {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: colors.blackOverlay40,
        };
      case 'none':
        return {};
      default:
        return {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
        };
    }
  };

  return (
    <View style={[{ height: height as any, width: width as any }, style]}>
      <ImageBackground
        source={source as ImageSourcePropType}
        style={[styles.image, imageStyle]}
        resizeMode={resizeMode}
      >
        {/* Gradient Overlay - Using View with semi-transparent background */}
        {gradient !== 'none' && (
          <View style={[styles.gradientOverlay, getGradientStyle()]} />
        )}
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    // Simulating gradient with a semi-transparent overlay
    // For actual gradient, use react-native-linear-gradient
    backgroundColor: 'transparent',
    // This creates a gradient-like effect
    opacity: 1,
  },
});

// Helper component for simulating gradient with multiple overlays
export const GradientOverlay: React.FC<{
  variant?: 'bottom' | 'top' | 'bottomHeavy';
  style?: ViewStyle;
}> = ({ variant = 'bottom', style }) => {
  if (variant === 'bottomHeavy') {
    return (
      <View style={[StyleSheet.absoluteFillObject, style]}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: colors.blackOverlay80,
              opacity: 0.3,
              top: '40%',
            },
          ]}
        />
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: colors.blackOverlay60,
              opacity: 0.5,
              top: '60%',
            },
          ]}
        />
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: colors.blackOverlay80,
              opacity: 0.8,
              top: '80%',
            },
          ]}
        />
      </View>
    );
  }

  if (variant === 'top') {
    return (
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: colors.blackOverlay40,
            height: '30%',
          },
          style,
        ]}
      />
    );
  }

  return (
    <View style={[StyleSheet.absoluteFillObject, style]}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: colors.blackOverlay60,
            top: '50%',
          },
        ]}
      />
    </View>
  );
};

export default ImageWithGradient;
