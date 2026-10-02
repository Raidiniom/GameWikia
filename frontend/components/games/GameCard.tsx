import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';
import { Game } from '@/constants/games';

interface GameCardProps {
  game: Game;
  onPress: () => void;
}

/** A row in the home screen's game list. Accent stripe uses the game's own color. */
export function GameCard({ game, onPress }: GameCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { borderLeftColor: game.theme.accent },
        pressed && styles.pressed,
      ]}
    >
      <Image source={game.icon} style={styles.icon} />
      <View style={styles.text}>
        <Text style={styles.title} numberOfLines={1}>
          {game.title}
        </Text>
        <Text style={styles.tagline} numberOfLines={1}>
          {game.tagline}
        </Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: Radius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    borderLeftWidth: 3,
  },
  pressed: {
    backgroundColor: Colors.surfaceRaised,
    transform: [{ scale: 0.99 }],
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  text: {
    flex: 1,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: FontSize.body,
    fontWeight: '600',
    marginBottom: 3,
  },
  tagline: {
    color: Colors.textSecondary,
    fontSize: FontSize.small,
  },
  chevron: {
    color: Colors.textSecondary,
    fontSize: 22,
    opacity: 0.5,
  },
});
