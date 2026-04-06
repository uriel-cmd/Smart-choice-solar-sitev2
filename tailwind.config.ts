import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        slate: "#1a3052",
        sky: "#8fcbe7",
        sun: "#e2a13a",
        mint: "#d7edf8",
        cloud: "#f0f7fb",
        line: "#c8d9e8"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(7, 17, 31, 0.08)",
        glow: "0 16px 40px rgba(143, 203, 231, 0.28)"
      },
      backgroundImage: {
        halo: "radial-gradient(circle at top, rgba(143, 203, 231, 0.24), transparent 38%)",
        mesh:
          "linear-gradient(135deg, rgba(143, 203, 231, 0.24), transparent 35%), linear-gradient(225deg, rgba(226, 161, 58, 0.12), transparent 35%)"
      },
      animation: {
        float: "float 8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
