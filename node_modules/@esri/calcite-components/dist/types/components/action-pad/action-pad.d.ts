import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout, Position, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding `calcite-action`s to the component.
 * @slot expand-tooltip - Used to set the `calcite-tooltip` for the expand toggle.
 */
export declare class ActionPad implements ConditionalSlotComponent {
  /**
   * When `true`, the expand-toggling behavior is disabled.
   */
  expandDisabled: boolean;
  /**
   * When `true`, the component is expanded.
   */
  expanded: boolean;
  expandedHandler(expanded: boolean): void;
  /**
   * Indicates the layout of the component.
   */
  layout: Layout;
  /**
   * Specifies the label of the expand icon when the component is collapsed.
   */
  intlExpand?: string;
  /**
   * Specifies the label of the collapse icon when the component is expanded.
   */
  intlCollapse?: string;
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
  calciteActionPadToggle: EventEmitter<void>;
  el: HTMLCalciteActionPadElement;
  expandToggleEl: HTMLCalciteActionElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  /**
   * Sets focus on the component.
   *
   * @param focusId
   */
  setFocus(focusId?: "expand-toggle"): Promise<void>;
  actionMenuOpenChangeHandler: (event: CustomEvent<boolean>) => void;
  toggleExpand: () => void;
  setExpandToggleRef: (el: HTMLCalciteActionElement) => void;
  renderBottomActionGroup(): VNode;
  render(): VNode;
}
