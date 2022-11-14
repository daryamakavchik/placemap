import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { ItemKeyEvent, RegistryEntry, RequestedItem } from "./interfaces";
/**
 * @slot - A slot for adding custom content, including nested `calcite-accordion-item`s.
 */
export declare class AccordionItem implements ConditionalSlotComponent {
  el: HTMLCalciteAccordionItemElement;
  /**
   * When `true`, the component is active.
   *
   * @deprecated use `expanded` instead.
   */
  active: boolean;
  activeHandler(value: boolean): void;
  /** When `true`, the component is expanded. */
  expanded: boolean;
  expandedHandler(value: boolean): void;
  /**
   * Specifies a title for the component.
   *
   * @deprecated Use `heading` instead.
   */
  itemTitle?: string;
  /**
   * Specifies a subtitle for the component.
   *
   * @deprecated Use `description` instead.
   */
  itemSubtitle?: string;
  /** Specifies heading text for the component. */
  heading?: string;
  /** Specifies a description for the component. */
  description: string;
  /**
   * Specifies an icon to display.
   *
   * @deprecated use `iconStart` or `iconEnd` instead.
   */
  icon?: string;
  iconHandler(value: string): void;
  /** Specifies an icon to display at the start of the component. */
  iconStart?: string;
  iconStartHandler(value: string): void;
  /** Specifies an icon to display at the end of the component. */
  iconEnd?: string;
  /**
   * @internal
   */
  calciteInternalAccordionItemKeyEvent: EventEmitter<ItemKeyEvent>;
  /**
   * @internal
   */
  calciteInternalAccordionItemSelect: EventEmitter<RequestedItem>;
  /**
   * @internal
   */
  calciteInternalAccordionItemClose: EventEmitter<void>;
  /**
   * @internal
   */
  calciteInternalAccordionItemRegister: EventEmitter<RegistryEntry>;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  renderActionsStart(): VNode;
  renderActionsEnd(): VNode;
  render(): VNode;
  keyDownHandler(event: KeyboardEvent): void;
  updateActiveItemOnChange(event: CustomEvent): void;
  /** the containing accordion element */
  private parent;
  /** position within parent */
  private itemPosition;
  /** the latest requested item */
  private requestedAccordionItem;
  /** what selection mode is the parent accordion in */
  private selectionMode;
  /** what icon position does the parent accordion specify */
  private iconPosition;
  /** what icon type does the parent accordion specify */
  private iconType;
  /** handle clicks on item header */
  private itemHeaderClickHandler;
  private determineActiveItem;
  private emitRequestedItem;
  private getItemPosition;
}
