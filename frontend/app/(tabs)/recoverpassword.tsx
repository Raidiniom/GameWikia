import { supabase } from "@/lib/supabase";
import { IndexStyle } from "@/styles/indexstyle";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecoverPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSendCode = async () => {
    if (!email) {
      setIsSuccess(false);
      setMsg('Please enter your email.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);

    if (error) {
      setIsSuccess(false);
      setMsg(error.message);
      return;
    }

    setIsSuccess(true);
    setMsg('Check your email for the reset code.');

    router.push({
      pathname: '/resetpassword' as any,
      params: { email },
    });
  };

  return (
    <SafeAreaView style={IndexStyle.bodyContainer} edges={['top', 'bottom']} >
      <View style={IndexStyle.loginForm}>
        <Text style={IndexStyle.appTitle}>Forgot Password</Text>
        <Text style={IndexStyle.appSubtitle}>
          Enter your email and we'll send you a reset code.
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

        <Pressable
          onPress={handleSendCode}
          disabled={loading}
          style={({ pressed }) => [
            IndexStyle.loginButton,
            pressed && IndexStyle.loginButtonPressed,
            loading && { opacity: 0.6 },
          ]}
        >
          <Text style={IndexStyle.loginText}>
            {loading ? 'Sending...' : 'Send reset code'}
          </Text>
        </Pressable>

        <Pressable onPress={() => router.push('/')}>
          <Text style={IndexStyle.forgotText}>Back to login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}