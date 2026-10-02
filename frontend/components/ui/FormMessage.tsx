import { StyleSheet, Text } from 'react-native';
import { Colors, Radius, Spacing } from '@/constants/theme';

/** One state value instead of separate `msg` + `isSuccess` states. */
export type FormStatus = { type: 'success' | 'error'; text: string } | null;

export function FormMessage({ status }: { status: FormStatus }) {
  if (!status) return null;

  return (
    <Text style={[styles.base, status.type === 'success' ? styles.success : styles.error]}>
      {status.text}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    marginBottom: Spacing.md,
    padding: 10,
    borderRadius: Radius.sm,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    overflow: 'hidden',
  },
  success: {
    color: Colors.success,
    backgroundColor: Colors.successSoft,
  },
  error: {
    color: Colors.danger,
    backgroundColor: Colors.dangerSoft,
  },
});
