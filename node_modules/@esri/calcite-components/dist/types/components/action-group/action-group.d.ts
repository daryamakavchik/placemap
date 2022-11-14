import { VNode } from "../../stencil-public-runtime";
import { Columns, Layout, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { CalciteActionMenuCustomEvent } from "../../components";
/**
 * @slot - A slot for adding a group of `calcite-action`s.
 * @slot menu-actions - A slot for adding an overflow menu with `calcite-action`s inside a `calcite-dropdown`.
 * @slot menu-tooltip - A slot for adding a `calcite-tooltip` for the menu.
 */
export declare class ActionGroup implements ConditionalSlotComponent {
  /**
   * When `true`, the component is expanded.
   */
  expanded: boolean;
  expandedHandler(): void;
  /**
   * Indicates the layout of the component.
   */
  layout: Layout;
  /**
   * Indicates number of columns.
   */
  columns?: Columns;
  /**
   * Specifies a text string for the `calcite-action-menu`.
   */
  intlMore?: string;
  /**
   * When `true`, the `calcite-action-menu` is open.
   */
  menuOpen: boolean;
  /**
   * Specifies the size of the `calcite-action-menu`.
   */
  scale: Scale;
  el: HTMLCalciteActionGroupElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  renderTooltip(): VNode;
  renderMenu(): VNode;
  render(): VNode;
  setMenuOpen: (event: CalciteActionMenuCustomEvent<boolean>) => void;
}
