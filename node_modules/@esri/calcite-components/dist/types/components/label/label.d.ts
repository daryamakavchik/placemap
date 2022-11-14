import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Alignment, Scale, Status } from "../interfaces";
/**
 * @slot - A slot for adding text and a component that can be labeled.
 */
export declare class Label {
  el: HTMLCalciteLabelElement;
  /** Specifies the text alignment of the component. */
  alignment: Alignment;
  /**
   * Specifies the status of the component and any child input, or input messages.
   *
   * @deprecated Set directly on the component the label is bound to instead.
   */
  status: Status;
  /** Specifies the `id` of the component the label is bound to. Use when the component the label is bound to does not reside within the component. */
  for: string;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Defines the layout of the label in relation to the component. Use `"inline"` positions to wrap the label and component on the same line. */
  layout: "inline" | "inline-space-between" | "default";
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   *
   * @deprecated Use the `disabled` property on the component the label is bound to instead.
   */
  disabled: boolean;
  /**
   * When `true`, disables the component's spacing.
   *
   * @deprecated Set the `--calcite-label-margin-bottom` css variable to `0` instead.
   */
  disableSpacing: boolean;
  /**
   * @internal
   */
  calciteInternalLabelClick: EventEmitter<{
    sourceEvent: MouseEvent;
  }>;
  labelClickHandler: (event: MouseEvent) => void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
