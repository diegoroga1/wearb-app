import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function TabsLayout() {
  const { t } = useI18n();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#93A3A1',
        tabBarStyle: {
          height: 72,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarIcon: ({ color, size, focused }) => {
          const map: Record<string, keyof typeof Ionicons.glyphMap> = {
            index: focused ? 'home' : 'home-outline',
            search: focused ? 'search' : 'search-outline',
            bookings: focused ? 'calendar' : 'calendar-outline',
            profile: focused ? 'person' : 'person-outline',
          };
          return <Ionicons name={map[route.name] || 'ellipse'} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: t('common.home') }} />
      <Tabs.Screen name="search" options={{ title: t('common.search') }} />
      <Tabs.Screen name="bookings" options={{ title: t('common.bookings') }} />
      <Tabs.Screen name="profile" options={{ title: t('common.profile') }} />
    </Tabs>
  );
}
