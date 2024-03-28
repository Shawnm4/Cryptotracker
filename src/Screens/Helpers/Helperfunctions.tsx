export const thousandsCommaSeparated = (string: string | number) =>
  string.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

export const decimalThousandsCommaSeparated = (
  number?: number | null,
  decimalPlaces?: number
) => thousandsCommaSeparated((number || 0).toFixed(decimalPlaces || 2));

export const addLetterToEndOfNumber = (number: number) => {
  const numberString = number.toFixed(0).toString();
  switch (numberString.length) {
    case 15:
      return `${numberString.slice(0, -12)}T`;
    case 14:
      return `${numberString.slice(0, -12)}T`;
    case 13:
      return `${numberString.slice(0, -12)}T`;
    case 12:
      return `${numberString.slice(0, -9)}B`;
    case 11:
      return `${numberString.slice(0, -9)}B`;
    case 10:
      return `${numberString.slice(0, -9)}B`;
    case 9:
      return `${numberString.slice(0, -6)}M`;
    case 8:
      return `${numberString.slice(0, -6)}M`;
    case 7:
      return `${numberString.slice(0, -6)}M`;
    case 6:
      return `${numberString.slice(0, -3)}T`;
    case 5:
      return `${numberString.slice(0, -3)}T`;
  }
  return number;
};
