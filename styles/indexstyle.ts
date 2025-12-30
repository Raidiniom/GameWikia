import { StyleSheet } from 'react-native';
import { Colors } from "./theme";

export const IndexStyle = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.ink_black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  loginForm: {
    backgroundColor: Colors.dark_teal,
    padding: 26,
    borderRadius: 18,
    width: '90%',
    maxWidth: 420,

    borderWidth: 1,
    borderColor: Colors.pearl_aqua,

    shadowColor: Colors.ink_black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  welcomeText: {
    color: Colors.vanilla_custard,
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5,
  },

  userInput: {
    backgroundColor: Colors.dark_cyan,
    color: Colors.vanilla_custard,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 8,
    borderRadius: 10,

    borderWidth: 1,
    borderColor: Colors.soft_sage,
  },

  loginButton: {
    backgroundColor: Colors.golden_orange,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },

  loginButtonPressed: {
    backgroundColor: Colors.burnt_caramel,
    transform: [{ scale: 0.98 }],
  },

  loginText: {
    color: Colors.ink_black,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.6,
  },

  messageText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },

  successText: {
    color: Colors.jade_green,
  },

  errorText: {
    color: Colors.brown_red,
  },
});
