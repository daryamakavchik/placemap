import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { DeprecatedEventPayload, Scale } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { CheckableFormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
export declare class Switch implements LabelableComponent, CheckableFormComponent, InteractiveComponent {
  el: HTMLCalciteSwitchElement;
  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  disabled: boolean;
  /** Accessible name for the component. */
  label?: string;
  /** Specifies the name of the component on form submission. */
  name: string;
  /** Specifies the size of the component. */
  scale: Scale;
  /**
   * When `true`, the component is checked.
   *
   * @deprecated use `checked` instead.
   */
  switched: boolean;
  switchedWatcher(switched: boolean): void;
  /** When `true`, the component is checked. */
  checked: boolean;
  /** The component's value. */
  value: any;
  labelEl: HTMLCalciteLabelElement;
  switchEl: HTMLDivElement;
  formEl: HTMLFormElement;
  defaultValue: Switch["checked"];
  defaultChecked: boolean;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  keyDownHandler: (event: KeyboardEvent) => void;
  onLabelClick(): void;
  private toggle;
  private clickHandler;
  private setSwitchEl;
  /**
   * Fires when the `checked` value has changed.
   *
   * **Note:** The event payload is deprecated, use the component's `checked` property instead.
   */
  calciteSwitchChange: EventEmitter<DeprecatedEventPayload>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
}
