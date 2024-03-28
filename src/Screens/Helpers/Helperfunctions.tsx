export const thousandsCommaSeparated = (string: string | number) =>
  string.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

export const decimalThousandsCommaSeparated = (
  number?: number | null,
  decimalPlaces?: number
) => thousandsCommaSeparated((number || 0).toFixed(decimalPlaces || 2));
