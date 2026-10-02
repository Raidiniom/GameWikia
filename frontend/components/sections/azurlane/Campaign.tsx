import { StyleSheet, Text, View } from 'react-native';
import { overline, Radius, Spacing } from '@/constants/theme';
import { SectionContentProps } from '../types';

const CHAPTERS = [
  { chapter: 1, name: 'Tora! Tora! Tora!', stages: ['1-1', '1-2', '1-3', '1-4'] },
  { chapter: 2, name: 'Battle of the Coral Sea', stages: ['2-1', '2-2', '2-3', '2-4'] },
  { chapter: 3, name: 'Midway Showdown', stages: ['3-1', '3-2', '3-3', '3-4'] },
];

export function AzurLaneCampaign({ theme }: SectionContentProps) {
  return (
    <View style={styles.list}>
      {CHAPTERS.map(({ chapter, name, stages }) => (
        <View key={chapter}>
          <Text style={[styles.chapterLabel, { color: theme.textSecondary }]}>
            Chapter {chapter} · {name}
          </Text>
          <View style={styles.stageRow}>
            {stages.map((stage) => (
              <View
                key={stage}
                style={[styles.stage, { backgroundColor: theme.surface, borderColor: theme.border }]}
              >
                <Text style={[styles.stageText, { color: theme.accent }]}>{stage}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: Spacing.xl,
  },
  chapterLabel: {
    ...overline,
    marginBottom: Spacing.sm,
  },
  stageRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  stage: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: Radius.md,
    borderWidth: 1,
    alignItems: 'center',
  },
  stageText: {
    fontSize: 15,
    fontWeight: '700',
  },
});
