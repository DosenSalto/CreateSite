/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //テーマカラーを設定できる.
         dark: "#1b1b1b",
         light: "#fff",
         accent: "#7B00D3", 
         accentDark: "#ffdb4d",
         gray: "#747474",
       }
    },
  },
  plugins: [],
}



// colors: {
//   dark: "#1b1b1b",
//   light: "#fff",
//   accent: "#7B00D3", 
//   accentDark: "#ffdb4d",
//   gray: "#747474",
// }