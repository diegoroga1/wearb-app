import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function SignupScreen() {
  const { t } = useI18n();

  return (
    <Screen>
      <Text style={styles.kicker}>{t('auth.signup.kicker')}</Text>
      <Text style={styles.title}>{t('auth.signup.title')}</Text>
      <Text style={styles.subtitle}>{t('auth.signup.subtitle')}</Text>

      <View style={styles.form}>
        <TextInput placeholder={t('auth.signup.name')} placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder={t('auth.signup.email')} placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder={t('auth.signup.phone')} placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder={t('auth.signup.password')} secureTextEntry placeholderTextColor={colors.textMuted} style={styles.input} />
      </View>

      <PrimaryButton label={t('common.createAccount')} onPress={() => router.replace('/(tabs)')} />

      <Text style={styles.bottomText}>
        {t('auth.signup.haveAccount')} <Link href="/(auth)/login" style={styles.link}>{t('common.login')}</Link>
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  kicker: {
    marginTop: 8,
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginTop: 10,
  },
  subtitle: {
    color: colors.textMuted,
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 26,
  },
  form: {
    gap: 14,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 15,
  },
  bottomText: {
    textAlign: 'center',
    marginTop: 24,
    color: colors.textMuted,
  },
  link: {
    color: colors.primary,
    fontWeight: '800',
  },
});
