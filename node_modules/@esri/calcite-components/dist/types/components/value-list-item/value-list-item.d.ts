import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ICON_TYPES } from "../pick-list/resources";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot actions-end - A slot for adding actions or content to the end side of the component.
 * @slot actions-start - A slot for adding actions or content to the start side of the component.
 */
export declare class ValueListItem implements ConditionalSlotComponent, InteractiveComponent {
  /**
   * A description for the component that displays below the label text.
   */
  description?: string;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * @internal
   */
  disableDeselect: boolean;
  /**
   * When `true`, prevents the content of the component from user interaction.
   */
  nonInteractive: boolean;
  /**
   * @internal
   */
  handleActivated?: boolean;
  /**
   * Determines the icon SVG symbol that will be shown. Options are circle, square, grip or null.
   *
   * @see [ICON_TYPES](https://github.com/Esri/calcite-components/blob/master/src/components/pick-list/resources.ts#L5)
   */
  icon?: ICON_TYPES | null;
  /**
   * Label and accessible name for the component. Appears next to the icon.
   */
  label: string;
  /**
   * Provides additional metadata to the component. Primary use is for a filter on the parent list.
   */
  metadata?: Record<string, unknown>;
  /**
   * When `true`, adds an action to remove the component.
   */
  removable: boolean;
  /**
   * When `true`, the component is selected.
   */
  selected: boolean;
  /**
   * The component's value.
   */
  value: any;
  el: HTMLCalciteValueListItemElement;
  pickListItem: HTMLCalcitePickListItemElement;
  guid: string;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  toggleSelected(coerce?: boolean): Promise<void>;
  /** Set focus on the component. */
  setFocus(): Promise<void>;
  /**
   * Fires when the remove button is pressed.
   */
  calciteListItemRemove: EventEmitter<void>;
  calciteListItemChangeHandler(event: CustomEvent): void;
  getPickListRef: (el: HTMLCalcitePickListItemElement) => HTMLCalcitePickListItemElement;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBlur: () => void;
  handleSelectChange: (event: CustomEvent) => void;
  renderActionsEnd(): VNode;
  renderActionsStart(): VNode;
  renderHandle(): VNode;
  render(): VNode;
}
