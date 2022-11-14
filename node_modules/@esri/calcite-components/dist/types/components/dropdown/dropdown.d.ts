import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { ItemKeyboardEvent, Selection } from "./interfaces";
import { OverlayPositioning, FloatingUIComponent, EffectivePlacement, MenuPlacement } from "../../utils/floating-ui";
import { Scale } from "../interfaces";
import { InteractiveComponent } from "../../utils/interactive";
import { OpenCloseComponent } from "../../utils/openCloseComponent";
import { RequestedItem } from "../dropdown-group/interfaces";
/**
 * @slot - A slot for adding `calcite-dropdown-group` components. Every `calcite-dropdown-item` must have a parent `calcite-dropdown-group`, even if the `groupTitle` property is not set.
 * @slot dropdown-trigger - A slot for the element that triggers the `calcite-dropdown`.
 */
export declare class Dropdown implements InteractiveComponent, OpenCloseComponent, FloatingUIComponent {
  el: HTMLCalciteDropdownElement;
  /**
   * Opens or closes the dropdown
   *
   * @deprecated use open instead.
   */
  active: boolean;
  activeHandler(value: boolean): void;
  /** When true, opens the dropdown */
  open: boolean;
  openHandler(value: boolean): void;
  /**
   allow the dropdown to remain open after a selection is made
   if the selection-mode of the selected item's containing group is "none", the dropdown will always close
   */
  disableCloseOnSelect: boolean;
  /** is the dropdown disabled  */
  disabled: boolean;
  handleDisabledChange(value: boolean): void;
  /**
   * Defines the available placements that can be used when a flip occurs.
   */
  flipPlacements?: EffectivePlacement[];
  flipPlacementsHandler(): void;
  /**
   specify the maximum number of calcite-dropdown-items to display before showing the scroller, must be greater than 0 -
   this value does not include groupTitles passed to calcite-dropdown-group
   */
  maxItems: number;
  maxItemsHandler(): void;
  /**
   * Determines the type of positioning to use for the overlaid content.
   *
   * Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout.
   *
   * `"fixed"` should be used to escape an overflowing parent container, or when the reference element's `position` CSS property is `"fixed"`.
   *
   */
  overlayPositioning: OverlayPositioning;
  overlayPositioningHandler(): void;
  /**
   * Determines where the dropdown will be positioned relative to the button.
   *
   * @default "bottom-start"
   */
  placement: MenuPlacement;
  placementHandler(): void;
  /** specify the scale of dropdown, defaults to m */
  scale: Scale;
  /**
   * **read-only** The currently selected items
   *
   * @readonly
   */
  selectedItems: HTMLCalciteDropdownItemElement[];
  /** specify whether the dropdown is opened by hover or click of a trigger element */
  type: "hover" | "click";
  /** specify the width of dropdown */
  width?: Scale;
  connectedCallback(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  render(): VNode;
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  reposition(delayed?: boolean): Promise<void>;
  /** fires when a dropdown item has been selected or deselected */
  calciteDropdownSelect: EventEmitter<Selection>;
  /** Fires when the component is requested to be closed and before the closing transition begins. */
  calciteDropdownBeforeClose: EventEmitter<void>;
  /** Fires when the component is closed and animation is complete. */
  calciteDropdownClose: EventEmitter<void>;
  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  calciteDropdownBeforeOpen: EventEmitter<void>;
  /** Fires when the component is open and animation is complete. */
  calciteDropdownOpen: EventEmitter<void>;
  closeCalciteDropdownOnClick(event: PointerEvent): void;
  closeCalciteDropdownOnEvent(event: Event): void;
  closeCalciteDropdownOnOpenEvent(event: Event): void;
  mouseEnterHandler(): void;
  mouseLeaveHandler(): void;
  calciteInternalDropdownItemKeyEvent(event: CustomEvent<ItemKeyboardEvent>): void;
  handleItemSelect(event: CustomEvent<RequestedItem>): void;
  filteredFlipPlacements: EffectivePlacement[];
  private items;
  private groups;
  /** trigger elements */
  private triggers;
  floatingEl: HTMLDivElement;
  referenceEl: HTMLDivElement;
  private scrollerEl;
  mutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  resizeObserver: ResizeObserver;
  openTransitionProp: string;
  transitionEl: HTMLDivElement;
  guid: string;
  defaultAssignedElements: Element[];
  slotChangeHandler: (event: Event) => void;
  setFilteredPlacements: () => void;
  updateTriggers: (event: Event) => void;
  updateItems: () => void;
  updateGroups: (event: Event) => void;
  resizeObserverCallback: (entries: ResizeObserverEntry[]) => void;
  setDropdownWidth: () => void;
  setMaxScrollerHeight: () => void;
  setScrollerAndTransitionEl: (el: HTMLDivElement) => void;
  onBeforeOpen(): void;
  onOpen(): void;
  onBeforeClose(): void;
  onClose(): void;
  setReferenceEl: (el: HTMLDivElement) => void;
  setFloatingEl: (el: HTMLDivElement) => void;
  private keyDownHandler;
  private updateSelectedItems;
  private getMaxScrollerHeight;
  private closeCalciteDropdown;
  private focusOnFirstActiveOrFirstItem;
  private focusFirstItem;
  private focusLastItem;
  private focusNextItem;
  private focusPrevItem;
  private itemIndex;
  private getFocusableElement;
  private toggleOpenEnd;
  private openCalciteDropdown;
}
