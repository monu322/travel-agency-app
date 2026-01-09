# Highland Escapes - React Native Travel App

A beautifully designed React Native travel booking app for exploring Scotland and Europe. This app has been converted from HTML/CSS designs to native React Native components with all 14 screens fully implemented.

## 🏔️ Features

- **Splash Screen**: Beautiful animated loading screen with progress bar
- **Onboarding Flow**: Two-step onboarding introducing the app features
- **Login/Sign Up**: Authentication screens with social login options
- **Explore Home**: Browse featured trips and upcoming departures
- **Package Details**: Comprehensive trip info with itinerary, FAQs, gallery
- **Departure Details**: Specific departure dates, pricing, meeting points
- **Booking Flow**: Multi-step booking with traveler details and payment
- **Booking Confirmation**: Success screen with next steps
- **My Trips**: View and manage upcoming and past trips
- **Updates/Notifications**: Stay informed about trip updates
- **Profile & Settings**: User profile management

## 📱 All 14 Screens Implemented

1. ✅ **Splash Screen** - Loading animation with logo
2. ✅ **Onboarding Screen 1** - "Curated Group Adventures"
3. ✅ **Onboarding Screen 2** - "Expertly Planned Adventures"
4. ✅ **Login / Sign Up** - Email/password with social options
5. ✅ **Explore Home** - Featured trips, filters, trip cards
6. ✅ **Package Details** - Full trip info, itinerary, FAQs
7. ✅ **Departure Details** - Dates, meeting point, pricing
8. ✅ **Traveler Details** - Form for personal info (Step 1)
9. ✅ **Review & Pay** - Payment method selection (Step 3)
10. ✅ **Booking Confirmation** - Success with next steps
11. ✅ **My Trips Hub** - Upcoming and past trips list
12. ✅ **Trip Hub** - Active trip details (uses PackageDetails)
13. ✅ **Updates Tab** - Notifications and alerts
14. ✅ **Profile & Settings** - User profile, settings menu

## 🛠️ Tech Stack

- **React Native** (0.73+)
- **TypeScript** for type safety
- **react-native-safe-area-context** for safe area handling
- **react-native-vector-icons** for Material Design icons

## 📁 Project Structure

```
HighlandEscapes/
├── App.tsx                    # Main app entry point
├── index.js                   # React Native entry point
├── app.json                   # App configuration
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript configuration
├── babel.config.js            # Babel configuration
└── src/
    ├── components/
    │   ├── common/            # Reusable UI components
    │   │   ├── Badge.tsx      # Status badges
    │   │   ├── Button.tsx     # Primary buttons
    │   │   ├── Card.tsx       # Card containers
    │   │   ├── Chip.tsx       # Filter chips
    │   │   ├── IconButton.tsx # Icon-only buttons
    │   │   ├── ImageWithGradient.tsx
    │   │   ├── Input.tsx      # Form inputs
    │   │   └── index.ts
    │   └── navigation/
    │       ├── BottomTabBar.tsx  # Main tab navigation
    │       └── Header.tsx        # Screen headers
    ├── navigation/
    │   └── AppNavigator.tsx   # Navigation controller
    ├── screens/
    │   ├── SplashScreen.tsx
    │   ├── OnboardingScreen1.tsx
    │   ├── OnboardingScreen2.tsx
    │   ├── LoginScreen.tsx
    │   ├── ExploreHomeScreen.tsx
    │   ├── PackageDetailsScreen.tsx
    │   ├── DepartureDetailsScreen.tsx
    │   ├── TravelerDetailsScreen.tsx
    │   ├── ReviewPayScreen.tsx
    │   ├── BookingConfirmationScreen.tsx
    │   ├── MyTripsScreen.tsx
    │   ├── UpdatesScreen.tsx
    │   ├── ProfileScreen.tsx
    │   └── index.ts
    └── theme/
        ├── colors.ts          # Color palette
        ├── typography.ts      # Font styles
        ├── spacing.ts         # Spacing & shadows
        └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- React Native development environment set up
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

1. Navigate to the project directory:
```bash
cd HighlandEscapes
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS pods (macOS only):
```bash
cd ios && pod install && cd ..
```

4. Link vector icons (if needed):
```bash
npx react-native-asset
```

### Running the App

**iOS:**
```bash
npm run ios
# or
npx react-native run-ios
```

**Android:**
```bash
npm run android
# or
npx react-native run-android
```

## 🎨 Design System

### Colors

The app uses a carefully crafted color palette:

- **Primary**: `#1142d4` (Blue)
- **Background Light**: `#f6f6f8`
- **Background Dark**: `#101522`
- **Surface Light**: `#ffffff`
- **Text Primary**: `#0d111b`
- **Text Secondary**: `#4c5f9a`

### Color Variants
- Green (success): `#10b981`, `#22c55e`
- Red (error): `#ef4444`, `#dc2626`
- Amber (warning): `#f59e0b`, `#eab308`

### Typography

Uses the Manrope font family with weights:
- Regular (400)
- Medium (500)
- Semi-Bold (600)
- Bold (700)
- Extra Bold (800)

### Components

All components are built to be:
- **Reusable** - Can be used across different screens
- **Customizable** - Support for variants and styling props
- **Accessible** - Proper hit areas and contrast ratios

## 🔧 Customization

### Adding New Screens

1. Create a new screen in `src/screens/`
2. Export from `src/screens/index.ts`
3. Add navigation logic in `src/navigation/AppNavigator.tsx`

### Modifying Theme

Edit files in `src/theme/` to customize:
- `colors.ts` - Color palette
- `typography.ts` - Font styles
- `spacing.ts` - Spacing values and shadows

## 📝 Notes

- TypeScript errors shown in the editor will resolve after running `npm install`
- The app uses remote images from Google Cloud URLs as placeholders
- For production, replace with local assets or your own image CDN
- Navigation is implemented with a simple state-based approach - can be upgraded to React Navigation

## 🗺️ User Flow

```
Splash → Onboarding 1 → Onboarding 2 → Login
                                         ↓
    ┌─────────────────────────────────────────────────┐
    │                   Main App                       │
    ├─────────┬──────────┬──────────┬─────────────────┤
    │ Explore │ My Trips │ Updates  │ Profile         │
    │   ↓     │    ↓     │          │                 │
    │ Package │ Trip Hub │          │                 │
    │ Details │          │          │                 │
    │   ↓     │          │          │                 │
    │ Departure           │          │                 │
    │ Details             │          │                 │
    │   ↓                 │          │                 │
    │ Traveler Details    │          │                 │
    │   ↓                 │          │                 │
    │ Review & Pay        │          │                 │
    │   ↓                 │          │                 │
    │ Confirmation ───────┘          │                 │
    └─────────────────────────────────────────────────┘
```

## 🤝 Contributing

Feel free to expand this app by:
- Adding animations with React Native Reanimated
- Implementing React Navigation for better navigation
- Adding state management (Redux, Zustand, or Context)
- Connecting to a real backend API

## 📄 License

This project is for educational/demonstration purposes.
