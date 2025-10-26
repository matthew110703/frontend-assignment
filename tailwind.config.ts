// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #e3ffe6 0%, #e5e1d6 100%)",
      },
      keyframes: {
        "slide-down-words": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "2.5%, 30%": { transform: "translateY(0%)", opacity: "1" },
          "33.33%, 100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-word-1": "slide-down-words 6s infinite",
        "slide-word-2": "slide-down-words 6s 2s infinite",
        "slide-word-3": "slide-down-words 6s 4s infinite",
      },
    },
  },
};
