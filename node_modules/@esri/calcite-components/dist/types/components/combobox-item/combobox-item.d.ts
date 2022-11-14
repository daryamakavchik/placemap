import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ComboboxChildElement } from "../combobox/interfaces";
import { DeprecatedEventPayload, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding nested `calcite-combobox-item`s.
 */
export declare class ComboboxItem implements ConditionalSlotComponent, InteractiveComponent {
  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  disabled: boolean;
  /**
   * When `true`, the component is selected.
   */
  selected: boolean;
  /** When `true`, the component is active. */
  active: boolean;
  /** Specifies the parent and grandparent items, which are set on `calcite-combobox`. */
  ancestors: ComboboxChildElement[];
  /** The `id` attribute of the component. When omitted, a globally unique identifier is used. */
  guid: string;
  /** Specifies an icon to display. */
  icon?: string;
  selectedWatchHandler(): void;
  /** The component's text. */
  textLabel: string;
  /** The component's value. */
  value: any;
  /**
   * When `true`, omits the component from the `calcite-combobox` filtered search results.
   *
   * @deprecated use `filterDisabled` instead.
   */
  constant: boolean;
  /**
   * When `true`, omits the component from the `calcite-combobox` filtered search results.
   */
  filterDisabled: boolean;
  el: HTMLCalciteComboboxItemElement;
  isNested: boolean;
  scale: Scale;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Emits whenever the component is selected or unselected.
   *
   * **Note:**: The event's payload is deprecated, please use the event's `target`/`currentTarget` instead
   */
  calciteComboboxItemChange: EventEmitter<DeprecatedEventPayload>;
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  toggleSelected(coerce?: boolean): Promise<void>;
  itemClickHandler: (event: MouseEvent) => void;
  renderIcon(isSingle: boolean): VNode;
  renderChildren(): VNode;
  render(): VNode;
}
