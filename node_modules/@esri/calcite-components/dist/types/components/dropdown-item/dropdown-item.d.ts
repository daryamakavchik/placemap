import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ItemKeyboardEvent } from "../dropdown/interfaces";
import { FlipContext } from "../interfaces";
import { RequestedItem } from "../dropdown-group/interfaces";
/**
 * @slot - A slot for adding text.
 */
export declare class DropdownItem {
  el: HTMLCalciteDropdownItemElement;
  /**
   * Indicates whether the item is active.
   *
   * @deprecated Use selected instead.
   */
  active: boolean;
  activeHandler(value: boolean): void;
  /** When true, item is selected  */
  selected: boolean;
  selectedHandler(value: boolean): void;
  /** When true, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  iconFlipRtl?: FlipContext;
  /** Specifies an icon to display at the start of the component. */
  iconStart?: string;
  /** Specifies an icon to display at the end of the component. */
  iconEnd?: string;
  /** optionally pass a href - used to determine if the component should render as anchor */
  href?: string;
  /** Applies to the aria-label attribute on the button or hyperlink */
  label?: string;
  /** The rel attribute to apply to the hyperlink */
  rel?: string;
  /** The target attribute to apply to the hyperlink */
  target?: string;
  /**
   * @internal
   */
  calciteInternalDropdownItemSelect: EventEmitter<RequestedItem>;
  /** @internal */
  calciteInternalDropdownItemKeyEvent: EventEmitter<ItemKeyboardEvent>;
  /** @internal */
  calciteInternalDropdownCloseRequest: EventEmitter<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  componentWillLoad(): void;
  connectedCallback(): void;
  render(): VNode;
  onClick(): void;
  keyDownHandler(event: KeyboardEvent): void;
  updateActiveItemOnChange(event: CustomEvent): void;
  /** id of containing group */
  private parentDropdownGroupEl;
  /** requested group */
  private requestedDropdownGroup;
  /** requested item */
  private requestedDropdownItem;
  /** what selection mode is the parent dropdown group in */
  private selectionMode;
  /** if href is requested, track the rendered child link*/
  private childLink;
  private initialize;
  private determineActiveItem;
  private emitRequestedItem;
}
