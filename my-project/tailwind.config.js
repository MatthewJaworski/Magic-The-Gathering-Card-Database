module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
      Amethysta: ["Amethysta", "sans-serif"],
    },

    screens: {
      msm: { max: "544px" },
      mmd: { max: "734px" },
      mlg: { max: "956px" },
      mmlg: { max: "1114px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
    extend: {
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      textShadow: {},
      keyframes: {
        float: {
          "0%": {
            "box-shadow": "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
          "50%": {
            "box-shadow": "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(-20px)",
          },
          "100%": {
            "box-shadow": "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
        },
      },
      animation: {
        float: "float 10s ease-in-out infinite",
      },
    },
  },
};
