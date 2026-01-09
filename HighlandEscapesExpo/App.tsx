import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  SplashScreen,
  OnboardingScreen1,
  OnboardingScreen2,
  LoginScreen,
  ExploreHomeScreen,
  PackageDetailsScreen,
  DepartureDetailsScreen,
  TravelerDetailsScreen,
  ReviewPayScreen,
  BookingConfirmationScreen,
  MyTripsScreen,
  UpdatesScreen,
  ProfileScreen,
} from './src/screens';
import { BottomTabBar } from './src/components/navigation/BottomTabBar';
import { View } from 'react-native';

type Screen =
  | 'splash'
  | 'onboarding1'
  | 'onboarding2'
  | 'login'
  | 'explore'
  | 'packageDetails'
  | 'departureDetails'
  | 'travelerDetails'
  | 'reviewPay'
  | 'bookingConfirmation'
  | 'myTrips'
  | 'updates'
  | 'profile';

type Tab = 'Explore' | 'MyTrips' | 'Updates' | 'Profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [currentTab, setCurrentTab] = useState<Tab>('Explore');

  useEffect(() => {
    // Auto-navigate from splash after 3 seconds
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding1');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);
    // Map tab names to screen names
    const tabToScreen: Record<Tab, Screen> = {
      'Explore': 'explore',
      'MyTrips': 'myTrips',
      'Updates': 'updates',
      'Profile': 'profile',
    };
    setCurrentScreen(tabToScreen[tab]);
  };

  const showTabBar = ['explore', 'myTrips', 'updates', 'profile'].includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('onboarding1')} />;
      case 'onboarding1':
        return (
          <OnboardingScreen1
            onNext={() => setCurrentScreen('onboarding2')}
            onSkip={() => setCurrentScreen('login')}
          />
        );
      case 'onboarding2':
        return (
          <OnboardingScreen2
            onGetStarted={() => setCurrentScreen('login')}
            onBack={() => setCurrentScreen('onboarding1')}
          />
        );
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('explore')} />;
      case 'explore':
        return (
          <ExploreHomeScreen
            onTripPress={() => setCurrentScreen('packageDetails')}
          />
        );
      case 'packageDetails':
        return (
          <PackageDetailsScreen
            onBack={() => setCurrentScreen('explore')}
            onSelectDate={() => setCurrentScreen('departureDetails')}
          />
        );
      case 'departureDetails':
        return (
          <DepartureDetailsScreen
            onBack={() => setCurrentScreen('packageDetails')}
            onBookSeat={() => setCurrentScreen('travelerDetails')}
          />
        );
      case 'travelerDetails':
        return (
          <TravelerDetailsScreen
            onBack={() => setCurrentScreen('departureDetails')}
            onContinue={() => setCurrentScreen('reviewPay')}
            onCancel={() => setCurrentScreen('explore')}
          />
        );
      case 'reviewPay':
        return (
          <ReviewPayScreen
            onBack={() => setCurrentScreen('travelerDetails')}
            onConfirmPayment={() => setCurrentScreen('bookingConfirmation')}
          />
        );
      case 'bookingConfirmation':
        return (
          <BookingConfirmationScreen
            onViewTrip={() => setCurrentScreen('myTrips')}
            onBackToHome={() => setCurrentScreen('explore')}
          />
        );
      case 'myTrips':
        return (
          <MyTripsScreen
            onTripPress={() => setCurrentScreen('packageDetails')}
          />
        );
      case 'updates':
        return <UpdatesScreen />;
      case 'profile':
        return (
          <ProfileScreen
            onLogout={() => setCurrentScreen('login')}
          />
        );
      default:
        return <SplashScreen onComplete={() => setCurrentScreen('onboarding1')} />;
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        {renderScreen()}
        {showTabBar && (
          <BottomTabBar
            activeTab={currentTab}
            onTabPress={handleTabChange}
          />
        )}
      </View>
    </SafeAreaProvider>
  );
}
