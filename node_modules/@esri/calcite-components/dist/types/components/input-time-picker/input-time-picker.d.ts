import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { FloatingUIComponent, LogicalPlacement, OverlayPositioning } from "../../utils/floating-ui";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
import { LocalizedComponent, NumberingSystem } from "../../utils/locale";
export declare class InputTimePicker implements LabelableComponent, FormComponent, InteractiveComponent, FloatingUIComponent, LocalizedComponent {
  el: HTMLCalciteInputTimePickerElement;
  /**
   * When `true`, the component is active.
   *
   * @deprecated Use `open` instead.
   */
  active: boolean;
  activeHandler(value: boolean): void;
  /** When `true`, displays the `calcite-time-picker` component. */
  open: boolean;
  openHandler(value: boolean): void;
  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  disabled: boolean;
  /**
   * When `true`, the component's value can be read, but controls are not accessible and the value cannot be modified.
   *
   * @mdn [readOnly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
   */
  readOnly: boolean;
  handleDisabledAndReadOnlyChange(value: boolean): void;
  /** Accessible name for the component's hour input. */
  intlHour?: string;
  /** Accessible name for the component's hour down button. */
  intlHourDown?: string;
  /** Accessible name for the component's hour up button. */
  intlHourUp?: string;
  /** Accessible name for the component's meridiem (am/pm) input. */
  intlMeridiem?: string;
  /** Accessible name for the component's meridiem (am/pm) down button. */
  intlMeridiemDown?: string;
  /** Accessible name for the component's meridiem (am/pm) up button. */
  intlMeridiemUp?: string;
  /** Accessible name for the component's minute input. */
  intlMinute?: string;
  /** Accessible name for the component's minute down button. */
  intlMinuteDown?: string;
  /** Accessible name for the component's minute up button. */
  intlMinuteUp?: string;
  /** Accessible name for the component's second input. */
  intlSecond?: string;
  /** Accessible name for the component's second down button. */
  intlSecondDown?: string;
  /** Accessible name for the component's second up button. */
  intlSecondUp?: string;
  /**
   * BCP 47 language tag for desired language and country format.
   *
   * @internal
   * @deprecated set the global `lang` attribute on the element instead.
   * @mdn [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
   */
  locale: string;
  localeChanged(): void;
  /** Specifies the name of the component on form submission. */
  name: string;
  /**
   * Specifies the Unicode numeral system used by the component for localization.
   */
  numberingSystem?: NumberingSystem;
  /**
   * When `true`, the component must have a value in order for the form to submit.
   *
   * @internal
   */
  required: boolean;
  /** Specifies the size of the component. */
  scale: Scale;
  /**
   * Determines the type of positioning to use for the overlaid content.
   *
   * Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout.
   *
   * `"fixed"` should be used to escape an overflowing parent container, or when the reference element's `position` CSS property is `"fixed"`.
   *
   */
  overlayPositioning: OverlayPositioning;
  /**
   * Determines where the popover will be positioned relative to the input.
   *
   * @see [LogicalPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/floating-ui.ts#L25)
   */
  placement: LogicalPlacement;
  /** Specifies the granularity the component's `value` must adhere to (in seconds). */
  step: number;
  /** The component's value in UTC (always 24-hour format). */
  value: string;
  valueWatcher(newValue: string): void;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: InputTimePicker["value"];
  private calciteInputEl;
  private calciteTimePickerEl;
  /** whether the value of the input was changed as a result of user typing or not */
  private internalValueChange;
  private previousValidValue;
  private referenceElementId;
  popoverEl: HTMLCalcitePopoverElement;
  effectiveLocale: string;
  effectiveLocaleWatcher(): void;
  localizedValue: string;
  /**
   * Fires when the time value is changed as a result of user input.
   */
  calciteInputTimePickerChange: EventEmitter<string>;
  private calciteInternalInputBlurHandler;
  private calciteInternalInputFocusHandler;
  private calciteInputInputHandler;
  clickHandler(event: MouseEvent): void;
  timePickerBlurHandler(event: CustomEvent): void;
  private timePickerChangeHandler;
  timePickerFocusHandler(event: CustomEvent): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  reposition(delayed?: boolean): Promise<void>;
  keyDownHandler: (event: KeyboardEvent) => void;
  onLabelClick(): void;
  private shouldIncludeSeconds;
  private setCalcitePopoverEl;
  private setCalciteInputEl;
  private setCalciteTimePickerEl;
  private setInputValue;
  private setValue;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
}
