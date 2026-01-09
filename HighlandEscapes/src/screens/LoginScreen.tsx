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
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';
import { spacing, borderRadius, shadows } from '../theme/spacing';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';

interface LoginScreenProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSignUp }) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Header Image Section */}
      <View style={styles.headerImage}>
        <ImageBackground
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhkoVziC_9q60S3zmBj6oymgY-K9Wojfs9fuDmpyVc1x1Y1rm55lNMQQ2TkhQ8M0IRuVXzRyOJjNyWB3Q5nMltCv8rh30fZzt9qKwazfUKHC40YaU1-GyWpleyaE10aKTl9hQqg9D7wcXH1K05JGOdtJ2VfQNY9dbwuQS8zctJgvDAPypQj7ozJwcBhXjAsCJpfBJtf9IXGiiWZ6GW_Ks7T5WL4ncdOS8HT-adNR9FFFdOmJK1dGuFHKuRTGsheKTBoyfVwWSk_3o7',
          }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.headerOverlay} />
          {/* Logo */}
          <View style={[styles.logoContainer, { paddingTop: insets.top + spacing[6] }]}>
            <Icon name="landscape" size={30} color={colors.textWhite} />
            <Text style={styles.logoText}>HIGHLAND TRAVEL</Text>
          </View>
        </ImageBackground>
      </View>

      {/* Main Content Sheet */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.contentSheet}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Headlines */}
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>Welcome Back</Text>
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
              <Icon name="apple" size={20} color={colors.textWhite} />
              <Text style={styles.appleButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Sign Up */}
          <View style={[styles.footer, { paddingBottom: insets.bottom + spacing[6] }]}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surfaceLight,
  },
  headerImage: {
    height: '40%',
    minHeight: 300,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blackOverlay40,
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
  contentSheet: {
    flex: 1,
    backgroundColor: colors.surfaceLight,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -40,
    ...shadows.lg,
  },
  scrollContent: {
    paddingHorizontal: spacing[6],
    paddingTop: spacing[10],
  },
  headlineContainer: {
    alignItems: 'center',
    marginBottom: spacing[8],
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
    gap: spacing[5],
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
    marginVertical: spacing[8],
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
    marginTop: 'auto',
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
