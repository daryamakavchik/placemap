import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ICON_TYPES } from "../pick-list/resources";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot actions-end - A slot for adding `calcite-action`s or content to the end side of the component.
 * @slot actions-start - A slot for adding `calcite-action`s or content to the start side of the component.
 */
export declare class PickListItem implements ConditionalSlotComponent, InteractiveComponent {
  /**
   * A description for the component that displays below the label text.
   */
  description?: string;
  descriptionWatchHandler(): void;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * When `false`, the component cannot be deselected by user interaction.
   */
  disableDeselect: boolean;
  /**
   * @internal
   */
  nonInteractive: boolean;
  /**
   * Determines the icon SVG symbol that will be shown. Options are `"circle"`, `"square"`, `"grip"` or `null`.
   *
   * @see [ICON_TYPES](https://github.com/Esri/calcite-components/blob/master/src/components/pick-list/resources.ts#L5)
   */
  icon?: ICON_TYPES | null;
  /**
   * Label and accessible name for the component. Appears next to the icon.
   */
  label: string;
  labelWatchHandler(): void;
  /**
   * Provides additional metadata to the component. Primary use is for a filter on the parent list.
   */
  metadata?: Record<string, unknown>;
  metadataWatchHandler(): void;
  /**
   * When `true`, displays a remove action that removes the item from the list.
   */
  removable?: boolean;
  /**
   * When `true`, selects an item. Toggles when an item is checked/unchecked.
   */
  selected: boolean;
  selectedWatchHandler(): void;
  /**
   * When `removable` is `true`, the accessible name for the component's remove button.
   *
   * @default "Remove"
   */
  intlRemove: string;
  /**
   * The component's value.
   */
  value: any;
  valueWatchHandler(newValue: any, oldValue: any): void;
  el: HTMLCalcitePickListItemElement;
  private focusEl;
  shiftPressed: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Fires when the component is selected or unselected.
   */
  calciteListItemChange: EventEmitter<{
    item: HTMLCalcitePickListItemElement;
    value: any;
    selected: boolean;
    shiftPressed: boolean;
  }>;
  /**
   * Fires when the remove button is pressed.
   */
  calciteListItemRemove: EventEmitter<void>;
  /**
   * Emits when the component's label, description, value, or metadata properties are modified.
   *
   * @internal
   */
  calciteInternalListItemPropsChange: EventEmitter<void>;
  /**
   * Emits when the component's value property is modified.
   *
   * @internal
   */
  calciteInternalListItemValueChange: EventEmitter<{
    oldValue: any;
    newValue: any;
  }>;
  /**
   * Toggles the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  toggleSelected(coerce?: boolean): Promise<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  pickListClickHandler: (event: MouseEvent) => void;
  pickListKeyDownHandler: (event: KeyboardEvent) => void;
  removeClickHandler: () => void;
  renderIcon(): VNode;
  renderRemoveAction(): VNode;
  renderActionsStart(): VNode;
  renderActionsEnd(): VNode;
  render(): VNode;
}
