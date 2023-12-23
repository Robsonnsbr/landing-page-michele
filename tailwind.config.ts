import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      backgroundColor: {
        primaryColor: '#8ADDF0',
        lineColor: '#527A97',
        lineColor2: '#5C697B'
      },
      colors: {
        primaryColor: '#9FA4A5',
        secondaryColor: '#1783B5',
        thirdColor: '#527AA4',
        readingText: '#007A97',
        activeColor: '#8ADDF0',
        secondaryActiveColor: '#475569'
      }
    }
  },
  plugins: []
};
export default config;
