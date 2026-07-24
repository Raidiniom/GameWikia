import { supabase } from "@/lib/supabase";
import { IndexStyle } from "@/styles/indexstyle";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function RecoverPass() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const handleSetNewPassword = async () => {
    if (!password || !confirm) {
      setMsg('Please fill in both fields.');
      return;
    }
    if (password !== confirm) {
      setMsg('Passwords do not match.');
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMsg(error.message);
      return;
    }

    setMsg('Password updated! Please log in.');
    await supabase.auth.signOut();
    setTimeout(() => router.push('/'), 1500);
  };

  return (
    <View style={IndexStyle.bodyContainer}>
      <View style={IndexStyle.loginForm}>
        <Text style={IndexStyle.fieldLabel}>New Password</Text>
        <TextInput
          style={IndexStyle.userInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Enter new password"
        />
        <Text style={IndexStyle.fieldLabel}>Confirm Password</Text>
        <TextInput
          style={IndexStyle.userInput}
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry
          placeholder="Confirm new password"
        />
        <Pressable onPress={handleSetNewPassword} style={IndexStyle.loginButton}>
          <Text style={IndexStyle.loginText}>Update Password</Text>
        </Pressable>
        {msg ? <Text style={IndexStyle.messageText}>{msg}</Text> : null}
      </View>
    </View>
  );
}