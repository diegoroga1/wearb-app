import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/Screen';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';
import { localeLabels, supportedLocales } from '@/i18n/translations';

export default function ProfileScreen() {
  const { t, locale, setLocale } = useI18n();
  const items = [
    t('profile.editProfile'),
    t('profile.paymentMethods'),
    t('profile.addresses'),
    t('profile.publishedServices'),
    t('profile.help'),
    t('profile.logout'),
  ];

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={styles.avatarText}>DR</Text></View>
        <Text style={styles.name}>Diego RG</Text>
        <Text style={styles.email}>diego@example.com</Text>
      </View>

      <View style={styles.languageCard}>
        <Text style={styles.languageTitle}>{t('profile.appLanguage')}</Text>
        <Text style={styles.languageHint}>{t('profile.languageHint')}</Text>
        <View style={styles.languageRow}>
          {supportedLocales.map((item) => (
            <Pressable
              key={item}
              onPress={() => setLocale(item)}
              style={[styles.languageChip, locale === item && styles.languageChipActive]}
            >
              <Text style={[styles.languageChipText, locale === item && styles.languageChipTextActive]}>{localeLabels[item]}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {items.map((item) => (
        <View key={item} style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: radius.round,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 28,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  email: {
    marginTop: 6,
    color: colors.textMuted,
  },
  languageCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 18,
    marginBottom: 14,
  },
  languageTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  languageHint: {
    color: colors.textMuted,
    lineHeight: 22,
    marginTop: 6,
    marginBottom: 14,
  },
  languageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  languageChip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.round,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  languageChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  languageChipText: {
    color: colors.text,
    fontWeight: '700',
  },
  languageChipTextActive: {
    color: '#fff',
  },
  row: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
});
