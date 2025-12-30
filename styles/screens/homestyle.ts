import { StyleSheet } from 'react-native';
import { Colors } from "../theme";

export const HomeStyle = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.ink_black,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  
  headerText: {
    color: Colors.vanilla_custard,
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 0.5,
  },

  scrollContainer: {
    backgroundColor: Colors.dark_teal,
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.pearl_aqua,
  },
  
  sectionLabel: {
    color: Colors.pearl_aqua,
    fontSize: 14,
    marginBottom: 8,
    opacity: 0.85,
  },
});
