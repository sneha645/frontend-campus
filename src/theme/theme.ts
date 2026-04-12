import colors from "./colors";

export interface Theme {
  color: typeof colors;
}

const theme: Theme = {
  color: colors,
};

export default theme;