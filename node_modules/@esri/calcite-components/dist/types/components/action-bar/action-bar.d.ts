import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position, Scale, Layout } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding `calcite-action`s that will appear at the top of the action bar.
 * @slot bottom-actions - A slot for adding `calcite-action`s that will appear at the bottom of the action bar, above the collapse/expand button.
 * @slot expand-tooltip - Used to set the tooltip for the expand toggle.
 */
export declare class ActionBar implements ConditionalSlotComponent {
  /**
   * When `true`, the expand-toggling behavior is disabled.
   */
  expandDisabled: boolean;
  expandHandler(): void;
  /**
   * When `true`, the component is expanded.
   */
  expanded: boolean;
  expandedHandler(expanded: boolean): void;
  /**
   * Specifies the label of the expand icon when the component is collapsed.
   */
  intlExpand?: string;
  /**
   * Specifies the label of the collapse icon when the component is expanded.
   */
  intlCollapse?: string;
  /**
   *  The layout direction of the actions.
   */
  layout: Extract<"horizontal" | "vertical", Layout>;
  /**
   * Disables automatically overflowing `calcite-action`s that won't fit into menus.
   */
  overflowActionsDisabled: boolean;
  overflowDisabledHandler(overflowActionsDisabled: boolean): void;
  /**
   * Arranges the component depending on the element's `dir` property.
   */
  position: Position;
  /**
   * Specifies the size of the expand `calcite-action`.
   */
  scale: Scale;
  /**
   * Emits when the `expanded` property is toggled.
   */
  calciteActionBarToggle: EventEmitter<void>;
  el: HTMLCalciteActionBarElement;
  mutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  resizeObserver: ResizeObserver;
  expandToggleEl: HTMLCalciteActionElement;
  componentDidLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Overflows actions that won't fit into menus.
   *
   * @internal
   */
  overflowActions(): Promise<void>;
  /**
   * Sets focus on the component.
   *
   * @param focusId
   */
  setFocus(focusId?: "expand-toggle"): Promise<void>;
  actionMenuOpenChangeHandler: (event: CustomEvent<boolean>) => void;
  resizeHandlerEntries: (entries: ResizeObserverEntry[]) => void;
  resizeHandler: (entry: ResizeObserverEntry) => void;
  private resize;
  conditionallyOverflowActions: () => void;
  toggleExpand: () => void;
  setExpandToggleRef: (el: HTMLCalciteActionElement) => void;
  renderBottomActionGroup(): VNode;
  render(): VNode;
}
