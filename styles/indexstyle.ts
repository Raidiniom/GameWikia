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

export const RegisterStyle = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.ink_black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  registerForm: {
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

  registerButton: {
    backgroundColor: Colors.golden_orange,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },

  registerButtonPressed: {
    backgroundColor: Colors.burnt_caramel,
    transform: [{ scale: 0.98 }],
  },

  registerText: {
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

  // New styles for password strength
  strengthContainer: {
    marginBottom: 15,
    paddingHorizontal: 0,
  },

  strengthBarContainer: {
    height: 6,
    backgroundColor: Colors.dark_cyan,
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },

  strengthBar: {
    height: '100%',
    borderRadius: 3,
  },

  strengthLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  strengthLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  strengthScore: {
    color: Colors.pearl_aqua,
    fontSize: 12,
  },

  requirementsContainer: {
    backgroundColor: 'rgba(10, 147, 150, 0.2)',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },

  requirementsTitle: {
    color: Colors.vanilla_custard,
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '500',
  },

  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  requirementIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  requirementText: {
    fontSize: 12,
  },

  matchCheckContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: 10,
  },

  matchIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  matchText: {
    fontSize: 12,
  },

  backToLoginButton: {
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
  },

  backToLoginText: {
    color: Colors.pearl_aqua,
    textDecorationLine: 'underline',
  },

  successMessage: {
    textAlign: 'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 6,
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: Colors.deep_emerald,
    color: Colors.mint_highlight,
  },

  errorMessage: {
    textAlign: 'center',
    marginTop: 15,
    padding: 10,
    borderRadius: 6,
    fontSize: 14,
    fontWeight: '500',
    backgroundColor: Colors.brown_red,
    color: Colors.vanilla_custard,
  },
});
