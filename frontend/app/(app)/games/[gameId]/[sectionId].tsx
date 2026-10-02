// Dynamic route: /games/<gameId>/<sectionId>, e.g. /games/azurlane/factions.
// The actual page body comes from the registry in components/sections.

import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getSectionContent } from '@/components/sections';
import { BackButton } from '@/components/ui/BackButton';
import { EmptyState } from '@/components/ui/EmptyState';
import { Screen } from '@/components/ui/Screen';
import { getGame, getSection } from '@/constants/games';
import { FontSize, overline, Spacing } from '@/constants/theme';

export default function SectionScreen() {
  const { gameId, sectionId } = useLocalSearchParams<{ gameId: string; sectionId: string }>();
  const game = getGame(gameId);
  const section = game && getSection(game, sectionId);

  if (!game || !section) {
    return (
      <Screen>
        <View style={styles.header}>
          <BackButton />
        </View>
        <EmptyState icon="🧭" title="Page not found" message="This section doesn't exist." />
      </Screen>
    );
  }

  const { theme } = game;
  const Content = getSectionContent(game.id, section.id);

  return (
    <Screen backgroundColor={theme.background}>
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <BackButton color={theme.accent} />
        <Text style={[styles.gameName, { color: theme.textSecondary }]}>{game.title}</Text>
        <Text style={[styles.title, { color: theme.textPrimary }]}>
          {section.icon} {section.title}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {Content ? (
          <Content theme={theme} />
        ) : (
          <EmptyState
            icon="🚧"
            title="Coming soon"
            message={`The ${section.title} page for ${game.title} is still being written.`}
            titleColor={theme.textPrimary}
            messageColor={theme.textSecondary}
          />
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Spacing.lg + 4,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  gameName: {
    ...overline,
    marginTop: Spacing.lg,
  },
  title: {
    fontSize: FontSize.title,
    fontWeight: '700',
    marginTop: Spacing.xs,
  },
  content: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
});
