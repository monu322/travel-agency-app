# Highland Escapes - Expo Version

A beautifully designed React Native travel booking app built with **Expo** for easier development and deployment.

## 🚀 Quick Start

```bash
# Navigate to the project
cd HighlandEscapesExpo

# Start the development server
npx expo start
```

Then:
- **iOS Simulator**: Press `i`
- **Android Emulator**: Press `a`
- **Physical Device**: Scan QR code with Expo Go app

## 📱 All 14 Screens Included

1. ✅ Splash Screen
2. ✅ Onboarding Screen 1
3. ✅ Onboarding Screen 2
4. ✅ Login / Sign Up
5. ✅ Explore Home
6. ✅ Package Details
7. ✅ Departure Details
8. ✅ Traveler Details
9. ✅ Review & Pay
10. ✅ Booking Confirmation
11. ✅ My Trips Hub
12. ✅ Trip Hub
13. ✅ Updates Tab
14. ✅ Profile & Settings

## 🎯 Why Expo?

| Feature | Benefit |
|---------|---------|
| **Expo Go App** | Test on device without building |
| **@expo/vector-icons** | Icons work out of the box |
| **OTA Updates** | Push updates without app store |
| **EAS Build** | Cloud builds for iOS/Android |
| **Web Support** | Run as web app too! |

## 📦 Dependencies

All pre-installed and configured:
- `expo` - Core framework
- `expo-linear-gradient` - Gradient backgrounds
- `expo-status-bar` - Status bar control
- `react-native-safe-area-context` - Safe area handling
- `@expo/vector-icons` - Material icons & more

## 🛠️ Project Structure

```
HighlandEscapesExpo/
├── App.tsx                    # Main entry with navigation
├── app.json                   # Expo configuration
├── package.json               # Dependencies
└── src/
    ├── components/
    │   ├── common/            # Reusable UI components
    │   └── navigation/        # Tab bar, headers
    ├── screens/               # All 14 app screens
    └── theme/                 # Colors, spacing, typography
```

## 🎨 Running Different Platforms

```bash
# iOS (requires Mac with Xcode)
npx expo run:ios

# Android (requires Android Studio)
npx expo run:android

# Web browser
npx expo start --web
```

## 📱 Testing on Physical Device

1. Install **Expo Go** from App Store / Play Store
2. Run `npx expo start`
3. Scan the QR code with your camera

## 🔧 Build for Production

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## 📝 Notes

- All screens converted from HTML designs
- Uses `@expo/vector-icons` (MaterialIcons) for icons
- Navigation is state-based (can upgrade to Expo Router)
- Remote images used as placeholders

## 🌐 Web Support

Run as a web app:
```bash
npx expo start --web
```

Enjoy your Scottish adventure! 🏔️🏴󠁧󠁢󠁳󠁣󠁴󠁿
