/* formart babel */ const babel =  require("./src/app/hooks/babel");
module.exports = {
  presets: [
    'next/babel',
  ],
  plugins: [
    ['styled-components', {
      ssr: true,
      displayName: false,
    }],
  ],
};