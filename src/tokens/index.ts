import { colors as lightColors } from './colors.light';
import { colors as darkColors } from './colors.dark';
import { spacing } from './spacing';

const isDark = false; // future to change for light and dark theme

export const colors = isDark ? darkColors : lightColors;
export { spacing }; 