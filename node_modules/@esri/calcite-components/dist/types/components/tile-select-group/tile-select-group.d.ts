import { VNode } from "../../stencil-public-runtime";
import { TileSelectGroupLayout } from "./interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-tile-select`s.
 */
export declare class TileSelectGroup implements InteractiveComponent {
  el: HTMLCalciteTileSelectGroupElement;
  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  disabled: boolean;
  /**
   * Defines the layout of the component.
   *
   * Use `"horizontal"` for rows, and `"vertical"` for a single column.
   */
  layout?: TileSelectGroupLayout;
  componentDidRender(): void;
  render(): VNode;
}
