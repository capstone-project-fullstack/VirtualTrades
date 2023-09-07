import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#081A51',
        'light-white': 'rgba(255,255,255,0.18)',
        'dark-blue': '#16007A',
        'light-purple': '#35007A',
        'dark-green': '#38B000',
        'light-green': '#01BBB9',
        'dark-black': '#100517',
        custom1: '#1e222d',
        custom2: '#131721',
        custom3: '#434651',
        custom4: '#2a2e39',
        custom5: '#03e9f4',
        custom6: '#f700f7',
      },
    },
  },
  plugins: [],
});
