module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          900: "#06003d",
          "900_02": "#100943",
          "900_03": "#111141",
          "900_01": "#0d0d2d",
        },
        white: {
          A700_2b: "#ffffff2b",
          A700_8e: "#ffffff8e",
          A700_6d: "#ffffff6d",
          A700_0c: "#ffffff0c",
          A700_a2: "#ffffffa2",
          A700_07: "#ffffff07",
          A700_16: "#ffffff16",
          A700: "#ffffff",
        },
        pink: { 400: "#e50aa7", A200_00: "#ff17bd00", A400: "#e90070" },
        purple: { A400_26: "#d011cc26", A400_59: "#d011cc59", A400: "#df1bff" },
        cyan: { 400: "#1ee0e1", A200_00: "#18fdff00", "400_01": "#1edfe1" },
        black: { 900: "#04011c" },
        blue_gray: { 900: "#19124e" },
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#ffffff,#1ee0e1,#18fdff00)",
        gradient1: "linear-gradient(144deg ,#df1bff,#e90070)",
      },
      boxShadow: {
        bs: "0px 16px  80px 0px #d011cc26",
        bs1: "0px 9px  100px 0px #d011cc59",
      },
      fontFamily: {
        axiforma: "Axiforma",
        helvetica: "Helvetica",
        poppins: "Poppins",
      },
      textShadow: { ts: "4px 4px  16px #1ee0e1" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
