import Sortable from "sortablejs";
import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ICON_TYPES } from "./resources";
import { ListFocusId, ItemData } from "../pick-list/shared-list-logic";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-value-list-item` elements. List items are displayed as a vertical list.
 * @slot menu-actions - A slot for adding a button and menu combination for performing actions, such as sorting.
 */
export declare class ValueList<ItemElement extends HTMLCalciteValueListItemElement = HTMLCalciteValueListItemElement> implements InteractiveComponent {
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * When `true`, `calcite-value-list-item`s are sortable via a draggable button.
   */
  dragEnabled: boolean;
  /**
   * When `true`, an input appears at the top of the component that can be used by end users to filter list items.
   */
  filterEnabled: boolean;
  /**
   * Placeholder text for the filter's input field.
   */
  filterPlaceholder: string;
  /**
   * The component's group identifier.
   *
   * To drag elements from one list into another, both lists must have the same group value.
   */
  group?: string;
  /**
   * When `true`, a busy indicator is displayed.
   */
  loading: boolean;
  /**
   * Similar to standard radio buttons and checkboxes.
   * When `true`, a user can select multiple `calcite-value-list-item`s at a time.
   * When `false`, only a single `calcite-value-list-item` can be selected at a time,
   * and a new selection will deselect previous selections.
   */
  multiple: boolean;
  /**
   * When `true` and single-selection is enabled, the selection changes when navigating `calcite-value-list-item`s via keyboard.
   */
  selectionFollowsFocus: boolean;
  /**
   * When `dragEnabled` is `true` and active, specifies accessible context to the `calcite-value-list-item`s initial position.
   *
   * Use "`${position}` of `${total}`" as a placeholder for displaying indices and `${item.label}` as a placeholder for displaying the `calcite-value-list-item` label.
   */
  intlDragHandleIdle?: string;
  /**
   * When `dragEnabled` is `true` and active, specifies accessible context to the component.
   *
   * Use "`${position}` of `${total}`" as a placeholder for displaying indices and `${item.label}` as a placeholder for displaying the `calcite-value-list-item` label.
   */
  intlDragHandleActive?: string;
  /**
   * When `dragEnabled` is `true` and active, specifies accessible context to the `calcite-value-list-item`s new position.
   *
   * Use "`${position}` of `${total}`" as a placeholder for displaying indices and `${item.label}` as a placeholder for displaying the `calcite-value-list-item` label.
   */
  intlDragHandleChange?: string;
  /**
   * When `dragEnabled` is `true` and active, specifies accessible context to the `calcite-value-list-item`s current position after commit.
   *
   * Use "`${position}` of `${total}`" as a placeholder for displaying indices and `${item.label}` as a placeholder for displaying the `calcite-value-list-item` label.
   */
  intlDragHandleCommit?: string;
  selectedValues: Map<string, ItemElement>;
  dataForFilter: ItemData;
  items: ItemElement[];
  lastSelectedItem: ItemElement;
  mutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  sortable: Sortable;
  el: HTMLCalciteValueListElement;
  emitCalciteListChange: () => void;
  filterEl: HTMLCalciteFilterElement;
  assistiveTextEl: HTMLSpanElement;
  connectedCallback(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  /**
   * Emits when any of the list item selections have changed.
   */
  calciteListChange: EventEmitter<Map<string, HTMLCalciteValueListItemElement>>;
  /**
   * Emits when the order of the list has changed.
   */
  calciteListOrderChange: EventEmitter<any[]>;
  calciteListFocusOutHandler(event: FocusEvent): void;
  calciteListItemRemoveHandler(event: CustomEvent<void>): void;
  calciteListItemChangeHandler(event: CustomEvent): void;
  calciteInternalListItemPropsChangeHandler(event: CustomEvent): void;
  calciteInternalListItemValueChangeHandler(event: CustomEvent): void;
  getItems(): ItemElement[];
  setUpItems(): void;
  setUpFilter(): void;
  setFilterEl: (el: HTMLCalciteFilterElement) => void;
  setUpDragAndDrop(): void;
  cleanUpDragAndDrop(): void;
  deselectRemovedItems: any;
  deselectSiblingItems: any;
  selectSiblings: any;
  handleFilter: any;
  getItemData: any;
  keyDownHandler: (event: KeyboardEvent) => void;
  handleBlur(): void;
  /** Returns the currently selected items */
  getSelectedItems(): Promise<Map<string, HTMLCalciteValueListItemElement>>;
  /**
   * Sets focus on the component.
   *
   * @param focusId
   */
  setFocus(focusId?: ListFocusId): Promise<void>;
  getIconType(): ICON_TYPES | null;
  updateScreenReaderText(text: string): void;
  updateHandleAriaLabel(handleElement: HTMLSpanElement, text: string): void;
  storeAssistiveEl: (el: HTMLSpanElement) => void;
  handleFocusIn: (event: FocusEvent) => void;
  render(): VNode;
}
