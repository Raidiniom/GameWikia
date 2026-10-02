import { router } from 'expo-router';
import { useState } from 'react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Button } from '@/components/ui/Button';
import { FormMessage, FormStatus } from '@/components/ui/FormMessage';
import { TextField } from '@/components/ui/TextField';
import { isValidEmail } from '@/lib/password';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>(null);
  const [loading, setLoading] = useState(false);

  const handleSendCode = async () => {
    if (!isValidEmail(email)) {
      return setStatus({ type: 'error', text: 'Please enter a valid email address.' });
    }

    setLoading(true);
    // TODO: await supabase.auth.resetPasswordForEmail(email)
    setLoading(false);

    router.push({ pathname: '/reset-password', params: { email } });
  };

  return (
    <AuthLayout title="Forgot password" subtitle="Enter your email and we'll send you a reset code.">
      <FormMessage status={status} />

      <TextField
        label="Email"
        placeholder="gamewikireader@email.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        onSubmitEditing={handleSendCode}
      />

      <Button title="Send reset code" onPress={handleSendCode} loading={loading} />
      <Button title="Back to login" variant="link" onPress={() => router.back()} />
    </AuthLayout>
  );
}
