import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { HourCycle, Meridiem, TimePart } from "../../utils/time";
import { LocalizedComponent, NumberingSystem } from "../../utils/locale";
export declare class TimePicker implements LocalizedComponent {
  el: HTMLCalciteTimePickerElement;
  /**
   * Accessible name for the component's hour input.
   *
   * @default "Hour"
   */
  intlHour: string;
  /**
   * Accessible name for the component's hour down button.
   *
   * @default "Decrease hour"
   */
  intlHourDown: string;
  /**
   * Accessible name for the component's hour up button.
   *
   * @default "Increase hour"
   */
  intlHourUp: string;
  /**
   * Accessible name for the component's meridiem (AM/PM) input.
   *
   * @default "AM/PM"
   */
  intlMeridiem: string;
  /**
   * Accessible name for the component's meridiem (AM/PM) down button.
   *
   * @default "Decrease AM/PM"
   */
  intlMeridiemDown: string;
  /**
   * Accessible name for the component's meridiem (AM/PM) up button.
   *
   * @default "Increase AM/PM"
   */
  intlMeridiemUp: string;
  /**
   * Accessible name for the component's minute input.
   *
   * @default "Minute"
   */
  intlMinute: string;
  /**
   * Accessible name for the component's minute down button.
   *
   * @default "Decrease minute"
   */
  intlMinuteDown: string;
  /**
   * Accessible name for the component's minute up button.
   *
   * @default "Increase minute"
   */
  intlMinuteUp: string;
  /**
   * Accessible name for the component's second input.
   *
   * @default "Second"
   */
  intlSecond: string;
  /**
   * Accessible name for the component's second down button.
   *
   * @default "Decrease second"
   */
  intlSecondDown: string;
  /**
   * Accessible name for the component's second up button.
   *
   * @default "Increase second"
   */
  intlSecondUp: string;
  /**
   * BCP 47 language tag for desired language and country format.
   *
   * @internal
   * @deprecated set the global `lang` attribute on the element instead.
   * @mdn [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
   */
  locale: string;
  localeChanged(): void;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Specifies the granularity the `value` must adhere to (in seconds). */
  step: number;
  /**
   * Specifies the Unicode numeral system used by the component for localization.
   *
   */
  numberingSystem?: NumberingSystem;
  /** The component's value in UTC (always 24-hour format). */
  value: string;
  valueWatcher(newValue: string): void;
  private activeEl;
  private hourEl;
  private meridiemEl;
  private minuteEl;
  private secondEl;
  private meridiemOrder;
  effectiveLocale: string;
  effectiveLocaleWatcher(): void;
  hour: string;
  hourCycle: HourCycle;
  localizedHour: string;
  localizedHourSuffix: string;
  localizedMeridiem: string;
  localizedMinute: string;
  localizedMinuteSuffix: string;
  localizedSecond: string;
  localizedSecondSuffix: string;
  meridiem: Meridiem;
  minute: string;
  second: string;
  showSecond: boolean;
  /**
   * @internal
   */
  calciteInternalTimePickerBlur: EventEmitter<void>;
  /**
   * @internal
   */
  calciteInternalTimePickerChange: EventEmitter<string>;
  /**
   * @internal
   */
  calciteInternalTimePickerFocus: EventEmitter<void>;
  hostBlurHandler(): void;
  hostFocusHandler(): void;
  keyDownHandler(event: KeyboardEvent): void;
  /**
   * Sets focus on the component.
   *
   * @param target
   */
  setFocus(target: TimePart): Promise<void>;
  private buttonActivated;
  private decrementHour;
  private decrementMeridiem;
  private decrementMinuteOrSecond;
  private decrementMinute;
  private decrementSecond;
  private focusHandler;
  private hourDownButtonKeyDownHandler;
  private hourKeyDownHandler;
  private hourUpButtonKeyDownHandler;
  private incrementMeridiem;
  private incrementHour;
  private incrementMinuteOrSecond;
  private incrementMinute;
  private incrementSecond;
  private meridiemDownButtonKeyDownHandler;
  private meridiemKeyDownHandler;
  private meridiemUpButtonKeyDownHandler;
  private minuteDownButtonKeyDownHandler;
  private minuteKeyDownHandler;
  private minuteUpButtonKeyDownHandler;
  private secondDownButtonKeyDownHandler;
  private secondKeyDownHandler;
  private secondUpButtonKeyDownHandler;
  private setHourEl;
  private setMeridiemEl;
  private setMinuteEl;
  private setSecondEl;
  private setValue;
  private setValuePart;
  private getMeridiemOrder;
  private updateLocale;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
