import { StyleSheet } from 'react-native';
import { Colors } from "./theme";

export const IndexStyle = StyleSheet.create({
  bodyContainer: {
    backgroundColor: Colors.dark_teal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginForm: {
    backgroundColor: Colors.dark_cyan,
    padding: 24,
    borderRadius: 16,
    width: '90%',
    maxWidth: 400,
    elevation: 5,
    shadowColor: Colors.ink_black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  welcomeText: {
    color: Colors.rusty_spice,
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '600',
  },
  userInput: {
    color: Colors.rusty_spice,
    padding: 16,
    fontSize: 18,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: Colors.vanilla_custard,
    borderWidth: 2,
    borderColor: Colors.golden_orange,
  },
  loginButton: {
    backgroundColor: Colors.rusty_spice,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonPressed: {
    backgroundColor: Colors.oxidized_iron,
    transform: [{ scale: 1 }],
  },
  loginText: {
    color: Colors.pearl_aqua,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  messageText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});