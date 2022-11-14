import { EventEmitter, VNode } from "../../stencil-public-runtime";
import Color from "color";
import { Scale } from "../interfaces";
import { NumberingSystem } from "../../utils/locale";
export declare class ColorPickerHexInput {
  el: HTMLCalciteColorPickerHexInputElement;
  connectedCallback(): void;
  /**
   * When `false`, an empty color (`null`) will be allowed as a `value`. Otherwise, a color value is enforced on the component.
   *
   * When `true`, a color value is enforced, and clearing the input or blurring will restore the last valid `value`. When `false`, an empty color (`null`) will be allowed as a `value`.
   */
  allowEmpty: boolean;
  /**
   * Accessible name for the Hex input.
   *
   * @default "Hex"
   */
  intlHex: string;
  /**
   * Accessible name for the Hex input when there is no color selected.
   *
   * @default "No color"
   */
  intlNoColor: string;
  /** Specifies the size of the component. */
  scale: Scale;
  /**
   * The Hex value.
   */
  value: string;
  /** Specifies the Unicode numeral system used by the component for localization. */
  numberingSystem?: NumberingSystem;
  handleValueChange(value: string, oldValue: string): void;
  /**
   * Emitted when the hex value changes.
   */
  calciteColorPickerHexInputChange: EventEmitter<void>;
  private onCalciteInternalInputBlur;
  private onInputChange;
  protected onInputKeyDown(event: KeyboardEvent): void;
  private onPaste;
  private inputNode;
  /**
   * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
   */
  internalColor: Color | null;
  private previousNonNullValue;
  render(): VNode;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  private internalSetValue;
  private storeInputRef;
  private formatForInternalInput;
  private nudgeRGBChannels;
  handleKeyDown(event: KeyboardEvent): void;
}
