import { VNode } from "../../stencil-public-runtime";
import { Scale, Status } from "../interfaces";
/**
 * @slot - A slot for adding text.
 */
export declare class InputMessage {
  el: HTMLCalciteInputMessageElement;
  /** When `true`, the component is active. */
  active: boolean;
  /** Specifies an icon to display. */
  icon: boolean | string;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Specifies the status of the input field, which determines message and icons. */
  status: Status;
  /**
   * Specifies the appearance of a slotted message - `"default"` (displayed under the component), or `"floating"` (positioned absolutely under the component).
   *
   * @deprecated The `"floating"` type is no longer supported.
   */
  type: "default";
  handleIconEl(): void;
  connectedCallback(): void;
  render(): VNode;
  /** the computed icon to render */
  private requestedIcon?;
  private renderIcon;
}
