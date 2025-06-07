import { colors as lightColors } from './colors.light';
import { colors as darkColors } from './colors.dark';
import { spacing } from './spacing';

const isDark = false; // keeping only scope for light theme

export const colors = isDark ? darkColors : lightColors;
export { spacing }; 