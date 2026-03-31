import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors, radius } from '@/constants/theme';
import { useI18n } from '@/i18n/provider';

export default function LoginScreen() {
  const { t } = useI18n();

  return (
    <Screen>
      <Text style={styles.kicker}>{t('auth.login.kicker')}</Text>
      <Text style={styles.title}>{t('auth.login.title')}</Text>
      <Text style={styles.subtitle}>{t('auth.login.subtitle')}</Text>

      <View style={styles.form}>
        <TextInput placeholder={t('auth.login.email')} placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder={t('auth.login.password')} secureTextEntry placeholderTextColor={colors.textMuted} style={styles.input} />
        <Pressable>
          <Text style={styles.forgot}>{t('auth.login.forgot')}</Text>
        </Pressable>
      </View>

      <PrimaryButton label={t('auth.login.submit')} onPress={() => router.replace('/(tabs)')} />

      <View style={styles.socialBox}>
        <Text style={styles.socialText}>{t('auth.login.social')}</Text>
      </View>

      <Text style={styles.bottomText}>
        {t('auth.login.noAccount')} <Link href="/(auth)/signup" style={styles.link}>{t('common.signUp')}</Link>
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
  forgot: {
    color: colors.primary,
    fontWeight: '700',
    textAlign: 'right',
  },
  socialBox: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 16,
  },
  socialText: {
    textAlign: 'center',
    color: colors.textMuted,
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
