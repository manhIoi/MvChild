const rootColor = {
  darkBlue: 'rgb(22,83,120)',
  orange: 'rgb(235,111,59)',
  lightBlue: 'rgb(117,199,169)',
  redPink: 'rgb(212,91,117)',
  yellow: 'rgb(240,180,115)',
  white: '#fff',
  black: '#111',
  // primary: 'rgb(64,64,64)',
  primary: 'rgb(237,40,76)',
};

const alphaColor = (rgbColor: string, alpha: number) => {
  const result = `rgba${rgbColor.slice(3, rgbColor.length - 1)},${alpha})`;
  return result;
};

export {alphaColor};

export default rootColor;
