import { StyleSheet } from 'react-native';
import { Colors } from "./theme";

export const IndexStyle = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.ink_black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },

  logoBox: {
    width: 64,
    height: 64,
    backgroundColor: Colors.jade_green,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  logoText: {
    fontSize: 32,
  },

  appTitle: {
    color: Colors.vanilla_custard,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.4,
  },

  appSubtitle: {
    color: Colors.pearl_aqua,
    fontSize: 13,
    marginTop: 3,
    opacity: 0.8,
  },

  loginForm: {
    backgroundColor: Colors.dark_teal,
    padding: 24,
    borderRadius: 18,
    width: '100%',
    maxWidth: 420,
    borderWidth: 1,
    borderColor: Colors.dark_card_border,
  },

  fieldLabel: {
    color: Colors.pearl_aqua,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 6,
    marginTop: 4,
  },

  userInput: {
    backgroundColor: Colors.dark_cyan,
    color: Colors.vanilla_custard,
    paddingVertical: 13,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.soft_sage,
  },

  loginButton: {
    backgroundColor: Colors.jade_green,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },

  loginButtonPressed: {
    backgroundColor: Colors.accent_green,
    transform: [{ scale: 0.98 }],
  },

  loginText: {
    color: Colors.vanilla_custard,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.4,
  },

  forgotText: {
    color: Colors.pearl_aqua,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 12,
    opacity: 0.75,
  },

  messageText: {
    marginBottom: 14,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    padding: 10,
    borderRadius: 8,
  },

  successText: {
    color: Colors.mint_highlight,
    backgroundColor: `${Colors.jade_green}33`,
  },

  errorText: {
    color: '#f87171',
    backgroundColor: '#9b222622',
  },

  divider: {
    height: 1,
    backgroundColor: Colors.dark_card_border,
    marginVertical: 18,
  },

  registerLink: {
    color: Colors.mint_highlight,
    textAlign: 'center',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});

export const RegisterStyle = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: Colors.ink_black,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  registerForm: {
    backgroundColor: Colors.dark_teal,
    padding: 24,
    borderRadius: 18,
    width: '100%',
    maxWidth: 420,
    borderWidth: 1,
    borderColor: Colors.dark_card_border,
  },

  welcomeText: {
    color: Colors.vanilla_custard,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.4,
  },

  fieldLabel: {
    color: Colors.pearl_aqua,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 6,
    marginTop: 4,
  },

  userInput: {
    backgroundColor: Colors.dark_cyan,
    color: Colors.vanilla_custard,
    paddingVertical: 13,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.soft_sage,
  },

  registerButton: {
    backgroundColor: Colors.jade_green,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },

  registerButtonPressed: {
    backgroundColor: Colors.accent_green,
    transform: [{ scale: 0.98 }],
  },

  registerText: {
    color: Colors.vanilla_custard,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.4,
  },

  strengthContainer: {
    marginBottom: 10,
  },

  strengthBarContainer: {
    height: 5,
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
    fontSize: 13,
    fontWeight: '600',
  },

  strengthScore: {
    color: Colors.pearl_aqua,
    fontSize: 12,
  },

  requirementsContainer: {
    backgroundColor: `${Colors.dark_cyan}cc`,
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
    borderWidth: 1,
    borderColor: Colors.soft_sage,
  },

  requirementsTitle: {
    color: Colors.pearl_aqua,
    fontSize: 11,
    marginBottom: 8,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  requirementIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
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
    marginBottom: 10,
  },

  matchIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  matchText: {
    fontSize: 12,
  },

  backToLoginButton: {
    padding: 10,
    marginTop: 12,
    alignItems: 'center',
  },

  backToLoginText: {
    color: Colors.mint_highlight,
    fontSize: 13,
    textDecorationLine: 'underline',
  },

  successMessage: {
    textAlign: 'center',
    marginTop: 12,
    padding: 10,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: '500',
    backgroundColor: `${Colors.jade_green}33`,
    color: Colors.mint_highlight,
  },

  errorMessage: {
    textAlign: 'center',
    marginTop: 12,
    padding: 10,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: '500',
    backgroundColor: '#9b222622',
    color: '#f87171',
  },
});