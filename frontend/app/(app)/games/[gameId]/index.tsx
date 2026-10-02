// Dynamic route: /games/azurlane, /games/genshinimpact, … all render this one
// screen. The [gameId] part of the folder name becomes a URL parameter.

import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SectionRow } from '@/components/games/SectionRow';
import { BackButton } from '@/components/ui/BackButton';
import { EmptyState } from '@/components/ui/EmptyState';
import { Screen } from '@/components/ui/Screen';
import { getGame, SectionCategory } from '@/constants/games';
import { FontSize, overline, Radius, Spacing } from '@/constants/theme';

export default function GameScreen() {
  const { gameId } = useLocalSearchParams<{ gameId: string }>();
  const game = getGame(gameId);
  const [activeTab, setActiveTab] = useState<SectionCategory>('guide');

  if (!game) {
    return (
      <Screen>
        <View style={styles.hero}>
          <BackButton />
        </View>
        <EmptyState icon="🕹️" title="Game not found" message="This game isn't in the wiki yet." />
      </Screen>
    );
  }

  const { theme } = game;
  const tabs: { id: SectionCategory; label: string }[] = [
    { id: 'guide', label: 'Guide' },
    { id: 'characters', label: game.charactersLabel },
    { id: 'events', label: 'Events' },
  ];
  const visibleSections = game.sections.filter((section) => section.category === activeTab);

  return (
    <Screen backgroundColor={theme.background} edges={['bottom']}>
      {/* Hero: painted with the game's surface color, extends under the status bar */}
      <Screen backgroundColor={theme.surface} edges={['top']} style={styles.heroWrapper}>
        <View style={[styles.hero, { borderBottomColor: theme.border }]}>
          <BackButton color={theme.accent} />

          <View style={styles.heroRow}>
            <Image source={game.icon} style={[styles.heroIcon, { borderColor: theme.border }]} />
            <View style={styles.heroText}>
              <Text style={[styles.heroTitle, { color: theme.textPrimary }]}>{game.title}</Text>
              <Text style={[styles.heroTagline, { color: theme.textSecondary }]}>{game.tagline}</Text>
            </View>
          </View>

          <View style={[styles.tabBar, { backgroundColor: theme.background }]}>
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <Pressable
                  key={tab.id}
                  onPress={() => setActiveTab(tab.id)}
                  style={[styles.tab, isActive && { backgroundColor: theme.accentSoft }]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      { color: isActive ? theme.accent : theme.textSecondary },
                      isActive && styles.tabTextActive,
                    ]}
                    numberOfLines={1}
                  >
                    {tab.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </Screen>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.sectionLabel, { color: theme.textSecondary }]}>Select a category</Text>

        {visibleSections.map((section) => (
          <SectionRow
            key={section.id}
            section={section}
            theme={theme}
            onPress={() =>
              router.push({
                pathname: '/games/[gameId]/[sectionId]',
                params: { gameId: game.id, sectionId: section.id },
              })
            }
          />
        ))}

        {visibleSections.length === 0 && (
          <EmptyState
            icon={game.emoji}
            title="Nothing here yet"
            titleColor={theme.textPrimary}
            messageColor={theme.textSecondary}
          />
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    flex: 0,
  },
  hero: {
    paddingHorizontal: Spacing.lg + 4,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
    borderBottomWidth: 1,
    gap: Spacing.lg,
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  heroIcon: {
    width: 64,
    height: 64,
    borderRadius: Radius.lg - 2,
    borderWidth: 1,
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontSize: FontSize.title,
    fontWeight: '700',
  },
  heroTagline: {
    fontSize: FontSize.small + 1,
    marginTop: Spacing.xs,
  },
  tabBar: {
    flexDirection: 'row',
    borderRadius: Radius.md,
    padding: Spacing.xs,
    gap: Spacing.xs,
  },
  tab: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: Radius.sm,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '500',
  },
  tabTextActive: {
    fontWeight: '700',
  },
  content: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xxl,
    gap: Spacing.sm + 2,
  },
  sectionLabel: {
    ...overline,
    marginBottom: Spacing.xs,
  },
});
