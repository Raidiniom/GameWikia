import { StyleSheet } from 'react-native';
import { Colors } from "../theme";

// Shared style for all game detail screens.
// Each game screen can import this plus its own theme colors.
export const GameDetailStyle = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.ink_black,
  },

  // Hero header section
  hero: {
    backgroundColor: Colors.dark_teal,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark_card_border,
  },

  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 14,
  },

  backText: {
    color: Colors.pearl_aqua,
    fontSize: 13,
  },

  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  heroIcon: {
    width: 58,
    height: 58,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.dark_card_border,
  },

  heroIconPlaceholder: {
    width: 58,
    height: 58,
    borderRadius: 14,
    backgroundColor: Colors.dark_cyan,
    borderWidth: 1,
    borderColor: Colors.dark_card_border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroIconEmoji: {
    fontSize: 28,
  },

  heroTitle: {
    color: Colors.vanilla_custard,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  heroTag: {
    color: Colors.pearl_aqua,
    fontSize: 12,
    backgroundColor: `${Colors.dark_cyan}cc`,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginTop: 5,
    overflow: 'hidden',
  },

  // Tab bar
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark_card_border,
    backgroundColor: Colors.dark_teal,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 11,
  },

  tabText: {
    color: Colors.pearl_aqua,
    fontSize: 13,
    opacity: 0.7,
  },

  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.jade_green,
  },

  tabTextActive: {
    color: Colors.mint_highlight,
    fontSize: 13,
    fontWeight: '600',
    opacity: 1,
  },

  // Content area
  content: {
    padding: 16,
  },

  sectionLabel: {
    color: Colors.pearl_aqua,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
    opacity: 0.7,
  },

  // Menu rows (info bars)
  infoRow: {
    backgroundColor: Colors.dark_teal,
    borderWidth: 1,
    borderColor: Colors.dark_card_border,
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 3,
    borderLeftColor: Colors.jade_green,
  },

  infoRowPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.985 }],
  },

  infoRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  infoRowIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: `${Colors.jade_green}22`,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoRowEmoji: {
    fontSize: 16,
  },

  infoRowText: {
    color: Colors.vanilla_custard,
    fontSize: 14,
    fontWeight: '500',
  },

  infoRowChevron: {
    color: Colors.pearl_aqua,
    fontSize: 18,
    opacity: 0.5,
  },
});