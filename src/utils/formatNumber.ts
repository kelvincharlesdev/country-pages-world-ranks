export const formatNumber = (value: number) => {
  const integerValue = Math.round(value);
  return integerValue.toLocaleString('en-US');
};
