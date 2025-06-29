// src/types/password.ts

export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar?: boolean;
  excludeAmbiguous?: boolean; // exclude ambiguous characters
}

export interface GeneratedPassword {
  id: string;
  value: string;
  createdAt: Date;
  options: PasswordOptions;
  strength: PasswordStrength;
}

export const PasswordStrength = {
  VERY_WEAK: 'very-weak',
  WEAK: 'weak',
  MEDIUM: 'medium',
  STRONG: 'strong',
  VERY_STRONG: 'very-strong'
} as const;

export type PasswordStrength = typeof PasswordStrength[keyof typeof PasswordStrength];

export interface PasswordValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export interface CharacterSets {
  uppercase: string;
  lowercase: string;
  numbers: string;
  symbols: string;
  similarChars: string;
  ambiguousChars: string;
}

// For component props 
export interface PasswordGeneratorProps { 
  onPasswordGenerated?: (password: GeneratedPassword) => void;
  defaultOptions?: Partial<PasswordOptions>;
}

export interface PasswordDisplayProps {
  password: string;
  strength: PasswordStrength;
  onCopy?: () => void;
  onRegenerate?: () => void;                        
}

export interface PasswordHistoryProps {
  passwords: GeneratedPassword[];
  onClear?: () => void;
  onDelete?: (id: string) => void;
  onCopy?: (password: string) => void;
}

// Utility type for form validation
export type PasswordFormErrors = Partial<Record<keyof PasswordOptions, string>>;