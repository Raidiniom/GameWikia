import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontSize, GameTheme, Radius, Spacing } from '@/constants/theme';
import { GameSection } from '@/constants/games';

interface SectionRowProps {
  section: GameSection;
  theme: GameTheme;
  onPress: () => void;
}

/** A tappable category row on a game's page (e.g. "Campaign Guide"). */
export function SectionRow({ section, theme, onPress }: SectionRowProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        { backgroundColor: theme.surface, borderColor: theme.border, borderLeftColor: theme.accent },
        pressed && { backgroundColor: theme.accentSoft },
      ]}
    >
      <View style={[styles.iconBox, { backgroundColor: theme.accentSoft }]}>
        <Text style={styles.icon}>{section.icon}</Text>
      </View>
      <Text style={[styles.title, { color: theme.textPrimary }]}>{section.title}</Text>
      <Text style={[styles.chevron, { color: theme.textSecondary }]}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    borderRadius: Radius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderLeftWidth: 3,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 17,
  },
  title: {
    flex: 1,
    fontSize: FontSize.body,
    fontWeight: '600',
  },
  chevron: {
    fontSize: 22,
    opacity: 0.5,
  },
});
