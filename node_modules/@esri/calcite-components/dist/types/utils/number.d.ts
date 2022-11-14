export declare class BigDecimal {
  value: bigint;
  isNegative: boolean;
  static DECIMALS: number;
  static ROUNDED: boolean;
  static SHIFT: bigint;
  constructor(input: string | BigDecimal);
  static _divRound(dividend: bigint, divisor: bigint): bigint;
  static fromBigInt(bigint: bigint): bigint;
  toString(): string;
  formatToParts(formatter: Intl.NumberFormat): Intl.NumberFormatPart[];
  format(formatter: Intl.NumberFormat): string;
  add(num: string): bigint;
  subtract(num: string): bigint;
  multiply(num: string): bigint;
  divide(num: string): bigint;
}
export declare function isValidNumber(numberString: string): boolean;
export declare function parseNumberString(numberString?: string): string;
export declare const sanitizeNumberString: (numberString: string) => string;
export declare function sanitizeExponentialNumberString(numberString: string, func: (s: string) => string): string;
