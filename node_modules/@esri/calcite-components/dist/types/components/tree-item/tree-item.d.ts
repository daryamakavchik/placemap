import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TreeItemSelectDetail } from "./interfaces";
import { TreeSelectionMode } from "../tree/interfaces";
import { Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding the component's content.
 * @slot children - A slot for adding nested `calcite-tree` elements.
 */
export declare class TreeItem implements ConditionalSlotComponent, InteractiveComponent {
  el: HTMLCalciteTreeItemElement;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /** When `true`, the component is selected. */
  selected: boolean;
  /** When `true`, the component is expanded. */
  expanded: boolean;
  expandedHandler(newValue: boolean): void;
  /**
   * @internal
   */
  parentExpanded: boolean;
  /**
   * @internal
   */
  depth: number;
  /**
   * @internal
   */
  hasChildren: boolean;
  /**
   * @internal
   */
  lines: boolean;
  /**
   * Displays checkboxes (set on parent).
   *
   * @internal
   * @deprecated Use `selectionMode="ancestors"` for checkbox input.
   */
  inputEnabled: boolean;
  /**
   * @internal
   */
  scale: Scale;
  /**
   * In ancestor selection mode, show as indeterminate when only some children are selected.
   *
   * @internal
   */
  indeterminate: boolean;
  /**
   * @internal
   */
  selectionMode: TreeSelectionMode;
  getselectionMode(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillRender(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  private isSelectionMultiLike;
  render(): VNode;
  onClick(event: Event): void;
  iconClickHandler: (event: MouseEvent) => void;
  childrenClickHandler: (event: MouseEvent) => void;
  keyDownHandler(event: KeyboardEvent): void;
  /**
   * @internal
   */
  calciteInternalTreeItemSelect: EventEmitter<TreeItemSelectDetail>;
  childrenSlotWrapper: HTMLElement;
  defaultSlotWrapper: HTMLElement;
  private parentTreeItem?;
  private updateParentIsExpanded;
  private updateAncestorTree;
}
