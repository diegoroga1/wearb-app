import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, router } from 'expo-router';
import { Screen } from '@/components/Screen';
import { PrimaryButton } from '@/components/PrimaryButton';
import { colors, radius } from '@/constants/theme';

export default function SignupScreen() {
  return (
    <Screen>
      <Text style={styles.kicker}>Crea tu cuenta</Text>
      <Text style={styles.title}>Empieza ahora</Text>
      <Text style={styles.subtitle}>Tanto si reservas como si ofreces servicios, este es tu punto de partida.</Text>

      <View style={styles.form}>
        <TextInput placeholder="Nombre completo" placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder="Correo electrónico" placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder="Teléfono" placeholderTextColor={colors.textMuted} style={styles.input} />
        <TextInput placeholder="Contraseña" secureTextEntry placeholderTextColor={colors.textMuted} style={styles.input} />
      </View>

      <PrimaryButton label="Crear cuenta" onPress={() => router.replace('/(tabs)')} />

      <Text style={styles.bottomText}>
        ¿Ya tienes cuenta? <Link href="/(auth)/login" style={styles.link}>Inicia sesión</Link>
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
