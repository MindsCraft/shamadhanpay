/**
 * HEALIFY DESIGN SYSTEM - COLOR PALETTE
 * Generated from logo analysis
 * Logo colors: Blue (#6373AD), Teal (#44AA99), Purple (#A1609D), Orange (#EA9E51)
 */

export const colors = {
  // PRIMARY COLOR - Blue (from logo)
  primary: {
    50: '#F4F6FB',
    100: '#E8ECF5',
    200: '#D1D9EB',
    300: '#B0BDD9',
    400: '#8A9BC5',
    500: '#6373AD',  // Main Primary - Logo Blue
    600: '#556299',
    700: '#485285',
    800: '#3C446E',
    900: '#323859',
  },

  // SECONDARY COLOR - Teal (from logo)
  secondary: {
    50: '#F0F9F7',
    100: '#D4F0EC',
    200: '#AAE1D8',
    300: '#7DCFC1',
    400: '#5BBDAA',
    500: '#44AA99',  // Main Secondary - Logo Teal
    600: '#3A9688',
    700: '#2F7A6E',
    800: '#256157',
    900: '#1D4A43',
  },

  // ACCENT 1 - Purple (from logo)
  accent1: {
    50: '#F9F4F8',
    100: '#F2E8F0',
    200: '#E5D1E1',
    300: '#D1B0CC',
    400: '#B985B4',
    500: '#A1609D',  // Main Accent 1 - Logo Purple
    600: '#8F5189',
    700: '#7A4474',
    800: '#663960',
    900: '#54304F',
  },

  // ACCENT 2 - Orange (from logo)
  accent2: {
    50: '#FEF8F0',
    100: '#FDEFD9',
    200: '#FBDDB3',
    300: '#F7C682',
    400: '#F1B269',
    500: '#EA9E51',  // Main Accent 2 - Logo Orange
    600: '#D88A42',
    700: '#B87235',
    800: '#985E2C',
    900: '#7D4D25',
  },

  // GRAYSCALE - Neutral colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // BRAND TEXT - From logo text
  text: {
    primary: '#424143',    // Logo text color
    secondary: '#6B7280',  // Gray-600
    tertiary: '#9CA3AF',   // Gray-400
    inverse: '#FFFFFF',
  },

  // SEMANTIC COLORS - For UI states
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',  // Main Success
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },

  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',  // Main Warning
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',  // Main Error
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },

  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',  // Main Info
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },

  // BACKGROUND COLORS
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    dark: '#111827',
  },

  // BRAND COLORS - Simple naming for easy use
  brand: {
    primary: '#6373AD',           // Primary blue
    primaryDark: '#556299',       // Darker blue for hover
    primaryLight: '#7A88BD',      // Lighter blue
    secondary: '#44AA99',         // Teal/green
    secondaryDark: '#3A9688',     // Darker teal
    accent: '#A1609D',            // Purple accent
    accentLight: '#B87DB3',       // Lighter purple
    warning: '#EA9E51',           // Orange/yellow
    dark: '#424143',              // Dark gray
    light: '#F8F9FA',             // Light background
    gray: '#E5E7EB',              // Medium gray
  },

  // BORDER COLORS
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },
}

// GRADIENT COMBINATIONS
export const gradients = {
  primary: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.primary[700]})`,
  secondary: `linear-gradient(135deg, ${colors.secondary[500]}, ${colors.secondary[700]})`,
  brand: `linear-gradient(135deg, ${colors.secondary[500]}, ${colors.primary[500]}, ${colors.accent1[500]}, ${colors.accent2[500]})`,
  brandSubtle: `linear-gradient(135deg, ${colors.primary[100]}, ${colors.secondary[100]})`,
  warm: `linear-gradient(135deg, ${colors.accent2[500]}, ${colors.accent1[500]})`,
  cool: `linear-gradient(135deg, ${colors.primary[500]}, ${colors.secondary[500]})`,
}

// SHADOW COLORS
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  brand: `0 4px 16px 0 rgba(99, 115, 173, 0.25)`, // Primary blue shadow
}

export default colors
