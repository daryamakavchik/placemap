import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding text and a hyperlink.
 * @slot thumbnail - A slot for adding an HTML image element.
 */
export declare class Tip implements ConditionalSlotComponent {
  /**
   * When `true`, the component does not display.
   */
  dismissed: boolean;
  /**
   * When `true`, the close button is not present on the component.
   */
  nonDismissible: boolean;
  /**
   * The component header text.
   */
  heading?: string;
  /**
   * Specifies the number at which section headings should start.
   */
  headingLevel: HeadingLevel;
  /**
   * When `true`, the component is selected if it has a parent `calcite-tip-manager`.
   *
   * Only one tip can be selected within the `calcite-tip-manager` parent.
   */
  selected: boolean;
  /**
   * Accessible name for the component's close button.
   */
  intlClose?: string;
  el: HTMLCalciteTipElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Emits when the component has been dismissed.
   */
  calciteTipDismiss: EventEmitter<void>;
  hideTip: () => void;
  renderHeader(): VNode;
  renderDismissButton(): VNode;
  renderImageFrame(): VNode;
  renderInfoNode(): VNode;
  renderContent(): VNode;
  render(): VNode;
}
