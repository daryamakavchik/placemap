import { VNode } from "../../stencil-public-runtime";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-list-item` and `calcite-list-item-group` elements.
 * @slot actions-start - A slot for adding actionable `calcite-action` elements before the content of the component.
 * @slot content-start - A slot for adding non-actionable elements before the label and description of the component.
 * @slot content-end - A slot for adding non-actionable elements after the label and description of the component.
 * @slot actions-end - A slot for adding actionable `calcite-action` elements after the content of the component.
 */
export declare class ListItem implements ConditionalSlotComponent, InteractiveComponent {
  /**
   * When `true`, prevents the content of the component from user interaction.
   */
  nonInteractive: boolean;
  /**
   * A description for the component. Displays below the label text.
   */
  description?: string;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * The label text of the component. Displays above the description text.
   */
  label: string;
  el: HTMLCalciteListItemElement;
  focusEl: HTMLButtonElement;
  componentDidRender(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  renderActionsStart(): VNode;
  renderActionsEnd(): VNode;
  renderContentStart(): VNode;
  renderContentEnd(): VNode;
  renderContent(): VNode;
  renderContentContainer(): VNode;
  render(): VNode;
}
