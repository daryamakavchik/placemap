import { DeprecatedEventPayload, Scale, Status } from "../interfaces";
import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { InputPlacement } from "./interfaces";
import { Position } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { NumberingSystem, LocalizedComponent } from "../../utils/locale";
import { InteractiveComponent } from "../../utils/interactive";
declare type NumberNudgeDirection = "up" | "down";
/**
 * @slot action - A slot for positioning a `calcite-button` next to the component.
 */
export declare class Input implements LabelableComponent, FormComponent, InteractiveComponent, LocalizedComponent {
  el: HTMLCalciteInputElement;
  /** Specifies the text alignment of the component's value. */
  alignment: Position;
  /**
   * When `true`, the component is focused on page load.
   *
   * @mdn [autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)
   */
  autofocus: boolean;
  /**
   * When `true`, a clear button is displayed when the component has a value. The clear button shows by default for `"search"`, `"time"`, and `"date"` types, and will not display for the `"textarea"` type.
   */
  clearable: boolean;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   *
   * @mdn [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)
   */
  disabled: boolean;
  disabledWatcher(): void;
  /**
   * When `true`, number values are displayed with a group separator corresponding to the language and country format.
   */
  groupSeparator: boolean;
  /**
   * When `true`, the component will not be visible.
   *
   * @mdn [hidden](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)
   */
  hidden: boolean;
  /**
   * When `true`, shows a default recommended icon. Alternatively, pass a Calcite UI Icon name to display a specific icon.
   */
  icon: string | boolean;
  /**
   * Accessible name for the component's clear button.
   */
  intlClear?: string;
  /**
   * Accessible name when the component is loading.
   *
   * @default "Loading"
   */
  intlLoading?: string;
  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  iconFlipRtl: boolean;
  /** Accessible name for the component. */
  label?: string;
  /** When `true`, a busy indicator is displayed. */
  loading: boolean;
  /**
   * BCP 47 language tag for desired language and country format
   *
   * @deprecated set the global `lang` attribute on the element instead.
   * @mdn [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
   */
  locale: string;
  localeChanged(): void;
  /**
   * Specifies the Unicode numeral system used by the component for localization.
   *
   */
  numberingSystem?: NumberingSystem;
  /**
   * When `true`, uses locale formatting for numbers.
   *
   * @internal
   */
  localeFormat: boolean;
  /**
   * Specifies the maximum value for type "number".
   *
   * @mdn [max](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max)
   */
  max?: number;
  /** watcher to update number-to-string for max */
  maxWatcher(): void;
  /**
   * Specifies the minimum value for `type="number"`.
   *
   * @mdn [min](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min)
   */
  min?: number;
  /** watcher to update number-to-string for min */
  minWatcher(): void;
  /**
   * Specifies the maximum length of text for the component's value.
   *
   * @deprecated use `maxLength` instead.
   */
  maxlength?: number;
  /**
   * Specifies the maximum length of text for the component's value.
   *
   * @mdn [maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength)
   */
  maxLength?: number;
  /**
   * Specifies the minimum length of text for the component's value.
   *
   * @mdn [minlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength)
   */
  minLength?: number;
  /**
   * Specifies the name of the component on form submission.
   *
   * @mdn [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)
   */
  name: string;
  /** Specifies the placement of the buttons for `type="number"`. */
  numberButtonType?: InputPlacement;
  /**
   * Specifies placeholder text for the component.
   *
   * @mdn [placeholder](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#placeholder)
   */
  placeholder: string;
  /** Adds text to the start of the component. */
  prefixText?: string;
  /**
   * When `true`, the component's value can be read, but cannot be modified.
   *
   * @mdn [readOnly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
   */
  readOnly: boolean;
  /** When `true`, the component must have a value in order for the form to submit. */
  required: boolean;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Specifies the status of the input field, which determines message and icons. */
  status: Status;
  /**
   * Specifies the granularity the component's value must adhere to.
   *
   * @mdn [step](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step)
   */
  step?: number | "any";
  /** Adds text to the end of the component. */
  suffixText?: string;
  /**
   * @internal
   */
  editingEnabled: boolean;
  /**
   * Specifies the component type.
   *
   * Note that the following `type`s add type-specific icons by default: `"date"`, `"email"`, `"password"`, `"search"`, `"tel"`, `"time"`.
   */
  type: "color" | "date" | "datetime-local" | "email" | "file" | "image" | "month" | "number" | "password" | "search" | "tel" | "text" | "textarea" | "time" | "url" | "week";
  /** The component's value. */
  value: string;
  valueWatcher(newValue: string, previousValue: string): void;
  updateRequestedIcon(): void;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Input["value"];
  inlineEditableEl: HTMLCalciteInlineEditableElement;
  /** keep track of the rendered child type */
  private childEl?;
  /** keep track of the rendered child type */
  private childElType?;
  /** number text input element for locale */
  private childNumberEl?;
  get isClearable(): boolean;
  get isTextarea(): boolean;
  private minString?;
  private maxString?;
  private previousEmittedValue;
  private previousValue;
  private previousValueOrigin;
  /** the computed icon to render */
  private requestedIcon?;
  private nudgeNumberValueIntervalId;
  mutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  private userChangedValue;
  effectiveLocale: string;
  localizedValue: string;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentShouldUpdate(newValue: string, oldValue: string, property: string): boolean;
  componentDidRender(): void;
  /**
   * @internal
   */
  calciteInternalInputFocus: EventEmitter<void>;
  /**
   * @internal
   */
  calciteInternalInputBlur: EventEmitter<void>;
  /**
   * Fires each time a new `value` is typed.
   *
   * **Note:**: The `el` and `value` event payload properties are deprecated, use the event's `target`/`currentTarget` instead.
   */
  calciteInputInput: EventEmitter<DeprecatedEventPayload>;
  /**
   * Fires each time a new `value` is typed and committed.
   */
  calciteInputChange: EventEmitter<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /** Selects all text of the component's `value`. */
  selectText(): Promise<void>;
  keyDownHandler: (event: KeyboardEvent) => void;
  onLabelClick(): void;
  incrementOrDecrementNumberValue(direction: NumberNudgeDirection, inputMax: number | null, inputMin: number | null, nativeEvent: KeyboardEvent | MouseEvent): void;
  private clearInputValue;
  private emitChangeIfUserModified;
  private inputBlurHandler;
  private inputFocusHandler;
  private inputInputHandler;
  private inputKeyDownHandler;
  private inputNumberInputHandler;
  private inputNumberKeyDownHandler;
  private nudgeNumberValue;
  private numberButtonPointerUpAndOutHandler;
  private numberButtonPointerDownHandler;
  onFormReset(): void;
  syncHiddenFormInput(input: HTMLInputElement): void;
  hiddenInputChangeHandler: (event: Event) => void;
  private setChildElRef;
  private setChildNumberElRef;
  private setDisabledAction;
  private setInputValue;
  private setPreviousEmittedValue;
  private setPreviousValue;
  private setValue;
  private inputKeyUpHandler;
  private warnAboutInvalidNumberValue;
  render(): VNode;
}
export {};
