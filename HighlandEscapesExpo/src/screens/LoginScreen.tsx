import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';

const { height } = Dimensions.get('window');

interface LoginScreenProps {
  onLogin: () => void;
  onSignUp?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSignUp }) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Background Image - Absolutely positioned behind everything */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdAKw6KHID9ZPg2gWOOjMk-_mkL1N4OhfPq48D3l7tQkxV7jLemZ6ycKv8z8iomdlgfVJGa_25aZeVOXl45AH2v7aucqsrGamgwYyWWc6lNdmuExJrqPYB_NDTWoAwOSusBWPL1Z_OIvxg0OZtXD7j1vtCyMKUgD6A7nj4DtFx1wyUQ3v_KLn49RBB7Ul5sbICtGRGM521aPaMORRzJpfQEynZJNNTt2YvFh6ldokgN2QkrJikRSicbQOljPuPzA6a6_yP0DbJIF35',
          }}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
        >
          {/* Top Gradient Overlay */}
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.3)', 'transparent']}
            style={styles.gradientTop}
          />
          {/* Logo */}
          <View style={[styles.logoContainer, { paddingTop: insets.top + spacing[4] }]}>
            <MaterialIcons name="landscape" size={30} color={colors.textWhite} />
            <Text style={styles.logoText}>HIGHLAND ESCAPES</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Content Sheet - overlaps the image */}
      <View style={styles.contentWrapper}>
        <View style={styles.contentSheet}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + spacing[6] }]}
            >
              {/* Headlines */}
              <View style={styles.headlineContainer}>
                <Text style={styles.headline}>Welcome</Text>
                <Text style={styles.subheadline}>Log in to access your itinerary.</Text>
              </View>

              {/* Login Form */}
              <View style={styles.form}>
                <Input
                  label="Email Address"
                  icon="mail"
                  placeholder="name@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />

                <View>
                  <View style={styles.passwordHeader}>
                    <Text style={styles.passwordLabel}>Password</Text>
                    <TouchableOpacity>
                      <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                  <Input
                    icon="lock"
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>

                <Button
                  title="Log In"
                  onPress={onLogin}
                  icon="arrow-forward"
                  fullWidth
                  size="large"
                  style={{ marginTop: spacing[4] }}
                />
              </View>

              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or continue with</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Logins */}
              <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.appleButton}>
                  <MaterialIcons name="apple" size={20} color={colors.textWhite} />
                  <Text style={styles.appleButtonText}>Continue with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleButton}>
                  <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>
              </View>

              {/* Footer Sign Up */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>
                  Don't have an account?{' '}
                  <Text style={styles.signUpLink} onPress={onSignUp}>
                    Sign Up
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
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
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '45%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  imageStyle: {
    resizeMode: 'cover',
    // @ts-ignore - web-only styles
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textWhite,
    letterSpacing: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 350,
  },
  contentSheet: {
    flex: 1,
    backgroundColor: colors.surfaceLight,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    ...shadows.lg,
  },
  scrollContent: {
    paddingHorizontal: spacing[6],
    paddingTop: spacing[8],
  },
  headlineContainer: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  headline: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing[2],
  },
  subheadline: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.slate500,
  },
  form: {
    gap: spacing[4],
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[1.5],
    marginLeft: spacing[1],
  },
  passwordLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing[6],
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.slate200,
  },
  dividerText: {
    paddingHorizontal: spacing[4],
    fontSize: 14,
    fontWeight: '500',
    color: colors.slate500,
  },
  socialButtons: {
    gap: spacing[3],
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[3],
    height: 48,
    backgroundColor: colors.textPrimary,
    borderRadius: borderRadius.lg,
  },
  appleButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textWhite,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[3],
    height: 48,
    backgroundColor: colors.surfaceLight,
    borderWidth: 1,
    borderColor: colors.slate200,
    borderRadius: borderRadius.lg,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.slate700,
  },
  footer: {
    alignItems: 'center',
    paddingTop: spacing[6],
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.slate600,
  },
  signUpLink: {
    color: colors.primary,
    fontWeight: '700',
  },
});

export default LoginScreen;
