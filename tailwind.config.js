/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
       primary : '#F9DEA5',
       secondary :'#262126',
    },
      
      container: {
      center:true,
      padding:{
        default : '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      }
  }},
  },
  plugins: [],
}
