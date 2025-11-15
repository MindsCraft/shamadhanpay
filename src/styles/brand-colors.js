// Brand Logo Colors - Store your 5 logo colors here for experimentation

export const logoColors = {
  // Replace these with your actual logo colors
  primary: '#44AA99',     // Example: Main brand orange
  secondary: '#6373AD',   // Example: Teal/cyan
  accent1: '#A1609D',     // Example: Green
  accent2: '#EA9E51',     // Example: Yellow/amber
  accent3: '#424143',     // Example: Red
}

// Color variations for each logo color (light, medium, dark)
export const logoColorVariations = {
  primary: {
    50: '#F0F9F7',
    100: '#D4F0EC',
    200: '#AAE1D8',
    300: '#7DCFC1',
    400: '#5BBDAA',
    500: '#44AA99',  // Main color - Primary teal-green
    600: '#3A9688',
    700: '#2F7A6E',
    800: '#256157',
    900: '#1D4A43',
  },
  secondary: {
    50: '#F4F6FB',
    100: '#E8ECF5',
    200: '#D1D9EB',
    300: '#B0BDD9',
    400: '#8A9BC5',
    500: '#6373AD',  // Main color - Blue-purple
    600: '#556299',
    700: '#485285',
    800: '#3C446E',
    900: '#323859',
  },
  accent1: {
    50: '#F9F4F8',
    100: '#F2E8F0',
    200: '#E5D1E1',
    300: '#D1B0CC',
    400: '#B985B4',
    500: '#A1609D',  // Main color - Purple-pink
    600: '#8F5189',
    700: '#7A4474',
    800: '#663960',
    900: '#54304F',
  },
  accent2: {
    50: '#FEF8F0',
    100: '#FDEFD9',
    200: '#FBDDB3',
    300: '#F7C682',
    400: '#F1B269',
    500: '#EA9E51',  // Main color - Orange-yellow
    600: '#D88A42',
    700: '#B87235',
    800: '#985E2C',
    900: '#7D4D25',
  },
  accent3: {
    50: '#F7F7F7',
    100: '#EEEEEE',
    200: '#DCDCDC',
    300: '#BDBDBD',
    400: '#989898',
    500: '#424143',  // Main color - Dark gray
    600: '#3A393B',
    700: '#323133',
    800: '#2A292B',
    900: '#242324',
  }
}

// Usage examples for experimentation
export const colorExamples = {
  gradients: {
    primaryToSecondary: `linear-gradient(135deg, ${logoColors.primary}, ${logoColors.secondary})`,
    accent1ToAccent2: `linear-gradient(135deg, ${logoColors.accent1}, ${logoColors.accent2})`,
    allColors: `linear-gradient(135deg, ${logoColors.primary}, ${logoColors.secondary}, ${logoColors.accent1}, ${logoColors.accent2}, ${logoColors.accent3})`,
  },
  combinations: {
    primaryWithAccent1: [logoColors.primary, logoColors.accent1],
    secondaryWithAccent2: [logoColors.secondary, logoColors.accent2],
    warmColors: [logoColors.primary, logoColors.accent2, logoColors.accent3],
    coolColors: [logoColors.secondary, logoColors.accent1],
  }
}