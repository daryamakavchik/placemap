import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ChipColor } from "./interfaces";
import { Appearance, DeprecatedEventPayload, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding text.
 * @slot image - A slot for adding an image.
 */
export declare class Chip implements ConditionalSlotComponent {
  /** Specifies the appearance style of the component. */
  appearance: Extract<"solid" | "clear", Appearance>;
  /** Specifies the color for the component. */
  color: ChipColor;
  /**
   * When `true`, a close button is added to the component.
   *
   * @deprecated use `closable` instead.
   */
  dismissible: boolean;
  handleDismissible(value: boolean): void;
  /** When `true`, a close button is added to the component. */
  closable: boolean;
  handleClosable(value: boolean): void;
  /**
   * Accessible name for the component's close button.
   *
   * @default "Close"
   */
  dismissLabel?: string;
  /** Specifies an icon to display. */
  icon?: string;
  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  iconFlipRtl: boolean;
  /** Specifies the size of the component. */
  scale: Scale;
  /** The component's value. */
  value: any;
  /** When `true`, hides the component. */
  closed: boolean;
  el: HTMLCalciteChipElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /**
   * Fires when the dismiss button is clicked.
   *
   * **Note:**: The `el` event payload props is deprecated, please use the event's `target`/`currentTarget` instead.
   */
  calciteChipDismiss: EventEmitter<DeprecatedEventPayload>;
  closeClickHandler: (event: MouseEvent) => void;
  private closeButton;
  private guid;
  renderChipImage(): VNode;
  render(): VNode;
}
