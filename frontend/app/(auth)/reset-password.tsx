import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/Button';
import { FormMessage, FormStatus } from '@/components/ui/FormMessage';
import { TextField } from '@/components/ui/TextField';

export default function ResetPasswordScreen() {
  // `email` is passed from the forgot-password screen as a route param.
  const params = useLocalSearchParams<{ email?: string }>();

  const [email, setEmail] = useState(params.email ?? '');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<FormStatus>(null);
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email || !code || !newPassword || !confirmPassword) {
      return setStatus({ type: 'error', text: 'All fields are required.' });
    }
    if (newPassword !== confirmPassword) {
      return setStatus({ type: 'error', text: 'Passwords do not match.' });
    }
    if (newPassword.length < 8) {
      return setStatus({ type: 'error', text: 'Password must be at least 8 characters.' });
    }

    setLoading(true);
    // TODO: verify the code with supabase.auth.verifyOtp, then supabase.auth.updateUser({ password })
    setStatus({ type: 'success', text: 'Password updated! Redirecting to login…' });
    setTimeout(() => router.replace('/login'), 1500);
  };

  return (
    <AuthLayout title="Reset password" subtitle="Enter the code we emailed you and choose a new password.">
      <FormMessage status={status} />

      <TextField
        label="Email"
        placeholder="gamewikireader@email.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextField
        label="Reset code"
        placeholder="123456"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        autoComplete="one-time-code"
        maxLength={6}
      />
      <TextField
        label="New password"
        placeholder="Enter new password"
        value={newPassword}
        onChangeText={setNewPassword}
        autoComplete="new-password"
        secureTextEntry
      />
      <TextField
        label="Confirm password"
        placeholder="Type it again"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button title="Reset password" onPress={handleReset} loading={loading} />
      <Button title="Back to login" variant="link" onPress={() => router.replace('/login')} />
    </AuthLayout>
  );
}
