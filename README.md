# WEARB Services App (Expo)

Base mobile app for booking services with **React Native + Expo + Expo Router**.

## Included flows

- Splash screen
- Onboarding / welcome tour
- Login
- Sign up
- Home with category bubbles
- Search and service listing
- Service detail
- Booking flow
- Checkout flow
- Bottom tab navigation
- Profile with language selector

## Languages

The app supports:

- Spanish (`es`)
- English (`en`)
- German (`de`)

Behavior:

- Detects the device language on first launch
- Lets the user switch language from the **Profile** screen
- Persists the selected language locally with AsyncStorage

## Install

```bash
npm install
npx expo start
```

## Open on device or simulator

```bash
npx expo start -a   # Android
npx expo start -i   # iOS
```

## Main stack

- Expo
- Expo Router
- React Native
- TypeScript
- expo-localization
- AsyncStorage

## Notes

This is a mock-first starter project prepared to evolve into:

- real authentication
- roles for customer and professional
- publishing services
- live calendar availability
- Stripe payments
- chat
- favorites
- backend API integration
