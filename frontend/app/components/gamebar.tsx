import { Colors } from "@/styles/theme";
import { Image, StyleSheet, Text, View, ImageSourcePropType } from "react-native";

interface GameBarProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  badge?: string; // optional e.g. "NEW"
}

const GameBar = ({ image, title, description, badge }: GameBarProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          {badge ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.description} numberOfLines={1}>{description}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark_teal,
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: Colors.dark_card_border,
    borderLeftWidth: 3,
    borderLeftColor: Colors.jade_green,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  image: {
    width: 46,
    height: 46,
    borderRadius: 10,
    flexShrink: 0,
  },

  textContainer: {
    flex: 1,
    minWidth: 0,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },

  title: {
    color: Colors.vanilla_custard,
    fontSize: 14,
    fontWeight: '600',
  },

  badge: {
    backgroundColor: `${Colors.jade_green}33`,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },

  badgeText: {
    color: Colors.mint_highlight,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  description: {
    color: Colors.pearl_aqua,
    fontSize: 12,
    opacity: 0.85,
  },

  chevron: {
    color: Colors.pearl_aqua,
    fontSize: 20,
    opacity: 0.4,
    flexShrink: 0,
  },
});

export default GameBar;