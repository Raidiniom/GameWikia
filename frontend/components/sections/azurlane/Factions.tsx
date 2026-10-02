import { StyleSheet, Text, View } from 'react-native';
import { FontSize, Radius, Spacing } from '@/constants/theme';
import { SectionContentProps } from '../types';

const FACTIONS = [
  { name: 'Eagle Union', short: 'USS' },
  { name: 'Royal Navy', short: 'HMS' },
  { name: 'Sakura Empire', short: 'IJN' },
  { name: 'Iron Blood', short: 'KMS' },
  { name: 'Dragon Empery', short: 'ROC' },
  { name: 'Sardegna Empire', short: 'RN' },
  { name: 'Northern Parliament', short: 'SN' },
  { name: 'Iris Libre', short: 'FFNF' },
  { name: 'Vichya Dominion', short: 'MNF' },
  { name: 'Tulipa', short: 'HNLMS' },
  { name: 'META', short: 'META' },
  { name: 'Tempesta', short: 'MOT' },
];

export function AzurLaneFactions({ theme }: SectionContentProps) {
  return (
    <View style={styles.grid}>
      {FACTIONS.map((faction) => (
        <View
          key={faction.name}
          style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}
        >
          {/* Placeholder until real faction flags are added to assets/ */}
          <View style={[styles.flag, { backgroundColor: theme.accentSoft }]}>
            <Text style={[styles.flagText, { color: theme.accent }]}>{faction.short}</Text>
          </View>
          <Text style={[styles.name, { color: theme.textPrimary }]} numberOfLines={2}>
            {faction.name}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: Spacing.md,
  },
  card: {
    width: '48.5%',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
  },
  flag: {
    width: '100%',
    aspectRatio: 16 / 10,
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  flagText: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
  name: {
    fontSize: FontSize.small + 1,
    fontWeight: '600',
    textAlign: 'center',
  },
});
