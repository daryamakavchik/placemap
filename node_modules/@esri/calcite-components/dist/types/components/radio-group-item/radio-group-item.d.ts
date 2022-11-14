import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position } from "../interfaces";
export declare class RadioGroupItem {
  el: HTMLCalciteRadioGroupItemElement;
  /** When `true`, the component is checked. */
  checked: boolean;
  protected handleCheckedChange(): void;
  /**
   * Specifies an icon to display.
   *
   * @deprecated Use either `iconStart` or `iconEnd` but do not combine them with `icon` and `iconPosition`.
   */
  icon?: string;
  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  iconFlipRtl: boolean;
  /**
   * Specifies the placement of the icon.
   *
   * @deprecated Use either `iconStart` or `iconEnd` but do not combine them with `icon` and `iconPosition`.
   */
  iconPosition?: Position;
  /** Specifies an icon to display at the start of the component. */
  iconStart?: string;
  /** Specifies an icon to display at the end of the component. */
  iconEnd?: string;
  /**
   * The component's value.
   */
  value: any | null;
  render(): VNode;
  /**
   * Fires when the item has been selected.
   *
   * @internal
   */
  calciteInternalRadioGroupItemChange: EventEmitter<void>;
}
