import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TreeItemSelectDetail } from "../tree-item/interfaces";
import { TreeSelectDetail, TreeSelectionMode } from "./interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for `calcite-tree-item` elements.
 */
export declare class Tree {
  el: HTMLCalciteTreeElement;
  /** Displays indentation guide lines. */
  lines: boolean;
  /**
   * Display input
   *
   * @deprecated Use `selectionMode="ancestors"` for checkbox input.
   */
  inputEnabled: boolean;
  /**
   * @internal
   */
  child: boolean;
  /** Specifies the size of the component. */
  scale: Scale;
  /**
   * Customize how the component's selection works.
   *
   * @default "single"
   * @see [TreeSelectionMode](https://github.com/Esri/calcite-components/blob/master/src/components/tree/interfaces.ts#L5)
   */
  selectionMode: TreeSelectionMode;
  componentWillRender(): void;
  render(): VNode;
  onFocus(): void;
  onFocusIn(event: FocusEvent): void;
  onFocusOut(event: FocusEvent): void;
  onClick(event: CustomEvent<TreeItemSelectDetail>): void;
  keyDownHandler(event: KeyboardEvent): void;
  updateAncestorTree(event: CustomEvent<TreeItemSelectDetail>): void;
  /**
   * Fires when the user selects/deselects `calcite-tree-items`. An object including an array of selected items will be passed in the event's `detail` property.
   *
   * @see [TreeSelectDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tree/interfaces.ts#L1)
   */
  calciteTreeSelect: EventEmitter<TreeSelectDetail>;
  getRootTabIndex(): number;
}
