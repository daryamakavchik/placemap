import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TabChangeEventDetail } from "./interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for adding content to the component.
 */
export declare class Tab {
  el: HTMLCalciteTabElement;
  /**
   * Specifies a unique name for the component.
   *
   * When specified, use the same value on the `calcite-tab-title`.
   */
  tab?: string;
  /**
   * When `true`, the component's contents are selected.
   *
   * Only one tab can be selected within the `calcite-tabs` parent.
   *
   * @deprecated Use `selected` instead.
   */
  active: boolean;
  activeHandler(value: boolean): void;
  /**
   * When `true`, the component's contents are selected.
   *
   * Only one tab can be selected within the `calcite-tabs` parent.
   */
  selected: boolean;
  selectedHandler(value: boolean): void;
  /**
   * @internal
   */
  scale: Scale;
  render(): VNode;
  connectedCallback(): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  disconnectedCallback(): void;
  /**
   * @internal
   */
  calciteInternalTabRegister: EventEmitter<void>;
  internalTabChangeHandler(event: CustomEvent<TabChangeEventDetail>): void;
  /**
   * Returns the index of the component item within the tab array.
   */
  getTabIndex(): Promise<number>;
  parentTabsEl: HTMLCalciteTabsElement;
  guid: string;
  labeledBy: string;
  /**
   * @param tabIds
   * @param titleIds
   * @internal
   */
  updateAriaInfo(tabIds?: string[], titleIds?: string[]): Promise<void>;
}
