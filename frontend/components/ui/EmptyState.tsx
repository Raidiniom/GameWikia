import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing } from '@/constants/theme';

interface EmptyStateProps {
  icon: string;
  title: string;
  message?: string;
  titleColor?: string;
  messageColor?: string;
}

/** Friendly placeholder for "nothing here yet" / "not found" situations. */
export function EmptyState({
  icon,
  title,
  message,
  titleColor = Colors.textPrimary,
  messageColor = Colors.textSecondary,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      {message ? <Text style={[styles.message, { color: messageColor }]}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl * 1.5,
    paddingHorizontal: Spacing.xl,
  },
  icon: {
    fontSize: 40,
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  message: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 19,
    opacity: 0.85,
  },
});
