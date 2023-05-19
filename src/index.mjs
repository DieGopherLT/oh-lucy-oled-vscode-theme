import { writeFile } from 'fs'
import { promisify } from 'util'
import chroma from 'chroma-js'
// Original Lucy
import og_theme from './original/theme.mjs'
import og_colors from './original/colors.mjs'
// Oh Lucy
import theme from './custom/theme.mjs'
import colors from './custom/colors.mjs'

const promisifiedWriteFile = promisify(writeFile);

const calculate_evening_theme = (color) => {
  const [red, green, blue, alpha] = chroma(color).rgba();

  const sum = red + green + blue;

  const clamp = (number) => Math.min(Math.max(number, 0), 255);

  // Shift colors while preserving luminosity
  const newRed = clamp(red * (1 + 0.175 * (1 - sum / 800)));
  const newGreen = clamp(green * (1 - 0.01 * (1 - sum / 800)));
  const newBlue = clamp(sum - (newRed + newGreen));

  return chroma({ r: newRed, g: newGreen, b: newBlue, a: alpha }).hex();
}

/* REMINDER: Variants need to be listed as seperate themes in the package.json */
const VARIANTS = {
  // Original Lucy themes
  'lucy': {
    theme: og_theme,
    colors: og_colors,
    getColor: (color) => color,
  },
  'lucy-evening': {
    theme: og_theme,
    colors: og_colors,
    getColor: (color) => calculate_evening_theme(color),
  },
  // Modified Lucy themes
  'oh-lucy': {
    theme: og_theme,
    colors: og_colors,
    getColor: (color) => color,
  },
  'oh-lucy-evening': {
    theme: og_theme,
    colors: og_colors,
    getColor: (color) => calculate_evening_theme(color),
  },
};

const buildTheme = async (varients) => {
  try {
    await Promise.all(
      // For each theme varient
      Object.entries(varients).map(([variantName, varient]) => {
        // Assemble the theme's JSON
        const themeWithColors = varient.theme({
          'name': variantName,
          'colors': Object.entries(varient.colors).reduce(
            (acc, [colorName, colorValue]) => ({
              ...acc,
              [colorName]: varient.getColor(colorValue)
            }),
            {}
          )
        });

        // Export it to a file
        return promisifiedWriteFile(
          `./dist/${variantName}.json`,
          JSON.stringify(themeWithColors)
        );
      })
    );
    console.log('🌺 Theme built. 💅');
  } catch (error) {
    console.log(error);
  }
};

buildTheme(VARIANTS)