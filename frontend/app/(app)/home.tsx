import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { GameCard } from '@/components/games/GameCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Screen } from '@/components/ui/Screen';
import { GAMES } from '@/constants/games';
import { Colors, FontSize, overline, Radius, Spacing } from '@/constants/theme';

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function HomeScreen() {
  const [query, setQuery] = useState('');

  // TODO: read the real username from the signed-in Supabase user.
  const username = 'testing123';

  const filteredGames = GAMES.filter((game) =>
    game.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>
            {getGreeting()}, {username}
          </Text>
          <Text style={styles.title}>Game Wiki</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{username[0].toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={16} color={Colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search games…"
          placeholderTextColor={Colors.placeholder}
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
        />
        {query ? (
          <Ionicons name="close-circle" size={16} color={Colors.textSecondary} onPress={() => setQuery('')} />
        ) : null}
      </View>

      <Text style={styles.sectionLabel}>All games · {filteredGames.length}</Text>

      {/* FlatList is the standard way to render lists in React Native: it only
          renders what's on screen, so it stays fast as the list grows. */}
      <FlatList
        data={filteredGames}
        keyExtractor={(game) => game.id}
        renderItem={({ item }) => (
          <GameCard
            game={item}
            onPress={() => router.push({ pathname: '/games/[gameId]', params: { gameId: item.id } })}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: Spacing.sm + 2 }} />}
        ListEmptyComponent={
          <EmptyState icon="🔍" title="No games found" message={`Nothing matches "${query}".`} />
        }
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: Spacing.lg,
    marginBottom: Spacing.lg,
  },
  greeting: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginBottom: 2,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: FontSize.heading + 2,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: Radius.pill,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 14,
    marginBottom: Spacing.xl,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: FontSize.body,
    paddingVertical: Spacing.md,
  },
  sectionLabel: {
    ...overline,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
  listContent: {
    paddingBottom: Spacing.xl,
  },
});
