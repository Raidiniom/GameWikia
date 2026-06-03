import { StyleSheet } from 'react-native';
import { Colors } from "../theme";

export const HomeStyle = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.ink_black,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  // Header row: title + avatar
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
    paddingHorizontal: 2,
  },

  greeting: {
    color: Colors.pearl_aqua,
    fontSize: 12,
    marginBottom: 2,
    opacity: 0.8,
  },

  headerText: {
    color: Colors.vanilla_custard,
    fontSize: 26,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.jade_green,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: Colors.vanilla_custard,
    fontSize: 15,
    fontWeight: '600',
  },

  // Search bar
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark_teal,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.dark_card_border,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
    gap: 10,
  },

  searchText: {
    color: Colors.pearl_aqua,
    fontSize: 13,
    opacity: 0.7,
  },

  sectionLabel: {
    color: Colors.pearl_aqua,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 10,
    paddingHorizontal: 2,
    opacity: 0.75,
  },

  scrollContainer: {
    flex: 1,
  },
});