import { EventEmitter, VNode } from "../../stencil-public-runtime";
import Color from "color";
import { ColorAppearance, ColorMode, ColorValue, InternalColor } from "./interfaces";
import { Scale } from "../interfaces";
import { Format } from "./utils";
import { InteractiveComponent } from "../../utils/interactive";
import { NumberingSystem } from "../../utils/locale";
export declare class ColorPicker implements InteractiveComponent {
  el: HTMLCalciteColorPickerElement;
  /**
   * When `false`, an empty color (`null`) will be allowed as a `value`. Otherwise, a color value is enforced on the component.
   *
   * When `true`, a color value is enforced, and clearing the input or blurring will restore the last valid `value`. When `false`, an empty color (`null`) will be allowed as a `value`.
   */
  allowEmpty: boolean;
  /**
   * Specifies the appearance style of the component -
   *
   * `"solid"` (containing border) or `"minimal"` (no containing border).
   */
  appearance: ColorAppearance;
  /**
   * Internal prop for advanced use-cases.
   *
   * @internal
   */
  color: InternalColor | null;
  handleColorChange(color: Color | null, oldColor: Color | null): void;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * The format of `value`.
   *
   * When `"auto"`, the format will be inferred from `value` when set.
   *
   * @default "auto"
   */
  format: Format;
  handleFormatChange(format: ColorPicker["format"]): void;
  /** When `true`, hides the Hex input. */
  hideHex: boolean;
  /** When `true`, hides the RGB/HSV channel inputs. */
  hideChannels: boolean;
  /** When `true`, hides the saved colors section. */
  hideSaved: boolean;
  /**
   * Accessible name for the RGB section's blue channel.
   *
   * @default "B"
   */
  intlB: string;
  /**
   * Accessible name for the RGB section's blue channel description.
   *
   * @default "Blue"
   */
  intlBlue: string;
  /**
   * Accessible name for the delete color button.
   *
   * @default "Delete color"
   */
  intlDeleteColor: string;
  /**
   * Accessible name for the RGB section's green channel.
   *
   * @default "G"
   */
  intlG: string;
  /**
   * Accessible name for the RGB section's green channel description.
   *
   * @default "Green"
   */
  intlGreen: string;
  /**
   * Accessible name for the HSV section's hue channel.
   *
   * @default "H"
   */
  intlH: string;
  /**
   * Accessible name for the HSV mode.
   *
   * @default "HSV"
   */
  intlHsv: string;
  /**
   * Accessible name for the Hex input.
   *
   * @default "Hex"
   */
  intlHex: string;
  /**
   * Accessible name for the HSV section's hue channel description.
   *
   * @default "Hue"
   */
  intlHue: string;
  /**
   * Accessible name for the Hex input when there is no color selected.
   *
   * @default "No color"
   */
  intlNoColor: string;
  /**
   * Accessible name for the RGB section's red channel.
   *
   * @default "R"
   */
  intlR: string;
  /**
   * Accessible name for the RGB section's red channel description.
   *
   * @default "Red"
   */
  intlRed: string;
  /**
   * Accessible name for the RGB mode.
   *
   * @default "RGB"
   */
  intlRgb: string;
  /**
   * Accessible name for the HSV section's saturation channel.
   *
   * @default "S"
   */
  intlS: string;
  /**
   * Accessible name for the HSV section's saturation channel description.
   *
   * @default "Saturation"
   */
  intlSaturation: string;
  /**
   * Accessible name for the save color button.
   *
   * @default "Save color"
   */
  intlSaveColor: string;
  /**
   * Accessible name for the saved colors section.
   *
   * @default "Saved"
   */
  intlSaved: string;
  /**
   * Accessible name for the HSV section's value channel.
   *
   * @default "V"
   */
  intlV: string;
  /**
   * Accessible name for the HSV section's value channel description.
   *
   * @default "Value"
   */
  intlValue: string;
  /** Specifies the size of the component. */
  scale: Scale;
  handleScaleChange(scale?: Scale): void;
  /** Specifies the storage ID for colors. */
  storageId: string;
  /** Specifies the Unicode numeral system used by the component for localization. */
  numberingSystem?: NumberingSystem;
  /**
   * The component's value, where the value can be a CSS color string, or a RGB, HSL or HSV object.
   *
   * The type will be preserved as the color is updated.
   *
   * @default "#007ac2"
   * @see [CSS Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   * @see [ColorValue](https://github.com/Esri/calcite-components/blob/master/src/components/color-picker/interfaces.ts#L10)
   */
  value: ColorValue | null;
  handleValueChange(value: ColorValue | null, oldValue: ColorValue | null): void;
  private get baseColorFieldColor();
  private activeColorFieldAndSliderRect;
  private colorFieldAndSliderHovered;
  private fieldAndSliderRenderingContext;
  private colorFieldScopeNode;
  private hueThumbState;
  private hueScopeNode;
  private internalColorUpdateContext;
  private previousColor;
  private mode;
  private shiftKeyChannelAdjustment;
  private sliderThumbState;
  colorFieldAndSliderInteractive: boolean;
  channelMode: ColorMode;
  channels: [number, number, number];
  dimensions: {
    slider: {
      height: number;
      width: number;
    };
    colorField: {
      height: number;
      width: number;
    };
    thumb: {
      radius: number;
    };
  };
  savedColors: string[];
  colorFieldScopeTop: number;
  colorFieldScopeLeft: number;
  scopeOrientation: "vertical" | "horizontal";
  hueScopeLeft: number;
  hueScopeTop: number;
  /**
   * Fires when the color value has changed.
   */
  calciteColorPickerChange: EventEmitter<void>;
  /**
   * Fires as the color value changes.
   *
   * Similar to the `calciteColorPickerChange` event with the exception of dragging. When dragging the color field or hue slider thumb, this event fires as the thumb is moved.
   */
  calciteColorPickerInput: EventEmitter<void>;
  private handleTabActivate;
  private handleColorFieldScopeKeyDown;
  private handleHueScopeKeyDown;
  private handleHexInputChange;
  private handleSavedColorSelect;
  private handleChannelInput;
  protected handleChannelKeyUpOrDown(event: KeyboardEvent): void;
  private handleChannelChange;
  private handleSavedColorKeyDown;
  private handleColorFieldAndSliderPointerLeave;
  private handleColorFieldAndSliderPointerDown;
  private globalPointerUpHandler;
  private globalPointerMoveHandler;
  private handleColorFieldAndSliderPointerEnterOrMove;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
  private storeColorFieldScope;
  private storeHueScope;
  private renderChannelsTabTitle;
  private renderChannelsTab;
  private renderChannel;
  handleKeyDown(event: KeyboardEvent): void;
  private showIncompatibleColorWarning;
  private setMode;
  private captureHueSliderColor;
  private getCanvasRegion;
  private internalColorSet;
  private toValue;
  private getSliderCapSpacing;
  private updateDimensions;
  private deleteColor;
  private saveColor;
  private drawColorFieldAndSlider;
  private drawColorField;
  private setCanvasContextSize;
  private captureColorFieldColor;
  private initColorFieldAndSlider;
  private updateCanvasSize;
  private containsPoint;
  private drawActiveColorFieldColor;
  private drawThumb;
  private drawActiveHueSliderColor;
  private drawHueSlider;
  private updateColorFromChannels;
  private updateChannelsFromColor;
  private toChannels;
}
