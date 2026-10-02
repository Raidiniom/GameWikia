import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '@/constants/theme';

export function BackButton({ color = Colors.accentBright }: { color?: string }) {
  // On web a page can be opened directly, so there may be nothing to go back to.
  const handlePress = () => (router.canGoBack() ? router.back() : router.replace('/home'));

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={10}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <Ionicons name="chevron-back" size={18} color={color} />
      <Text style={[styles.text, { color }]}>Back</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 2,
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});
