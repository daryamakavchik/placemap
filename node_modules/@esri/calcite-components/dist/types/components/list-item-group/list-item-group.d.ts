import { VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
/**
 * @slot - A slot for adding `calcite-list-item` and `calcite-list-item-group` elements.
 */
export declare class ListItemGroup {
  /**
   * The header text for all nested `calcite-list-item` rows.
   *
   */
  heading: string;
  /**
   * Specifies the number at which section headings should start.
   */
  headingLevel: HeadingLevel;
  el: HTMLCalciteListItemGroupElement;
  render(): VNode;
}
