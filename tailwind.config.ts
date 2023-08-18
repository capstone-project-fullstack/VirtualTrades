import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        "dark-blue": "#16007A",
        "purple": "#35007A",
        "light-purple": "#68007A",
        "green": "#70E000",
        "dark-green": "#38B000",
        "dark-black": "#100517",
      }
    },
  },
  plugins: [],
});
