import { VNode } from "../../stencil-public-runtime";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding content to the component. This content will appear between any leading and trailing panels added to the component, such as a map.
 * @slot header - A slot for adding header content. This content will be positioned at the top of the component.
 * @slot footer - A slot for adding footer content. This content will be positioned at the bottom of the component.
 * @slot panel-start - A slot for adding the starting `calcite-shell-panel`.
 * @slot panel-end - A slot for adding the ending `calcite-shell-panel`.
 * @slot primary-panel - [DEPRECATED] A slot for adding the leading `calcite-shell-panel`.
 * @slot contextual-panel - [DEPRECATED] A slot for adding the trailing `calcite-shell-panel`.
 * @slot center-row - A slot for adding content to the center row.
 */
export declare class Shell implements ConditionalSlotComponent {
  /**
   * Positions the center content behind any `calcite-shell-panel`s.
   */
  contentBehind: boolean;
  el: HTMLCalciteShellElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  renderHeader(): VNode;
  renderContent(): VNode[];
  renderFooter(): VNode;
  renderMain(): VNode;
  render(): VNode;
}
