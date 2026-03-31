import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors, radius } from '@/constants/theme';

export default function LoginScreen() {
  return (
    <Screen>
      <Text style={styles.kicker}>Bienvenido de nuevo</Text>
      <Text style={styles.title}>Inicia sesión</Text>
      <Text style={styles.subtitle}>Accede para reservar servicios o gestionar tus anuncios.</Text>

      <View style={styles.form}>
        <TextInput placeholder="Correo electrónico" placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder="Contraseña" secureTextEntry placeholderTextColor={colors.textMuted} style={styles.input} />
        <Pressable>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
      </View>

      <PrimaryButton label="Entrar" onPress={() => router.replace('/(tabs)')} />

      <View style={styles.socialBox}>
        <Text style={styles.socialText}>O continúa con Apple, Google o Facebook</Text>
      </View>

      <Text style={styles.bottomText}>
        ¿No tienes cuenta? <Link href="/(auth)/signup" style={styles.link}>Regístrate</Link>
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
