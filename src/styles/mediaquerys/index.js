/* Smartphones (portrait and landscape) ----------- */
const smartphonesPortraitAndLandscape = `@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) `;

/* Smartphones (landscape) ----------- */
const smartphonesLandscape = `@media only screen 
and (min-width : 321px) `;

/* Smartphones (portrait) ----------- */
const smartphonesPortrait = `@media only screen 
and (max-width : 320px) `;

/* iPads (portrait and landscape) ----------- */
const iPadsPortraitAndLandscape = `@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) `;

/* iPads (landscape) ----------- */
const iPadsLandscape = `@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : landscape) `;

/* iPads (portrait) ----------- */
const iPadsPortrait = `@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px) 
and (orientation : portrait) `;

/* Desktops and laptops ----------- */
const desktopsAndLaptops = `@media only screen 
and (min-width : 1224px) `;

/* Large screens ----------- */
const largeScreens = `@media only screen 
and (min-width : 1824px) `;

const iPhone4 = `@media
only screen and (-webkit-min-device-pixel-ratio : 1.5),
only screen and (min-device-pixel-ratio : 1.5)`;

const mediaQuerys = {
  smartphonesPortraitAndLandscape,
  smartphonesLandscape,
  smartphonesPortrait,
  iPadsPortraitAndLandscape,
  iPadsLandscape,
  iPadsPortrait,
  desktopsAndLaptops,
  largeScreens,
  iPhone4,
};

export default mediaQuerys;
