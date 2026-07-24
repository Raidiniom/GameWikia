import { supabase } from "@/lib/supabase";
import { IndexStyle } from "@/styles/indexstyle";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setIsSuccess(false);
      setMsg('All fields are required!');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setIsSuccess(false);
      if (error.code === 'email_not_confirmed') {
        setMsg('Please confirm your email before logging in.');
      } else {
        setMsg(error.message);
      }
      return;
    }

    setIsSuccess(true);
    setMsg('Login successful');
    router.push('/homepage');
  };

  const handleRecoverPass = async () => {
    if (!email) {
      setIsSuccess(false)
      setMsg('Please enter your email to reset your password')
      return
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'gamewikia://recoverpass'
    })

    if (error) {
      setIsSuccess(false);
      setMsg(error.message);
      return;
    }

    setIsSuccess(true);
    setMsg('Check your email for a password reset link.');
  };

  return (
    <View style={IndexStyle.bodyContainer}>

      {/* Logo */}
      <View style={IndexStyle.logoContainer}>
        <View style={IndexStyle.logoBox}>
          <Text style={IndexStyle.logoText}>🎮</Text>
        </View>
        <Text style={IndexStyle.appTitle}>GameWikia</Text>
        <Text style={IndexStyle.appSubtitle}>Your gacha companion</Text>
      </View>

      {/* Form */}
      <View style={IndexStyle.loginForm}>

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

        <Text style={IndexStyle.fieldLabel}>Password</Text>
        <TextInput
          style={IndexStyle.userInput}
          placeholder="Enter your password"
          placeholderTextColor="#4a998580"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [
            IndexStyle.loginButton,
            pressed && IndexStyle.loginButtonPressed,
          ]}
        >
          <Text style={IndexStyle.loginText}>Log in</Text>
        </Pressable>

        {/* Feature to be Implemented */}
        <Pressable onPress={handleRecoverPass}>
          <Text style={IndexStyle.forgotText}>Forgot password?</Text>
        </Pressable>

        <View style={IndexStyle.divider} />

        <Pressable onPress={() => router.push('/register')}>
          <Text style={IndexStyle.registerLink}>New here? Create an account</Text>
        </Pressable>

      </View>
    </View>
  );
}