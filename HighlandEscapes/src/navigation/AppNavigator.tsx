import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  SplashScreen,
  OnboardingScreen1,
  OnboardingScreen2,
  LoginScreen,
  ExploreHomeScreen,
} from '../screens';
import { BottomTabBar, TabRoute } from '../components/navigation/BottomTabBar';
import { colors } from '../theme/colors';

type AppScreen =
  | 'Splash'
  | 'Onboarding1'
  | 'Onboarding2'
  | 'Login'
  | 'Main';

export const AppNavigator: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('Splash');
  const [activeTab, setActiveTab] = useState<TabRoute>('Explore');

  const handleSplashFinish = () => {
    setCurrentScreen('Onboarding1');
  };

  const handleOnboarding1Next = () => {
    setCurrentScreen('Onboarding2');
  };

  const handleOnboarding2Continue = () => {
    setCurrentScreen('Login');
  };

  const handleSkip = () => {
    setCurrentScreen('Login');
  };

  const handleLogin = () => {
    setCurrentScreen('Main');
  };

  const handleSignUp = () => {
    // For now, just go to main screen
    setCurrentScreen('Main');
  };

  const handleTripPress = (tripId: string) => {
    // Navigate to package details - would use proper navigation in production
    console.log('Navigate to trip:', tripId);
  };

  const handleTabPress = (tab: TabRoute) => {
    setActiveTab(tab);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen onFinish={handleSplashFinish} />;
      case 'Onboarding1':
        return <OnboardingScreen1 onNext={handleOnboarding1Next} onSkip={handleSkip} />;
      case 'Onboarding2':
        return <OnboardingScreen2 onContinue={handleOnboarding2Continue} onSkip={handleSkip} />;
      case 'Login':
        return <LoginScreen onLogin={handleLogin} onSignUp={handleSignUp} />;
      case 'Main':
        return (
          <View style={styles.mainContainer}>
            {/* Main Tab Content */}
            {activeTab === 'Explore' && (
              <ExploreHomeScreen onTripPress={handleTripPress} />
            )}
            {activeTab === 'MyTrips' && (
              <View style={styles.placeholderScreen}>
                {/* MyTrips Screen - to be implemented */}
              </View>
            )}
            {activeTab === 'Updates' && (
              <View style={styles.placeholderScreen}>
                {/* Updates Screen - to be implemented */}
              </View>
            )}
            {activeTab === 'Profile' && (
              <View style={styles.placeholderScreen}>
                {/* Profile Screen - to be implemented */}
              </View>
            )}
            
            {/* Bottom Tab Bar */}
            <BottomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
          </View>
        );
      default:
        return <SplashScreen onFinish={handleSplashFinish} />;
    }
  };

  return renderScreen();
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  placeholderScreen: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
});

export default AppNavigator;
