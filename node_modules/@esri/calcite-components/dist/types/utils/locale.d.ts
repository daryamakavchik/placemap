export declare const defaultLocale = "en";
export declare const locales: string[];
export declare const numberingSystems: readonly ["arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt"];
export declare type NumberingSystem = typeof numberingSystems[number];
export declare const defaultNumberingSystem: "arab" | "arabext" | "bali" | "beng" | "deva" | "fullwide" | "gujr" | "guru" | "hanidec" | "khmr" | "knda" | "laoo" | "latn" | "limb" | "mlym" | "mong" | "mymr" | "orya" | "tamldec" | "telu" | "thai" | "tibt";
export declare const getSupportedNumberingSystem: (numberingSystem: string) => NumberingSystem;
export declare function getSupportedLocale(locale: string): string;
/**
 * This interface is for components that need to determine locale from the lang attribute.
 */
export interface LocalizedComponent {
  el: HTMLElement;
  /**
   * BCP 47 language tag for desired language and country format
   *
   * **Note**: this prop was added exclusively for backwards-compatibility
   *
   * @deprecated set the global `lang` attribute on the element instead.
   * @mdn [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
   */
  locale?: string;
  /**
   * Used to store the effective locale to avoid multiple lookups.
   *
   * This is an internal property and should:
   *
   * - use the `@State` decorator
   * - be initialized to ""
   *
   * Components should watch this prop to ensure messages are updated.
   *
   * @Watch("effectiveLocale")
   * effectiveLocaleChange(): void {
   *   updateMessages(this, this.effectiveLocale);
   * }
   */
  effectiveLocale: string;
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
export declare function connectLocalized(component: LocalizedComponent): void;
/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
export declare function updateEffectiveLocale(component: LocalizedComponent): void;
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
export declare function disconnectLocalized(component: LocalizedComponent): void;
export interface NumberStringFormatOptions extends Intl.NumberFormatOptions {
  numberingSystem: NumberingSystem;
  locale: string;
}
/**
 * This util formats and parses numbers for localization
 */
declare class NumberStringFormat {
  /**
   * The actual group separator for the specified locale.
   * Some white space group separators don't render correctly in the browser,
   * so we replace them with a normal <SPACE>.
   */
  private _actualGroup;
  /** the corrected group separator */
  private _group;
  get group(): string;
  private _decimal;
  get decimal(): string;
  private _minusSign;
  get minusSign(): string;
  private _digits;
  get digits(): Array<string>;
  private _getDigitIndex;
  private _numberFormatter;
  get numberFormatter(): Intl.NumberFormat;
  private _numberFormatOptions;
  get numberFormatOptions(): NumberStringFormatOptions;
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(options: NumberStringFormatOptions);
  delocalize: (numberString: string) => string;
  localize: (numberString: string) => string;
}
export declare const numberStringFormatter: NumberStringFormat;
export {};
