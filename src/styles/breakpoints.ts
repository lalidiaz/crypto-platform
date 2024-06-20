type Size = {
  xs: string;
  sm: string;
  md: string;
  laptop: string;
  laptopL: string;
  desktop: string;
};

const size: Size = {
  xs: "320px",
  sm: "425px",
  md: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};
