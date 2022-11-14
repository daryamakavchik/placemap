import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout, Scale, Width } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { RadioAppearance } from "./interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-radio-group-item`s.
 */
export declare class RadioGroup implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteRadioGroupElement;
  /** Specifies the appearance style of the component. */
  appearance: RadioAppearance;
  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  disabled: boolean;
  /**
   * When `true`, the component must have a value in order for the form to submit.
   *
   * @internal
   */
  required: boolean;
  /** Defines the layout of the component. */
  layout: Layout;
  /**
   * Specifies the name of the component on form submission.
   */
  name: string;
  /** Specifies the size of the component. */
  scale: Scale;
  /** The component's `selectedItem` value. */
  value: string;
  valueHandler(value: string): void;
  /**
   * The component's selected item `HTMLElement`.
   *
   * @readonly
   */
  selectedItem: HTMLCalciteRadioGroupItemElement;
  protected handleSelectedItemChange<T extends HTMLCalciteRadioGroupItemElement>(newItem: T, oldItem: T): void;
  /** Specifies the width of the component. */
  width: Extract<"auto" | "full", Width>;
  componentWillLoad(): void;
  componentDidLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
  protected handleClick: (event: MouseEvent) => void;
  protected handleSelected(event: Event): void;
  protected handleKeyDown(event: KeyboardEvent): void;
  /** Fires when the selected option changes, where the event detail is the new value. */
  calciteRadioGroupChange: EventEmitter<string>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: RadioGroup["value"];
  onLabelClick(): void;
  private getItems;
  private selectItem;
}
