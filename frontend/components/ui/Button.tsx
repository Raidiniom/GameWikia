import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  /** "primary" is a filled button, "link" is plain underlined text. */
  variant?: 'primary' | 'link';
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ title, onPress, variant = 'primary', loading = false, disabled = false }: ButtonProps) {
  const isDisabled = disabled || loading;

  if (variant === 'link') {
    return (
      <Pressable onPress={onPress} disabled={isDisabled} hitSlop={8} style={styles.link}>
        {({ pressed }) => (
          <Text style={[styles.linkText, pressed && styles.linkTextPressed]}>{title}</Text>
        )}
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.primary,
        pressed && styles.primaryPressed,
        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={Colors.textPrimary} />
      ) : (
        <Text style={styles.primaryText}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.accent,
    minHeight: 48,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.xs,
  },
  primaryPressed: {
    backgroundColor: Colors.accentPressed,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.5,
  },
  primaryText: {
    color: Colors.textPrimary,
    fontSize: FontSize.button,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  link: {
    alignSelf: 'center',
    paddingVertical: Spacing.sm,
  },
  linkText: {
    color: Colors.accentBright,
    fontSize: 13,
    textAlign: 'center',
  },
  linkTextPressed: {
    opacity: 0.6,
  },
});
