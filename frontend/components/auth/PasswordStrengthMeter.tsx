import { StyleSheet, Text, View } from 'react-native';
import { Colors, Radius, Spacing } from '@/constants/theme';
import { PasswordStrength, StrengthLevel } from '@/lib/password';

const LEVEL_STYLE: Record<StrengthLevel, { label: string; color: string }> = {
  none: { label: 'None', color: Colors.textSecondary },
  weak: { label: 'Weak', color: Colors.danger },
  medium: { label: 'Medium', color: Colors.warning },
  strong: { label: 'Strong', color: Colors.success },
};

/** Strength bar + requirement checklist shown under the password field. */
export function PasswordStrengthMeter({ strength }: { strength: PasswordStrength }) {
  const { label, color } = LEVEL_STYLE[strength.level];
  const percent = (strength.score / strength.maxScore) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%`, backgroundColor: color }]} />
      </View>

      <View style={styles.labelRow}>
        <Text style={[styles.levelText, { color }]}>Strength: {label}</Text>
        <Text style={styles.scoreText}>
          {strength.score}/{strength.maxScore}
        </Text>
      </View>

      <View style={styles.checklist}>
        {strength.requirements.map((req) => (
          <CheckItem key={req.label} label={req.label} met={req.met} />
        ))}
      </View>
    </View>
  );
}

/** A ✓ / ✗ row. Also used for the "passwords match" check. */
export function CheckItem({ label, met }: { label: string; met: boolean }) {
  return (
    <View style={styles.checkRow}>
      <View style={[styles.checkDot, { backgroundColor: met ? Colors.accent : Colors.dangerStrong }]}>
        <Text style={styles.checkMark}>{met ? '✓' : '✗'}</Text>
      </View>
      <Text style={[styles.checkLabel, { color: met ? Colors.textSecondary : Colors.danger }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -Spacing.xs,
    marginBottom: Spacing.md,
  },
  track: {
    height: 5,
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.pill,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    marginBottom: Spacing.sm,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '600',
  },
  scoreText: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
  checklist: {
    backgroundColor: Colors.surfaceRaised,
    borderRadius: Radius.sm,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 10,
    gap: 5,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  checkDot: {
    width: 15,
    height: 15,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: Colors.background,
    fontSize: 9,
    fontWeight: '800',
  },
  checkLabel: {
    fontSize: 12,
  },
});
