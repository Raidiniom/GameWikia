import { IndexStyle } from "@/styles/indexstyle";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function ResetPassword() {
  const { email: emailParam } = useLocalSearchParams<{ email?: string }>();

  const [email, setEmail] = useState(emailParam ?? '');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleReset = async () => {
    if (!email || !otp || !newPassword || !confirmPassword) {
      setIsSuccess(false);
      setMsg('All fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setIsSuccess(false);
      setMsg('Passwords do not match.');
      return;
    }

    if (newPassword.length < 8) {
      setIsSuccess(false);
      setMsg('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      router.replace('/');
    }, 1500);
  };

  return (
    <View style={IndexStyle.bodyContainer}>
      <View style={IndexStyle.loginForm}>
        <Text style={IndexStyle.appTitle}>Reset Password</Text>
        <Text style={IndexStyle.appSubtitle}>
          Enter the code we emailed you and your new password.
        </Text>

        {msg ? (
          <Text style={[
            IndexStyle.messageText,
            isSuccess ? IndexStyle.successText : IndexStyle.errorText,
          ]}>
            {msg}
          </Text>
        ) : null}

        <Text style={IndexStyle.fieldLabel}>Email</Text>
        <TextInput
          style={IndexStyle.userInput}
          placeholder="gamewikireader@email.com"
          placeholderTextColor="#4a998580"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={IndexStyle.fieldLabel}>Reset Code</Text>
        <TextInput
          style={IndexStyle.userInput}
          placeholder="123456"
          placeholderTextColor="#4a998580"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
        />

        <Text style={IndexStyle.fieldLabel}>New Password</Text>
        <TextInput
          style={IndexStyle.userInput}
          placeholder="Enter new password"
          placeholderTextColor="#4a998580"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />

        <Text style={IndexStyle.fieldLabel}>Confirm Password</Text>
        <TextInput
          style={IndexStyle.userInput}
          placeholder="Confirm new password"
          placeholderTextColor="#4a998580"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Pressable
          onPress={handleReset}
          disabled={loading}
          style={({ pressed }) => [
            IndexStyle.loginButton,
            pressed && IndexStyle.loginButtonPressed,
            loading && { opacity: 0.6 },
          ]}
        >
          <Text style={IndexStyle.loginText}>
            {loading ? 'Resetting...' : 'Reset Password'}
          </Text>
        </Pressable>

        <Pressable onPress={() => router.push('/')}>
          <Text style={IndexStyle.forgotText}>Back to login</Text>
        </Pressable>
      </View>
    </View>
  );
}