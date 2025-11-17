import { StyleSheet } from "react-native";

export const Colors = {
  primary: '#d900ff',         // main background
  secondary: '#4f46e5',       // buttons, accents
  accent: '#22c55e',          // highlights
  background: '#d900ff',      // same as primary
  surface: '#ffffffaa',       // cards/forms
  text: '#000000ff',
  mutedText: '#cccccc',
  border: '#333333',
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    justifyContent: 'center',  // center vertically
    alignItems: 'center',      // center horizontally
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 24,
  },
});

export const UIStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4, // Android shadow
  },
  textInput: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    backgroundColor: '#ffffffee',
    color: Colors.text,
  },
  loginButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 16,
  },
  loginButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
});