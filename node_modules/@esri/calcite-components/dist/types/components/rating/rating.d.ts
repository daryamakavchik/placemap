import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
export declare class Rating implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteRatingElement;
  /** Specifies the size of the component. */
  scale: Scale;
  /** The component's value. */
  value: number;
  /** When `true`, the component's value can be read, but cannot be modified. */
  readOnly: boolean;
  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  disabled: boolean;
  /** When `true`, and if available, displays the `average` and/or `count` data summary in a `calcite-chip`. */
  showChip: boolean;
  /** Specifies the number of previous ratings to display. */
  count?: number;
  /** Specifies a cumulative average from previous ratings to display. */
  average?: number;
  /** Specifies the name of the component on form submission. */
  name: string;
  /**
   * Accessible name for the component.
   *
   * @default "Rating"
   */
  intlRating?: string;
  /**
   * Accessible name for each star. The `${num}` in the string will be replaced by the number.
   *
   * @default "Stars: ${num}"
   */
  intlStars?: string;
  /**
   * When `true`, the component must have a value in order for the form to submit.
   *
   * @internal
   */
  required: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Fires when the component's value changes.
   */
  calciteRatingChange: EventEmitter<{
    value: number;
  }>;
  blurHandler(): void;
  renderStars(): VNode[];
  render(): any;
  onLabelClick(): void;
  private updateValue;
  private onKeyboardPressed;
  private onFocusChange;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Rating["value"];
  hoverValue: number;
  focusValue: number;
  hasFocus: boolean;
  private guid;
  private inputFocusRef;
}
