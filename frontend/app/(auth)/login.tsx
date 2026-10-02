import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/Button';
import { FormMessage, FormStatus } from '@/components/ui/FormMessage';
import { TextField } from '@/components/ui/TextField';
import { Colors, Spacing } from '@/constants/theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<FormStatus>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setStatus(null);
    setLoading(true);

    // TODO: replace with Supabase once it's wired up again:
    //   if (!email || !password) return setStatus({ type: 'error', text: 'All fields are required.' });
    //   const { error } = await supabase.auth.signInWithPassword({ email, password });
    //   if (error) return setStatus({ type: 'error', text: error.message });

    setLoading(false);
    router.replace('/home');
  };

  return (
    <AuthLayout showBrand>
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
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        autoComplete="password"
        secureTextEntry
        onSubmitEditing={handleLogin}
      />

      <Button title="Log in" onPress={handleLogin} loading={loading} />
      <Button title="Forgot password?" variant="link" onPress={() => router.push('/forgot-password')} />

      <View style={styles.divider} />

      <Button title="New here? Create an account" variant="link" onPress={() => router.push('/register')} />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Spacing.md,
  },
});
