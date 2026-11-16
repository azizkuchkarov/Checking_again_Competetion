module.exports = {
  plugins: {
    // Swiper's CSS uses nested rules; this flattens them before Tailwind runs.
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
