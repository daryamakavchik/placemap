import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { BlockSectionToggleDisplay } from "./interfaces";
import { Status } from "../interfaces";
/**
 * @slot - A slot for adding content to the component.
 */
export declare class BlockSection {
  /**
   * Accessible name for the component's collapse button.
   */
  intlCollapse?: string;
  /**
   * Accessible name for the component's expand button.
   */
  intlExpand?: string;
  /**
   * When `true`, expands the component and its contents.
   */
  open: boolean;
  /**
   * Displays a status-related indicator icon.
   */
  status?: Status;
  /**
   * The component header text.
   */
  text: string;
  /**
   * Specifies the component's toggle display -
   *
   * `"button"` (selectable header), or
   *
   * `"switch"` (toggle switch).
   */
  toggleDisplay: BlockSectionToggleDisplay;
  el: HTMLCalciteBlockSectionElement;
  private guid;
  /**
   * Emits when the header has been clicked.
   */
  calciteBlockSectionToggle: EventEmitter<void>;
  handleHeaderKeyDown: (event: KeyboardEvent) => void;
  toggleSection: () => void;
  renderStatusIcon(): VNode[];
  render(): VNode;
}
