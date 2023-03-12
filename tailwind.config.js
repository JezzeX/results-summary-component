/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary
        lightRed: "hsl(0, 100%, 67%)",
        lightRedTrans: "hsl(0, 100%, 67%, 0.1)",
        orangeyYellow: "hsl(39, 100%, 56%)",
        orangeyYellowTrans: "hsl(39, 100%, 56%, 0.1)",
        greenTeal: "hsl(166, 100%, 37%)",
        greenTealTrans: "hsl(166, 100%, 37%, 0.1)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        cobaltBlueTrans: "hsl(234, 85%, 45%, 0.1)",
        // Gradients
        // Background
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        // Circle
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%,0)",
        //Neutral
        white: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        hankengrotesk: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
