import { height } from "@mui/system";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          light: "#061826",
          DEFAULT: "#090B0E",
          dark: "#000000",
        },
        white: {
          light: "#f8fafc",
          DEFAULT: "#ffffff",
          dark: "#fafafa",
        },
        gray: {
          light: "#e5e7eb",
          DEFAULT: "#d1d5db",
          dark: "#9ca3af",
        },
        blue: {
          DEFAULT: "#005DFF",
        },
      },
      fontSize: {
        12: ["12px", "14px"],
        14: ["14px", "16px"],
        16: ["16px", "20px"],
        18: ["18px", "22px"],
        20: ["20px", "24px"],
        22: ["22px", "26px"],
        28: ["28px", "32px"],
        32: ["32px", "38px"],
      },
      borderRadius: {
        2: "4px",
        4: "4px",
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
      },
      height: {
        //height of main content without header
        mc: "calc(100vh - 80px)",
      },
      backgroundColor: {
        "opacity-1/20": "rgba(255, 255, 255, 0.05)",
      },
    },
    // screens: {
    //   xs: "480px",
    //   sm: "640px",

    //   md: "1024px",

    //   lg: "1280px",

    //   xl: "1536px",

    //   "2xl": "1920px",
    // },
  },
  plugins: [],
};

export default config;
