import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { CheckItem, PasswordStrengthMeter } from '@/components/auth/PasswordStrengthMeter';
import { Button } from '@/components/ui/Button';
import { FormMessage, FormStatus } from '@/components/ui/FormMessage';
import { TextField } from '@/components/ui/TextField';
import { Spacing } from '@/constants/theme';
import { getPasswordStrength, isValidEmail, MIN_PASSWORD_SCORE } from '@/lib/password';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [status, setStatus] = useState<FormStatus>(null);

  // Derived values: computed from state on every render, so they never
  // get out of sync. No need for a separate `strength` useState.
  const strength = getPasswordStrength(password);
  const passwordsMatch = password === confirm;
  const canSubmit = !!email && !!username && strength.score >= MIN_PASSWORD_SCORE && passwordsMatch;

  const handleRegister = () => {
    if (!email || !username || !password || !confirm) {
      return setStatus({ type: 'error', text: 'All fields are required.' });
    }
    if (!isValidEmail(email)) {
      return setStatus({ type: 'error', text: 'Please enter a valid email address.' });
    }
    if (!passwordsMatch) {
      return setStatus({ type: 'error', text: 'Passwords do not match.' });
    }
    if (strength.score < MIN_PASSWORD_SCORE) {
      return setStatus({ type: 'error', text: 'Password is too weak. Please use a stronger one.' });
    }

    // TODO: supabase.auth.signUp({ email, password, options: { data: { username } } })
    setStatus({ type: 'success', text: 'Account created! Check your email to verify it.' });
  };

  return (
    <AuthLayout title="Create account" subtitle="Join GameWikia to save guides and contribute.">
      <FormMessage status={status} />

      <TextField
        label="Email"
        placeholder="gamewikireader@email.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
      />
      <TextField
        label="Username"
        placeholder="gamewikireader"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoComplete="username"
        maxLength={30}
      />
      <TextField
        label="Password"
        placeholder="Create a password"
        value={password}
        onChangeText={setPassword}
        autoComplete="new-password"
        secureTextEntry
      />
      {password.length > 0 && <PasswordStrengthMeter strength={strength} />}

      <TextField
        label="Confirm password"
        placeholder="Type it again"
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry
      />
      {confirm.length > 0 && (
        <View style={styles.matchRow}>
          <CheckItem
            label={passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
            met={passwordsMatch}
          />
        </View>
      )}

      <Button title="Create account" onPress={handleRegister} disabled={!canSubmit} />
      <Button title="Already have an account? Log in" variant="link" onPress={() => router.replace('/login')} />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  matchRow: {
    marginTop: -Spacing.xs,
    marginBottom: Spacing.md,
  },
});
