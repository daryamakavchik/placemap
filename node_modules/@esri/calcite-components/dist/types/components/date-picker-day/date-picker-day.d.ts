import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { InteractiveComponent } from "../../utils/interactive";
export declare class DatePickerDay implements InteractiveComponent {
  el: HTMLCalciteDatePickerDayElement;
  /** Day of the month to be shown. */
  day: number;
  /** Date is outside of range and can't be selected */
  disabled: boolean;
  /** Date is in the current month. */
  currentMonth: boolean;
  /** Date is the current selected date of the picker */
  selected: boolean;
  /** Date is currently highlighted as part of the range */
  highlighted: boolean;
  /** Showing date range */
  range: boolean;
  /** Date is the start of date range */
  startOfRange: boolean;
  /** Date is the end of date range */
  endOfRange: boolean;
  /** Date is being hovered and within the set range */
  rangeHover: boolean;
  /** Date is actively in focus for keyboard navigation */
  active: boolean;
  /** specify the scale of the date picker */
  scale: Scale;
  /** Date value for the day. */
  value: Date;
  onClick: () => void;
  keyDownHandler: (event: KeyboardEvent) => void;
  mouseoverHandler(): void;
  /**
   * Emitted when user selects day
   */
  calciteDaySelect: EventEmitter<void>;
  /**
   * Emitted when user hovers over a day
   *
   * @internal
   */
  calciteInternalDayHover: EventEmitter<void>;
  componentWillLoad(): void;
  render(): VNode;
  componentDidRender(): void;
  isTabbable(): boolean;
  private parentDatePickerEl;
}
