// Pure helpers (no React) live in lib/. They're easy to reuse and test.

export type StrengthLevel = 'none' | 'weak' | 'medium' | 'strong';

export interface PasswordRequirement {
  label: string;
  met: boolean;
}

export interface PasswordStrength {
  score: number;
  maxScore: number;
  level: StrengthLevel;
  requirements: PasswordRequirement[];
}

/** Minimum score a password needs before we allow registration. */
export const MIN_PASSWORD_SCORE = 3;

const RULES: { label: string; test: (password: string) => boolean }[] = [
  { label: 'At least 8 characters', test: (p) => p.length >= 8 },
  { label: 'Contains an uppercase letter', test: (p) => /[A-Z]/.test(p) },
  { label: 'Contains a lowercase letter', test: (p) => /[a-z]/.test(p) },
  { label: 'Contains a number', test: (p) => /[0-9]/.test(p) },
  { label: 'Contains a special character', test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
];

export function getPasswordStrength(password: string): PasswordStrength {
  const requirements = RULES.map((rule) => ({ label: rule.label, met: rule.test(password) }));
  const score = requirements.filter((r) => r.met).length;

  let level: StrengthLevel = 'weak';
  if (password.length === 0) level = 'none';
  else if (score >= 4) level = 'strong';
  else if (score >= MIN_PASSWORD_SCORE) level = 'medium';

  return { score, maxScore: RULES.length, level, requirements };
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
