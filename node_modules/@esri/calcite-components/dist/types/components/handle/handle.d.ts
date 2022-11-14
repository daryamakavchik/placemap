import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { DeprecatedEventPayload } from "../interfaces";
export declare class Handle {
  /**
   * @internal
   */
  activated: boolean;
  /**
   * Value for the button title attribute
   */
  textTitle: string;
  el: HTMLCalciteHandleElement;
  handleButton: HTMLElement;
  /**
   * Emitted when the handle is activated and the up or down arrow key is pressed.
   *
   * **Note:**: The `handle` event payload prop is deprecated, please use the event's `target`/`currentTarget` instead
   */
  calciteHandleNudge: EventEmitter<DeprecatedEventPayload>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBlur: () => void;
  render(): VNode;
}
