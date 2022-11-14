import { VNode } from "../../stencil-public-runtime";
import { FlowDirection } from "./interfaces";
/**
 * @slot - A slot for adding `calcite-flow-item` or `calcite-panel`s (deprecated) to the flow.
 */
export declare class Flow {
  /**
   * Removes the currently active `calcite-flow-item` or `calcite-panel`.
   */
  back(): Promise<HTMLCalciteFlowItemElement>;
  el: HTMLCalciteFlowElement;
  flowDirection: FlowDirection;
  itemCount: number;
  items: HTMLCalciteFlowItemElement[];
  itemMutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleItemBackClick(): void;
  getFlowDirection: (oldFlowItemCount: number, newFlowItemCount: number) => FlowDirection | null;
  updateFlowProps: () => void;
  render(): VNode;
}
