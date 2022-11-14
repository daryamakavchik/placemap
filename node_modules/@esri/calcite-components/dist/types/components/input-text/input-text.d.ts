import { Scale, Status } from "../interfaces";
import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot action - A slot for positioning a button next to the component.
 */
export declare class InputText implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteInputTextElement;
  /** Specifies the text alignment of the component's value. */
  alignment: Position;
  /**
   * When `true`, the component is focused on page load.
   *
   * @mdn [autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)
   */
  autofocus: boolean;
  /**
   * When `true`, a clear button is displayed when the component has a value.
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
   * A text label that will appear on the clear button for screen readers.
   */
  intlClear?: string;
  /**
   * Accessible name that will appear while loading.
   *
   * @default "Loading"
   */
  intlLoading?: string;
  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  iconFlipRtl: boolean;
  /** Accessible name for the component's button or hyperlink. */
  label?: string;
  /** When `true`, the component is in the loading state and `calcite-progress` is displayed. */
  loading: boolean;
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
   * Specifies the name of the component.
   *
   * @mdn [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name)
   */
  name: string;
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
  /** Adds text to the end of the component.  */
  suffixText?: string;
  /**
   * @internal
   */
  editingEnabled: boolean;
  /** The component's value. */
  value: string;
  valueWatcher(newValue: string, previousValue: string): void;
  updateRequestedIcon(): void;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: InputText["value"];
  inlineEditableEl: HTMLCalciteInlineEditableElement;
  /** keep track of the rendered child */
  private childEl?;
  get isClearable(): boolean;
  private previousEmittedValue;
  private previousValue;
  private previousValueOrigin;
  /** the computed icon to render */
  private requestedIcon?;
  mutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  private userChangedValue;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  /**
   * @internal
   */
  calciteInternalInputTextFocus: EventEmitter<{
    element: HTMLInputElement;
    value: string;
  }>;
  /**
   * @internal
   */
  calciteInternalInputTextBlur: EventEmitter<{
    element: HTMLInputElement;
    value: string;
  }>;
  /**
   * Fires each time a new value is typed.
   */
  calciteInputTextInput: EventEmitter<{
    element: HTMLInputElement;
    nativeEvent: MouseEvent | KeyboardEvent | InputEvent;
    value: string;
  }>;
  /**
   * Fires each time a new value is typed and committed.
   */
  calciteInputTextChange: EventEmitter<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /** Selects all text of the component's `value`. */
  selectText(): Promise<void>;
  keyDownHandler: (event: KeyboardEvent) => void;
  onLabelClick(): void;
  private clearInputTextValue;
  private emitChangeIfUserModified;
  private inputTextBlurHandler;
  private inputTextFocusHandler;
  private inputTextInputHandler;
  private inputTextKeyDownHandler;
  onFormReset(): void;
  syncHiddenFormInput(input: HTMLInputElement): void;
  hiddenInputChangeHandler: (event: Event) => void;
  private setChildElRef;
  private setDisabledAction;
  private setInputValue;
  private setPreviousEmittedValue;
  private setPreviousValue;
  private setValue;
  render(): VNode;
}
