import { VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding `calcite-pick-list-item` elements.
 */
export declare class PickListGroup implements ConditionalSlotComponent {
  /**
   * Specifies the title for all nested `calcite-pick-list-item`s.
   *
   */
  groupTitle: string;
  /**
   * Specifies the number at which section headings should start.
   */
  headingLevel: HeadingLevel;
  el: HTMLCalcitePickListGroupElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
